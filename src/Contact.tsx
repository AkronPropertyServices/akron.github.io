/* God forgive me for this horrible code. And I don't believe in god.
  That tells you how bad this code is.
*/
import { useLanguage } from "./LanguageContext";
import { translations } from "./translations";
import { useEffect, useRef, useState } from "react";
import { BsSendFill } from "react-icons/bs";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(CustomEase);

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

interface InputFilledState {
  ref: React.RefObject<HTMLInputElement>;
  label: string;
  setLabel: (str: string) => void;
  placeholder: string;
  setPlaceholder: (str: string) => void;
  isFilled: React.MutableRefObject<boolean>;
  setIsFilled: (filled: boolean) => void;
}
function useInputFilled(
  defaultLabel: string,
  activeLabel: string,
  defaultPlaceholder: string,
): InputFilledState {
  const [label, setLabel] = useState(defaultLabel);
  const [placeholder, setPlaceholder] = useState(defaultPlaceholder);
  const isFilled = useRef(false);
  const ref = useRef<HTMLInputElement>(null);

  const setIsFilled = (filled: boolean) => {
    isFilled.current = filled;
  };

  useEffect(() => {
    setLabel(defaultLabel);
    setPlaceholder(defaultPlaceholder);

    const handleFocus = () => {
      setPlaceholder("");
      setLabel(activeLabel);
    };
    const handleBlur = () => {
      setPlaceholder(defaultPlaceholder);
      setLabel(defaultLabel);
    };

    const current = ref.current;
    if (current) {
      current.addEventListener("focus", handleFocus);
      current.addEventListener("blur", handleBlur);
    }
    return () => {
      if (current) {
        current.removeEventListener("focus", handleFocus);
        current.removeEventListener("blur", handleBlur);
      }
    };
  }, [defaultLabel, activeLabel, defaultPlaceholder]);

  return {
    ref,
    label,
    setLabel,
    placeholder,
    setPlaceholder,
    isFilled,
    setIsFilled,
  };
}

export default function Contact() {
  const { language } = useLanguage();

  const name = useInputFilled(
    "\u00A0",
    translations[language].name,
    translations[language].yourName,
  );
  const phone = useInputFilled(
    "\u00A0",
    translations[language].phone,
    translations[language].yourPhone,
  );
  const email = useInputFilled(
    "\u00A0",
    translations[language].email,
    translations[language].yourEmail,
  );

  const fetchSuccess = useRef(false);
  const feedbackSent = useRef(false);

  const sendIconRef = useRef<HTMLDivElement>(null);
  const gsapCtx = useRef<gsap.Context | null>(null);
  const [sentColour, setSentColour] = useState("text-green-600");
  const [feedbackText, setFeedbackText] = useState("");
  const [pColour, setPColour] = useState("");

  const maxWords = 100;
  const feedbackRef = useRef<HTMLTextAreaElement>(null);
  const [feedbackRefPlaceholder, setFeedbackRefPlaceholder] = useState(
    translations[language].feedback,
  );
  const countRef = useRef<HTMLSpanElement>(null);
  const isFeedbackFilled = useRef(false);
  const [isValid, setIsValid] = useState(false);

  function setIsFeedbackFilled(filled: boolean) {
    isFeedbackFilled.current = filled;
  }

  function checkValidity() {
    if (
      phone.isFilled.current &&
      email.isFilled.current &&
      isFeedbackFilled.current
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }

  function checkEmailValidity(el: HTMLInputElement | null): boolean {
    if (!el) return false;
    if (!el.checkValidity()) {
      email.setPlaceholder("");
      email.setLabel(translations[language].invalidEmail);
      return false;
    }

    return true;
  }

  function checkPhoneValidity(el: HTMLInputElement | null): boolean {
    if (!el) return false;

    if (!el.checkValidity()) {
      phone.setPlaceholder("");
      phone.setLabel(translations[language].invalidNumber);
      return false;
    }

    return true;
  }

  function checkFeedBackValidity() {
    if (isFeedbackFilled.current) return true;

    feedbackRef.current?.focus();
    setFeedbackRefPlaceholder(translations[language].invalidFeedback);
  }

  async function sendFeedback() {
    const phoneEl: HTMLInputElement | null = phone.ref.current;
    const emailEl: HTMLInputElement | null = email.ref.current;

    let emailValidity: boolean = checkEmailValidity(emailEl);
    let phoneValidity: boolean = checkPhoneValidity(phoneEl);

    async function sendFetchReq(ms: number) {
      await sleep(ms);

      fetchSuccess.current = false;
      let colour = "text-red-600";
      setPColour(colour);
      setSentColour(colour);
    }

    async function showSendingAnimation(fn: () => void) {
      const sendIconEl: HTMLDivElement | null = sendIconRef.current;
      if (!isValid || !sendIconEl) {
        return null;
      }

      let elBoundingRect = sendIconEl?.getBoundingClientRect();

      let parentWidth: number =
        sendIconEl?.parentElement?.getBoundingClientRect().width || 0;
      let parentHeight: number =
        sendIconEl?.parentElement?.getBoundingClientRect().height || 0;
      let currDivEndingX: number = elBoundingRect?.right || 0;

      let elWidth: number = elBoundingRect?.width || 0;
      let elHeight: number = elBoundingRect?.height || 0;
      let elDiag: number = Math.sqrt(elWidth * elWidth + elHeight * elHeight);

      let widthLeftToMove: number = parentWidth - currDivEndingX;

      const defaultDuration = 2;
      const defaultEase = "power1.inOut";

      let tl = gsap.timeline({
        defaults: { duration: defaultDuration, ease: defaultEase },
      });

      let gsapCtx: gsap.Context = gsap.context(async () => {
        sendIconEl.removeEventListener("click", sendFeedback);

        let pathTween = gsap.to(sendIconEl, {
          motionPath: {
            path: [
              { x: elDiag * 2, y: -1 * parentHeight * 2 }, // -100 because y-coords are negative upwards on screen
              { x: 0, y: -1 * parentHeight * 2 + parentHeight / 2 },
              { x: elDiag * 2, y: -1 * parentHeight * 2 + parentHeight / 2 },
              {
                x: widthLeftToMove + elDiag,
                y: -1 * parentHeight * 2 - parentHeight / 2,
              },
            ],
            align: "self",
            alignOrigin: [0.5, 0.5],
            autoRotate: true,
          },
          duration: defaultDuration,
          ease: CustomEase.create(
            "custom",
            "M0,0 C0.2,0 0.589,0.374 0.722,0.58 0.828,0.746 0.874,0.848 0.94,0.916 0.963,0.94 0.953,1 1,1 ",
          ),
          onComplete: function () {
            gsap.set(sendIconEl, {
              x: -1 * widthLeftToMove - elDiag,
              y: 0,
              rotation: 0,
            });
          },
        });

        pathTween.time(0.001); // move the playhead just barely into the tween so that the rotation gets applied.

        let rotation = gsap.getProperty(sendIconEl, "rotation"); // record that duration
        pathTween.time(0); // reset the tween

        tl.fromTo(sendIconEl, { rotation: 0 }, { rotation, duration: 0.5 }); // start with the initial rotation

        tl.add(pathTween); // sequence the tween
      }, sendIconRef);

      await sendFetchReq(2500); // duration of the animations combined

      gsapCtx.add(() => {
        if (!sendIconEl) {
          return;
        }
        tl.to(sendIconEl, {
          motionPath: {
            path: [
              { x: widthLeftToMove / 2, y: -100 }, // -100 because y-coords are negative upwards on screen
              { x: 0, y: 0 },
            ],
            align: "self",
            alignOrigin: [0.5, 0.5],
            autoRotate: true,
          },
        });

        // To ensure start rotation
        tl.to(
          sendIconEl,
          {
            rotation: "0_cw",
            immediateRender: false,
            duration: 1,
            onComplete: fn,
          },
          "-=0.5",
        );
      }, sendIconRef);

      return gsapCtx;
    }

    if (emailValidity && phoneValidity) {
      // show error message depending on the colour of the send icon
      function handleErrOrSuccess() {
        if (isValid)
          sendIconRef.current?.addEventListener("click", sendFeedback);
        if (!fetchSuccess.current)
          setFeedbackText(translations[language].FAILED);
        else setFeedbackText(translations[language].SUCCESS);
        feedbackSent.current = !feedbackSent.current;
        setSentColour("text-green-600");
      }
      gsapCtx.current = await showSendingAnimation(handleErrOrSuccess);
    }
  }

  useEffect(() => {
    if (isValid) sendIconRef?.current?.addEventListener("click", sendFeedback);
    else sendIconRef?.current?.removeEventListener("click", sendFeedback);

    return () => {
      gsapCtx.current?.revert();
      if (!isValid)
        sendIconRef?.current?.removeEventListener("click", sendFeedback);
    };
  }, [isValid]);

  useEffect(() => {
    const feedback_el = feedbackRef.current;
    const count_el = countRef.current;

    function handleInput() {
      let count = feedback_el?.value.length || 0;

      if (count > maxWords) {
        let gap = maxWords - count;
        count = maxWords;
        if (feedback_el) feedback_el.value = feedback_el.value.slice(0, gap);
      }
      if (!count_el) return;
      if (count === maxWords) count_el.style.color = "red";
      else if (count) count_el.style.color = "green";
      else count_el.style.color = "rgb(202, 138, 4)";

      count_el.innerHTML = `${count}/${maxWords}`;

      setIsFeedbackFilled(count > 0);
      checkValidity();
    }

    if (feedback_el) {
      feedback_el.addEventListener("input", handleInput);
    }

    return () => {
      if (feedback_el) {
        feedback_el.removeEventListener("input", handleInput);
      }
    };
  }, []);

  const animationText = useRef("");
  const typingInterval = useRef(0);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    animationText.current = "";
    let i = 0;
    if (typingInterval.current) {
      clearInterval(typingInterval.current);
    }
    typingInterval.current = setInterval(() => {
      if (i < feedbackText.length) {
        animationText.current += feedbackText[i];
        i++;
        if (textRef.current) {
          textRef.current.textContent = animationText.current;
        }
      } else {
        clearInterval(typingInterval.current);
      }
    }, 100);

    return () => clearInterval(typingInterval.current);
  }, [feedbackText]);

  useEffect(() => {
    setFeedbackRefPlaceholder(translations[language].feedback);
    if (feedbackSent.current) {
      if (!fetchSuccess.current) setFeedbackText(translations[language].FAILED);
      else setFeedbackText(translations[language].SUCCESS);
    }
  }, [language]);

  return (
    <>
      <h2 className="sub-heading mb-0 ml-6 text-4xl sm:ml-12 sm:text-6xl md:text-9xl">
        {translations[language].contactTitle}
      </h2>
      <div className="ml-4 mr-4 grid grid-cols-1 gap-4 sm:ml-8 sm:mr-8 md:ml-14 md:mr-14 md:grid-cols-2 md:gap-8">
        <div className="feedback-info mt-5 h-full w-full p-4">
          <label
            htmlFor="_name"
            className={`block select-none text-lg font-semibold tracking-widest text-white sm:text-xl ${
              name.placeholder === "" ? "active" : ""
            }`}
          >
            {name.label}
          </label>
          <input
            ref={name.ref}
            id="_name"
            max="100"
            autoComplete="off"
            type="text"
            className="mb-3 mt-1 w-full bg-transparent p-2 pl-0 text-lg text-white outline-none sm:text-xl"
            placeholder={name.placeholder}
          />
          <label
            htmlFor="_phone"
            className={`block select-none text-lg font-semibold tracking-widest text-white sm:text-xl ${
              phone.placeholder === "" ? "active" : ""
            }`}
          >
            {phone.label}
          </label>
          <input
            inputMode="numeric"
            ref={phone.ref}
            required
            id="_phone"
            max="100"
            pattern="(\+)?\d*"
            autoComplete="off"
            type="tel"
            className="mb-3 mt-1 w-full bg-transparent p-2 pl-0 text-lg text-white outline-none sm:text-xl"
            placeholder={phone.placeholder}
            onChange={(e) => {
              phone.setIsFilled(e.target.value.length > 0);
              checkValidity();
            }}
          />
          <label
            htmlFor="_email"
            className={`block select-none text-lg font-semibold tracking-widest text-white sm:text-xl ${
              email.placeholder === "" ? "active" : ""
            }`}
          >
            {email.label}
          </label>
          <input
            ref={email.ref}
            required
            id="_email"
            max="100"
            autoComplete="off"
            type="email"
            className="mt-1 w-full bg-transparent p-2 pl-0 text-lg text-white outline-none sm:text-xl"
            placeholder={email.placeholder}
            onChange={(e) => {
              email.setIsFilled(e.target.value.length > 0);
              checkValidity();
            }}
          />
        </div>

        <div className="feedback-text mt-5 h-full w-full p-4">
          <div className="glow h-full w-full rounded-2xl outline-none">
            <textarea
              ref={feedbackRef}
              placeholder={feedbackRefPlaceholder}
              onBlur={() => {
                setFeedbackRefPlaceholder(translations[language].feedback);
              }}
              autoComplete="off"
              className="h-full w-full rounded-2xl bg-black p-4 text-lg text-white outline-none focus:mb-4 sm:p-8 sm:text-xl"
            />
            <span
              ref={countRef}
              className="font-['Roboto_Mono'] text-lg text-yellow-600 sm:text-xl"
            >
              0/{maxWords}
            </span>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="mt-5 flex justify-center overflow-x-clip">
        <p
          ref={textRef}
          className={`absolute left-0 ml-4 font-['Poppins'] text-4xl sm:ml-8 sm:text-6xl md:ml-16 md:text-9xl ${pColour}`}
        ></p>
        {isValid ? (
          <div ref={sendIconRef} className="box-border">
            <BsSendFill className={`xs:mt-0 mt-8 text-9xl ${sentColour}`} />
          </div>
        ) : (
          <div
            className="box-border"
            onClick={() => {
              checkPhoneValidity(phone.ref.current);
              checkEmailValidity(email.ref.current);
              checkFeedBackValidity();
            }}
          >
            <BsSendFill className="xs:mt-0 mt-8 text-9xl text-yellow-600" />
          </div>
        )}
      </div>
    </>
  );
}

// TODO: as soon as the user clicks the send button, record the feedback in an array

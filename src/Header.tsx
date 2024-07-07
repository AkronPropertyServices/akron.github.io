import { useEffect, useRef } from "react";
import $ from "jquery";
import "jquery.easing";
import { FaInstagram, FaFacebook, FaPhone, FaEnvelope } from "react-icons/fa";
import { useLanguage } from "./LanguageContext";
import { translations } from "./translations";

export default function Header({ clickFn }: { clickFn: () => void }) {
  const topContact = useRef(null);
  const topLogo = useRef(null);
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLanguage((prev) => (prev === "en" ? "it" : "en"));
  };

  useEffect(() => {
    // since jQuery is used only for animations, it should be fine
    if (!topLogo.current) return;
    $(topLogo.current).css({ top: "-100px" }).hide().delay(300).show().animate(
      {
        top: "0px",
      },
      1000,
      "easeOutBounce",
    );

    if (!topContact.current) return;
    $(topContact.current).hide();

    setTimeout(() => {
      if (!topContact.current) return;
      $(topContact.current).show();
      $(topContact.current)
        .children()
        .each(function (i) {
          $(this)
            .delay(300 * i)
            .css({ position: "relative", top: "-100px" })
            .show()
            .animate(
              {
                top: "0px",
              },
              1000,
              "easeOutBounce",
            );
        });
    }, 1300);
  }, []);

  return (
    <>
      <div className="fixed left-0 top-0 z-10 mt-2 flex flex-col sm:mt-5 sm:flex-row sm:items-center">
        <div
          ref={topLogo}
          className="neon-glow-hover ml-2 mr-2 w-32 bg-transparent sm:ml-3 sm:w-64"
          onClick={clickFn}
        >
          <img src="./LogoWhite.svg" alt="Logo" />
        </div>
        <button
          onClick={toggleLanguage}
          className="relative ml-2 flex h-12 w-32 items-center overflow-hidden rounded-full bg-gray-200 shadow-inner transition-transform duration-300 sm:w-32"
        >
          <span
            className={`absolute left-0 top-0 h-16 w-16 transform rounded-full bg-blue-500 shadow-lg ${
              language === "en" ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300`}
          ></span>
          <img
            src="./australia_flag.svg"
            alt="Australia Flag"
            className={`absolute left-0 top-0 h-full w-1/2 object-cover ${
              language === "en" ? "" : "opacity-10"
            }`}
          />
          <img
            src="./italy_flag.svg"
            alt="Italy Flag"
            className={`absolute left-1/2 top-0 h-full w-1/2 object-cover ${
              language === "en" ? "opacity-10" : ""
            }`}
          />
        </button>
      </div>
      <div
        ref={topContact}
        className="fixed right-0 top-0 z-10 m-0 flex flex-row items-center justify-around bg-transparent sm:m-5 sm:w-64"
      >
        <div className="flex sm:flex-row flex-col">
          <div className="flex sm:w-16 w-14 flex-grow items-center justify-center p-2">
            <a
              href={translations[language].insta}
              target="_blank"
              rel="noopener noreferrer"
              className="icon neon-glow-hover"
            >
              <FaInstagram className="icon hover:text-purple-500 text-[#828282]" />
            </a>
          </div>
          <div className="flex sm:w-16 w-14 flex-grow items-center justify-center p-2">
            <a
              href={translations[language].fb}
              target="_blank"
              rel="noopener noreferrer"
              className="icon neon-glow-hover"
            >
              <FaFacebook className="icon hover:text-blue-500 text-[#828282]" />
            </a>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col">
          <div className="flex sm:w-16 w-14 flex-grow items-center justify-center p-2">
            <a href={"tel:" + translations[language].phoneNum.replace(" ", "")} className="icon neon-glow-hover">
              <FaPhone className="icon hover:text-green-500 text-[#828282]" />
            </a>
          </div>
          <div className="flex sm:w-16 w-14 flex-grow items-center justify-center p-2">
            <a
              href={"mailto:" + translations[language].emailLink}
              className="icon neon-glow-hover"
            >
              <FaEnvelope className="icon hover:text-red-500 text-[#828282]" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

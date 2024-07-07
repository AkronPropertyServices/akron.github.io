import { AiOutlineGithub, AiOutlineMail, AiFillPhone } from "react-icons/ai";
import { IconType } from "react-icons";
import { useLanguage } from "./LanguageContext";
import { translations } from "./translations";

interface IFooterComponent {
  component?: IconType;
  str: string;
  href?: string;
  breakAll?: boolean;
}
function FooterComponent({
  component: Component,
  str,
  href,
  breakAll,
}: IFooterComponent) {
  return (
    <a
      target="_blank"
      href={href}
      className="inline-flex h-2/4 items-center bg-red-950 p-0 py-8 font-bold text-white hover:bg-white hover:text-black xs:px-4 xl:py-4"
    >
      {Component && <Component className="mr-3 h-6 w-6" />}
      <p className={"text-xs xl:text-sm" + (breakAll && " break-all")}>{str}</p>
    </a>
  );
}

export default function Footer() {
  const { language } = useLanguage();
  return (
    <div className="mt-24 bg-red-900 px-5 py-10 text-white">
      <div className="flex flex-col items-center justify-between sm:flex-row sm:items-stretch">
        <img
          src="./Logo.svg"
          alt="logo"
          className="w-[215px] sm:ml-5 xl:w-[430px]"
        />
        <div className="ml-5 grid grid-cols-1 items-center gap-1 sm:grid-cols-3 sm:gap-10">
          <FooterComponent str={translations[language].companyInfo} />
          <FooterComponent str={translations[language].copyrightInfo} />
          <FooterComponent str={translations[language].ABN} />
          <FooterComponent str={translations[language].ABN} />

          <FooterComponent
            component={AiOutlineMail}
            str={translations[language].emailLink}
            href={"mailto:" + translations[language].emailLink}
            breakAll={true}
          />

          <FooterComponent
            component={AiFillPhone}
            str={translations[language].phoneNum}
            href={"tel:" + translations[language].phoneNum.replace(" ", "")}
          />
        </div>
      </div>
      <hr className="my-10" />

      {/* <div className="ml-5 mr-14 flex items-center justify-between">
        <p className="font-['Mulish']">{translations[language].madeBy}</p>
        <a
          href="https://github.com/Kulsgam"
          target="_blank"
          rel="noreferrer"
          className="github-logo flex items-center rounded bg-[#301934] px-4 py-2 font-['Mulish'] text-xl font-bold text-white hover:scale-125 hover:bg-white hover:text-fuchsia-700"
        >
          <AiOutlineGithub className="mr-2" /> Github
        </a>
      </div> */}
    </div>
  );
}

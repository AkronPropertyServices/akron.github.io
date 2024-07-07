import { useLanguage } from "./LanguageContext";
import { translations } from "./translations";

export default function About() {
  const { language } = useLanguage();
  return (
    <>
      <br></br>
      <div className="mt-24 flex flex-col items-center xl:flex-row">
        <div className="w-full xl:w-[300rem]">
          <h1 className="sub-heading w-full text-5xl xss:text-6xl xs:text-7xl leading-none sm:text-9xl">
            {translations[language].aboutTitle1}
            <br></br>
            {translations[language].aboutTitle2}
          </h1>
        </div>
        <div className="info-text-container m-2 sm:mt-0 sm:m-12">
          <p className="info-text text-base xss:text-xl sm:text-4xl">
            {translations[language].aboutDescription}
          </p>
        </div>
      </div>
    </>
  );
}

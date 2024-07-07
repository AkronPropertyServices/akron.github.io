import { useLanguage } from "./LanguageContext";
import { translations } from "./translations";

export default function Slogan() {
  const { language } = useLanguage();
  return (
    <h3 className="slogan">
      <i>
        <span className="slogan-highlight">{translations[language].Neat}</span>
        {translations[language].and}
        <span className="slogan-highlight">
          {translations[language].Tidy}
        </span>, <br></br> {translations[language].slogan1}
        <span className="slogan-highlight">{translations[language].Duty}</span>
      </i>
    </h3>
  );
}

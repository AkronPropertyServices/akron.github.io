import ServiceCard from "./ServiceCard";
import { useLanguage } from "./LanguageContext";
import { translations } from "./translations";
import { descTranslations } from "./translations";

export default function Services() {
  const { language } = useLanguage();
  return (
    <>
      <h1 className="main-heading">{translations[language].servicesTitle}</h1>
      <div className="services-container sm:m-12 m-0">
        <ServiceCard
          title={translations[language].commercial}
          imgPath="./src/assets/images/comclean.png"
          description={[
            descTranslations[language].commercial[0],
            descTranslations[language].commercial[1],
            descTranslations[language].commercial[2],
            descTranslations[language].commercial[3],
            descTranslations[language].commercial[4],
            descTranslations[language].commercial[5],
          ]}
        />
        <ServiceCard
          title={translations[language].industrial}
          imgPath="./src/assets/images/industrial.png"
          description={[
            descTranslations[language].industrial[0],
            descTranslations[language].industrial[1],
            descTranslations[language].industrial[2],
            descTranslations[language].industrial[3],
            descTranslations[language].industrial[4],
            descTranslations[language].industrial[5],
          ]}
        />
        <ServiceCard
          title={translations[language].vacate}
          imgPath="./src/assets/images/vacate.png"
          description={[
            descTranslations[language].vacate[0],
            descTranslations[language].vacate[1],
            descTranslations[language].vacate[2],
            descTranslations[language].vacate[3],
            descTranslations[language].vacate[4],
            descTranslations[language].vacate[5],
          ]}
        />
        <ServiceCard
          title={translations[language].garden}
          imgPath="./src/assets/images/garden.png"
          description={[
            descTranslations[language].garden[0],
            descTranslations[language].garden[1],
            descTranslations[language].garden[2],
            descTranslations[language].garden[3],
            descTranslations[language].garden[4],
            descTranslations[language].garden[5],
          ]}
        />
        <ServiceCard
          title={translations[language].office}
          imgPath="./src/assets/images/office.png"
          description={[
            descTranslations[language].office[0],
            descTranslations[language].office[1],
            descTranslations[language].office[2],
            descTranslations[language].office[3],
            descTranslations[language].office[4],
            descTranslations[language].office[5],
          ]}
        />
        <ServiceCard
          title={translations[language].endOfLease}
          imgPath="./src/assets/images/lease.png"
          description={[
            descTranslations[language].endOfLease[0],
            descTranslations[language].endOfLease[1],
            descTranslations[language].endOfLease[2],
            descTranslations[language].endOfLease[3],
            descTranslations[language].endOfLease[4],
            descTranslations[language].endOfLease[5],
          ]}
        />
        <ServiceCard
          title={translations[language].carpet}
          imgPath="./src/assets/images/carpet.png"
          description={[
            descTranslations[language].carpet[0],
            descTranslations[language].carpet[1],
            descTranslations[language].carpet[2],
            descTranslations[language].carpet[3],
            descTranslations[language].carpet[4],
            descTranslations[language].carpet[5],
          ]}
        />
        <ServiceCard
          title={translations[language].maintenance}
          imgPath="./src/assets/images/maintenance.png"
          description={[
            descTranslations[language].maintenance[0],
            descTranslations[language].maintenance[1],
            descTranslations[language].maintenance[2],
            descTranslations[language].maintenance[3],
            descTranslations[language].maintenance[4],
            descTranslations[language].maintenance[5],
          ]}
        />
        <ServiceCard
          title={translations[language].binChute}
          imgPath="./src/assets/images/graffiti.png"
          description={[
            descTranslations[language].binChute[0],
            descTranslations[language].binChute[1],
            descTranslations[language].binChute[2],
            descTranslations[language].binChute[3],
            descTranslations[language].binChute[4],
            descTranslations[language].binChute[5],
          ]}
        />
      </div>
    </>
  );
}

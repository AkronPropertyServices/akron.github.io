interface Translation {
  [key: string]: string;
}

interface Translations {
  [key: string]: Translation; // telling that object of type Transations can be index with any string
}

interface DescTranslations {
  [key: string]: { [key: string]: string[] };
}

export const descTranslations: DescTranslations = {
  en: {
    commercial: [
      "Office sanitation and deep cleaning",
      "Periodic maintenance cleanings",
      "Customized cleaning solutions",
      "Environmentally-friendly cleaning products",
      "Professionally trained cleaners",
      "Focus on high-touch areas",
    ],
    industrial: [
      "Machinery and equipment cleaning",
      "Floor treatments and scrubbing",
      "Waste disposal and recycling services",
      "Health and safety compliant",
      "Scheduled maintenance cleanings",
      "Specialized cleaning for manufacturing spaces",
    ],
    vacate: [
      "Move-in/move-out cleaning services",
      "Detailed cleaning for empty properties",
      "Window and wall cleaning",
      "Flooring cleaning and polishing",
      "Tailored cleaning checklist",
      "Helping meet landlord expectations",
    ],
    garden: [
      "Lawn mowing and maintenance",
      "Garden bed weeding and treatment",
      "Hedge trimming and pruning",
      "Irrigation system management",
      "Environmentally sustainable practices",
      "Garden waste removal",
    ],
    office: [
      "Regularly scheduled office cleanings",
      "Dusting and sanitizing workspaces",
      "Cleaning and restocking restrooms",
      "Waste collection and disposal",
      "Flexible scheduling options",
      "Maintaining a clean and healthy workspace",
    ],
    endOfLease: [
      "Detailed cleaning to secure deposit return",
      "Wall and paint cleaning",
      "Carpet cleaning and stain removal",
      "Personalized cleaning plans",
      "Compliance with lease agreements",
      "Kitchen and bathroom deep clean",
    ],
    carpet: [
      "Deep carpet cleaning and stain removal",
      "Prolonging carpet lifespan",
      "Allergy reduction through dust and allergen removal",
      "Utilizing professional equipment",
      "Safe and non-toxic cleaning solutions",
      "Fast drying time",
    ],
    maintenance: [
      "Routine building inspections",
      "Plumbing and electrical services",
      "Painting and minor repairs",
      "Groundskeeping and exterior maintenance",
      "Emergency maintenance services",
      "HVAC maintenance and services",
    ],
    binChute: [
      "Bin chute cleaning and maintenance",
      "Deodorizing and sanitization",
      "Scheduled or one-off services",
      "Prevention of pest infestations",
      "Safe disposal of hazardous waste",
      "Compliance with local regulations",
    ],
  },
  it: {
    commercial: [
      "Sanificazione e pulizia profonda dell'ufficio",
      "Pulizie di manutenzione periodica",
      "Soluzioni di pulizia personalizzate",
      "Prodotti per la pulizia ecocompatibili",
      "Pulitori professionalmente addestrati",
      "Focalizzazione sulle aree ad alto contatto",
    ],
    industrial: [
      "Pulizia di macchinari e attrezzature",
      "Trattamenti e scrub per pavimenti",
      "Servizi di smaltimento dei rifiuti e riciclaggio",
      "Conformità alle norme di salute e sicurezza",
      "Pulizie di manutenzione programmate",
      "Pulizia specializzata per spazi di produzione",
    ],
    vacate: [
      "Servizi di pulizia per ingressi e uscite",
      "Pulizia dettagliata per proprietà vuote",
      "Pulizia di finestre e pareti",
      "Pulizia e lucidatura dei pavimenti",
      "Checklist di pulizia personalizzata",
      "Assistenza nel soddisfare le aspettative del locatore",
    ],
    garden: [
      "Taglio e manutenzione del prato",
      "Diserbo e trattamento dell'aiuola",
      "Potatura e taglio delle siepi",
      "Gestione del sistema di irrigazione",
      "Pratiche sostenibili dal punto di vista ambientale",
      "Rimozione dei rifiuti del giardino",
    ],
    office: [
      "Pulizie ufficio programmate regolarmente",
      "Spolvero e sanificazione degli spazi di lavoro",
      "Pulizia e riassortimento dei bagni",
      "Raccolta e smaltimento dei rifiuti",
      "Opzioni di programmazione flessibile",
      "Mantenimento di uno spazio di lavoro pulito e sano",
    ],
    endOfLease: [
      "Pulizia dettagliata per garantire la restituzione del deposito",
      "Pulizia di pareti e pitture",
      "Pulizia e rimozione delle macchie dai tappeti",
      "Piani di pulizia personalizzati",
      "Conformità con gli accordi di locazione",
      "Pulizia profonda di cucina e bagno",
    ],
    carpet: [
      "Pulizia profonda e rimozione delle macchie dal tappeto",
      "Prolungamento della durata del tappeto",
      "Riduzione delle allergie attraverso la rimozione di polvere e allergeni",
      "Utilizzo di attrezzature professionali",
      "Soluzioni di pulizia sicure e non tossiche",
      "Tempo di asciugatura rapido",
    ],
    maintenance: [
      "Ispezioni periodiche degli edifici",
      "Servizi di idraulica ed elettricità",
      "Pittura e piccole riparazioni",
      "Manutenzione del paesaggio e degli esterni",
      "Servizi di manutenzione di emergenza",
      "Manutenzione e servizi HVAC",
    ],
    binChute: [
      "Pulizia e manutenzione del condotto della spazzatura",
      "Deodorazione e sanificazione",
      "Servizi programmati o una tantum",
      "Prevenzione delle infestazioni di parassiti",
      "Smaltimento sicuro dei rifiuti pericolosi",
      "Conformità con le normative locali",
    ],
  },
};

export const translations: Translations = {
  en: {
    aboutTitle1: "But, who ",
    aboutTitle2: " are we?",
    aboutDescription: `We are dedicated to providing exceptional solutions
    for all your property maintenance and cleaning needs. With our team of highly
    trained professionals, we ensure that your residential or commercial spaces are
    spotless, organized, and well-maintained. From regular cleaning and deep-cleaning
    services to property maintenance tasks such as bin chute services and rubbish removal, we have you covered.
    Our commitment to delivering top-quality results, combined with our attention to detail and
    unmatched customer service, sets us apart. Experience the difference with our reliable and
    efficient services tailored to exceed your expectations.`,
    Neat: "Neat",
    and: " and",
    Tidy: " Tidy",
    slogan1: " because it's our",
    Duty: " Duty",

    servicesTitle: "Services",
    commercial: "Commercial Cleaning",
    industrial: "Industrial and Factory Cleaning",
    vacate: "Vacate Cleaning",
    garden: "Garden Care",
    office: "Weekly and Fornightly Office cleaning",
    endOfLease: "End of Lease Cleaning",
    carpet: "Professional Carpet Cleaning Service",
    maintenance: "Building Maintenance Service",
    binChute: "Bin Chute Services",

    contactTitle: "Wanna Talk?",
    yourName: "Your Name(Optional)",
    yourPhone: "Your Phone Number",
    yourEmail: "Your email",
    feedback: "Your feedback",
    name: "NAME:",
    phone: "PHONE NUMBER:",
    email: "EMAIL:",

    madeBy: "Made with React by Kulsgam",

    FAILED: "FAILED",
    SUCCESS: "SUCCESS",

    invalidEmail: "INVALID EMAIL",
    invalidNumber: "INVALID NUMBER",
    invalidFeedback: "Feedback needed",
    companyInfo: "Akron Services Pty Ltd © 2018",
    copyrightInfo: "© 2023 Akron Services | All rights reserved",
    ABN: "ABN: ",
    emailLink: "info@akronservices.com.au",
    phoneNum: "+61 433 000 614",
    fb: "https://facebook.com",
    insta: "https://instagram.com",
  },
  it: {
    aboutTitle1: "Ma chi ",
    aboutTitle2: " siamo?",
    aboutDescription: `Ci impegniamo a fornire soluzioni eccezionali
    per tutte le esigenze di manutenzione e pulizia del tuo immobile. Con il nostro team di professionisti altamente qualificati,
    ci assicuriamo che i vostri spazi residenziali o commerciali siano pulitissimi, organizzati e ben mantenuti. 
    Dalla pulizia regolare alla pulizia profonda, offrendo servizi di manutenzione immobiliare come servizi per 
    condotti di scarico e rimozione dei rifiuti, abbiamo quello che fa per te.
    Il nostro impegno nel fornire risultati di altissima qualità, combinato con la nostra attenzione ai dettagli e 
    un servizio clienti impareggiabile, ci distingue. Sperimenta la differenza con il nostro servizio affidabile e 
    efficiente, progettato per superare le vostre aspettative.`,
    Neat: "Pulito",
    and: " e",
    Tidy: " Ordinato",
    slogan1: " perché è il nostro",
    Duty: " Dovere",

    servicesTitle: "Servizi",
    commercial: "Pulizia Commerciale",
    industrial: "Pulizia Industriale e di Fabbrica",
    vacate: "Pulizia per Sfratto",
    garden: "Cura del Giardino",
    office: "Pulizia Uffici Settimanale e Quindicinale",
    endOfLease: "Pulizia Fine Contratto",
    carpet: "Servizio Professionale di Pulizia Tappeti",
    maintenance: "Servizio di Manutenzione Edifici",
    binChute: "Servizi per Condotti di Scarico",

    contactTitle: "Vuoi Parlare?",
    yourName: "Il tuo nome(Opzionale)",
    yourPhone: "Il tuo numero di telefono",
    yourEmail: "La tua email",
    feedback: "Il tuo feedback",
    name: "NOME:",
    phone: "NUMERO DI TELEFONO:",
    email: "EMAIL:",

    madeBy: "Realizzato con React da Kulsgam",

    FAILED: "FALLITO",
    SUCCESS: "SUCCESSO",

    invalidEmail: "E-MAIL NON VALIDO",
    invalidNumber: "NUMERO NON VALIDO",
    invalidFeedback: "Necessario feedback",
    companyInfo: "Akron Services Pty Ltd © 2018",
    copyrightInfo: "© 2023 Akron Services | All rights reserved",
    ABN: "ABN: ",
    emailLink: "info@akronservices.com.au",
    phoneNum: "+61 433 000 614",
    fb: "https://facebook.com",
    insta: "https://instagram.com",
  },
};

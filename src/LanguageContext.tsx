import React, { createContext, ReactNode, useState, useContext } from "react";
// Contexts provide a global variables to all the children it has
// setVar in useState can accept a function which passes in the Var value to it too
interface LanguageContextProps {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
}

export const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined,
);

interface LanguageProviderProps {
  children: ReactNode;
}

// You wrap App.tsx inside this, so the children would be App.tsx
// The .Provider allows you to specify the global values needed
// And since LanguageContext is created using createContext and LanguageContext.Provider will be the parent,
// It will have access to the values passed in
export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState("en");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Without this, you will have to do this each time you want to change the values in a component
// import { useContext } from 'react';
// const { language, setLanguage } = useContext(LanguageContext);
// So the wrapping of the language provider is done to do the re-rendering and useLanguage is used to change the values
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

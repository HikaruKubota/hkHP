import React, { createContext, useContext, useState, ReactNode } from 'react';

import en from '../locales/en.json';
import ja from '../locales/ja.json';

const dictionaries = { en, ja } as const;

export type Locale = keyof typeof dictionaries;

interface I18nContextProps {
  locale: Locale;
  t: (key: string) => string;
  switchLang: (l: Locale) => void;
}

const I18nContext = createContext<I18nContextProps | undefined>(undefined);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>('ja');

  const t = (key: string) => {
    return (dictionaries[locale] as Record<string, string>)[key] || key;
  };

  return (
    <I18nContext.Provider value={{ locale, t, switchLang: setLocale }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
};

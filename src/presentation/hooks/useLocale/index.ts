import { useRouter } from "next/router";

import en from "presentation/locale/en";
import ja from "presentation/locale/ja";

export const useLocale = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : ja;

  return { locale, t };
};

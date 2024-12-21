import { FaFlagUsa } from "react-icons/fa";
import { GiBrazil } from "react-icons/gi";
import { Translate } from "../interfaces/translate";
import { useTranslation } from "react-i18next";

export const useLanguages = (): Translate[] => {
  const { t } = useTranslation();

  return [
    { code: "en", name: t("languages.en"), icon: FaFlagUsa },
    { code: "pt", name: t("languages.pt"), icon: GiBrazil },
  ];
};

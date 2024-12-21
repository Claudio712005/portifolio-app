import { FC } from "react";
import { useTranslation } from "react-i18next";

export const Sobre: FC = () => {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col items-center justify-center gap-4 w-full h-full">
            <h1 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">
                {t("sobre.title")}
            </h1>
            <p className="text-lg text-center text-gray-700 dark:text-gray-300">
                {t("sobre.description")}
            </p>
        </div>
    );
}
import i18n, { InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';

// Определяем ресурсы с типами
const resources = {
    ru: {
        translations: {} as Record<string, string>,
    },
};

// Настройки инициализации с типами
const options: InitOptions = {
    lng: 'ru',
    fallbackLng: 'ru',
    debug: false,
    interpolation: {
        escapeValue: false,
    },
    resources,
};

// Используем void, чтобы ESLint не ругался на "floating promises"
void i18n
    .use(initReactI18next)
    .init(options)
    .catch((err) => {
        console.error('i18next initialization failed:', err);
    });

export default i18n;

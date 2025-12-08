import '@testing-library/jest-dom';
import 'regenerator-runtime/runtime';

global.fetch = jest.fn(); // При запуске тестов в jsdom нет глобального fetch, а RTK Query требует его.

// Мокаем i18, чтобы отключить <I18nextProvider i18n={i18nForTests}> в componentRender.tsx,
// Т.к. i18nForTests работает нестабильно
// Пример с проверкой в bash: for i in {1..20}; do npm run test:unit AppRouter.test.tsx & done
jest.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
        i18n: { changeLanguage: () => Promise.resolve() },
    }),
}));

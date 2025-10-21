import '@testing-library/jest-dom';
import 'regenerator-runtime/runtime';

global.fetch = jest.fn(); // При запуске тестов в jsdom нет глобального fetch, а RTK Query требует его.

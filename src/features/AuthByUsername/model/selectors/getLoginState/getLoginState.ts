import { StateSchema } from 'app/providers/StoreProvider';

// селекторы лучше максимально разбивать, делать для логина, пароля, ошибки и тд отдельно, чтобы избегать перерисовок
export const getLoginState = (state: StateSchema) => state?.loginForm;

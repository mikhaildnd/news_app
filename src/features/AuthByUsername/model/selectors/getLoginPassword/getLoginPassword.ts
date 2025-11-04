import type { StateSchema } from '@/app/providers/StoreProvider'; //fix?

export const getLoginPassword = (state: StateSchema) =>
    state?.loginForm?.password || '';

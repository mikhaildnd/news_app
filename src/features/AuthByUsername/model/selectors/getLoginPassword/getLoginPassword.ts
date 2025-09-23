import { RootState } from 'app/providers/StoreProvider/config/store'; //fix?

export const getLoginPassword = (state: RootState) =>
    state?.login?.password || '';

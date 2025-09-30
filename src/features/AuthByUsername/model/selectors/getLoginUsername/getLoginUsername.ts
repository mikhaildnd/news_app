import { RootState } from 'app/providers/StoreProvider/config/store'; //fix?

export const getLoginUsername = (state: RootState) =>
    //login по имени слайса
    state?.login?.username || '';

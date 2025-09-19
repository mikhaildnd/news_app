import { RootState } from 'app/providers/StoreProvider/config/store'; //fix?

//login по имени слайса
export const getLoginUsername = (state: RootState) => state?.login?.username || '';

import { RootState } from 'app/providers/StoreProvider/config/store';

export const getUserAuthData = (state: RootState) => state.user.authData;

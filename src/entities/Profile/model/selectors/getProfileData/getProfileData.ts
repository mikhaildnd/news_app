import { RootState } from 'app/providers/StoreProvider/config/store'; //fix?

export const getProfileData = (state: RootState) => state?.profile?.data;

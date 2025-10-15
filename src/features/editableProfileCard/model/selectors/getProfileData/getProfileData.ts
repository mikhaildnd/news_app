import { RootState } from 'app/providers/StoreProvider/config/store';

export const getProfileData = (state: RootState) => state?.profile?.data;

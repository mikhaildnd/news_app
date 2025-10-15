import { RootState } from 'app/providers/StoreProvider/config/store';

export const getProfileForm = (state: RootState) => state?.profile?.form;

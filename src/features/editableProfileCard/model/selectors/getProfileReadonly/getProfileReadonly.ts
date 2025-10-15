import { RootState } from 'app/providers/StoreProvider/config/store';

export const getProfileReadonly = (state: RootState) =>
    state?.profile?.readonly;

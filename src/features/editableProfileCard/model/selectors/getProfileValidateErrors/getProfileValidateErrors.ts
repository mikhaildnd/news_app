import { RootState } from 'app/providers/StoreProvider/config/store';

export const getProfileValidateErrors = (state: RootState) =>
    state?.profile?.validateErrors;

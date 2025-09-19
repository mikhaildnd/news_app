// import { StateSchema } from 'app/providers/StoreProvider';
import { RootState } from 'app/providers/StoreProvider/config/store';

export const getProfileError = (state: RootState) => state?.profile?.error;

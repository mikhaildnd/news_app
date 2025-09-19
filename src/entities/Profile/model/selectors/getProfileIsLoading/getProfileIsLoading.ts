// import { StateSchema } from 'app/providers/StoreProvider';
import { RootState } from 'app/providers/StoreProvider/config/store';

export const getProfileIsLoading = (state: RootState) => state?.profile?.isLoading;

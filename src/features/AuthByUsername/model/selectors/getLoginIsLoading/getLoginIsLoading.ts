import { RootState } from 'app/providers/StoreProvider/config/store'; //fix?

export const getLoginIsLoading = (state: RootState) =>
    state?.login?.isLoading || false;

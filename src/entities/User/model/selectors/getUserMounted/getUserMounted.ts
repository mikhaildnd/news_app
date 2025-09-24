import { RootState } from 'app/providers/StoreProvider/config/store';

export const getUserMounted = (state: RootState) => state.user._isMounted;

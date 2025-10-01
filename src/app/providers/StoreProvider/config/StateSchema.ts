import { AxiosInstance } from 'axios';
import { RootState } from 'app/providers/StoreProvider/config/store';

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: RootState;
}

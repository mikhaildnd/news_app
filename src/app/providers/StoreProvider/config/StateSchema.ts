import { AxiosInstance } from 'axios';
import { NavigateOptions, To } from 'react-router-dom';
import { RootState } from 'app/providers/StoreProvider/config/store';

export interface ThunkExtraArg {
    api: AxiosInstance;
    navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: RootState;
}

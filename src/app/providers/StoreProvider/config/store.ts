import { configureStore, combineSlices } from '@reduxjs/toolkit';
import { userSlice } from 'entities/User/model/slice/userSlice';
import { $api } from 'shared/api/api';
// import { To } from 'react-router-dom';
// import { NavigateOptions } from 'react-router';
import { NavigateFunction } from 'react-router-dom';

export interface LazyLoadedSlices {}

// базовый rootReducer со статическими слайсами
export const rootReducer = combineSlices(userSlice)
    // указываем, что могут быть подключаемые ленивые слайсы
    .withLazyLoadedSlices<LazyLoadedSlices>();

export function createReduxStore(
    initialState?: Partial<RootState>,
    navigate?: NavigateFunction,
    // navigate?: (to: To, options?: NavigateOptions) => void,
) {
    const store = configureStore({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: {
                        api: $api,
                        navigate,
                    },
                },
            }),
    });

    return store;
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];

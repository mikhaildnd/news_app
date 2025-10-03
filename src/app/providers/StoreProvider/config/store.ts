import { configureStore, combineSlices } from '@reduxjs/toolkit';
import { userSlice } from 'entities/User/model/slice/userSlice';
import { $api } from 'shared/api/api';
import { counterSlice } from 'entities/Counter/model/slice/CounterSlice';
import { scrollSaveSlice } from 'features/ScrollSave';

export interface LazyLoadedSlices {}

export const rootReducer = combineSlices(
    userSlice,
    scrollSaveSlice,
    counterSlice,
).withLazyLoadedSlices<LazyLoadedSlices>();

export function createReduxStore(initialState?: Partial<RootState>) {
    const store = configureStore({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: {
                        api: $api,
                    },
                },
            }),
    });

    return store;
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];

import {
    configureStore,
    type ReducersMapObject,
    type Reducer,
} from '@reduxjs/toolkit';
import { $api } from '@/shared/api/api';
import { rtkApi } from '@/shared/api/rtkApi';
import type { StateSchema, ThunkExtraArg } from '@/app/providers/StoreProvider';
import { createReducerManager } from './reducerManager';
import { counterReducer } from '@/entities/Counter';
import { userReducer } from '@/entities/User';
import { scrollSaveReducer } from '@/features/ScrollSave';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
        scrollSave: scrollSaveReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const extraArg: ThunkExtraArg = {
        api: $api,
    };

    const store = configureStore({
        // reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        reducer: reducerManager.reduce as Reducer<StateSchema>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: extraArg,
                },
            }).concat(rtkApi.middleware),
    });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];

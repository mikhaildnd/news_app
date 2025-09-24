// import { configureStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
// import type { CombinedState } from 'redux';
// import { counterReducer } from 'entities/Counter';
// import { userReducer } from 'entities/User';
// import { $api } from 'shared/api/api';
// import { To } from 'react-router-dom';
// import { NavigateOptions } from 'react-router';
// import { StateSchema } from './StateSchema';
// import { createReducerManager } from './reducerManager';
//
// export function createReduxStore(
//     initialState?: StateSchema,
//     asyncReducers?: ReducersMapObject<StateSchema>,
//     navigate?: (to: To, options?: NavigateOptions) => void,
// ) {
//     const rootReducers: ReducersMapObject<StateSchema> = {
//         ...asyncReducers,
//         counter: counterReducer,
//         user: userReducer,
//     };
//
//     const reducerManager = createReducerManager(rootReducers);
//     const store = configureStore({
//         reducer: reducerManager.reduce as Reducer<StateSchema>, // теперь сюда вместо RootReducers монтируем reducerManager
//         devTools: __IS_DEV__,
//         preloadedState: initialState,
//         middleware: (getDefaultMiddleware) =>
//             getDefaultMiddleware({
//                 thunk: {
//                     extraArgument: {
//                         api: $api,
//                         navigate,
//                     },
//                 },
//             }),
//     });
//
//     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//     // @ts-ignore
//     store.reducerManager = reducerManager;
//
//     return store;
// }
//
// export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];

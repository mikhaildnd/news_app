import {
    type Action,
    combineReducers,
    type Reducer,
    type ReducersMapObject,
} from '@reduxjs/toolkit';
import type {
    MountedReducers,
    ReducerManager,
    StateSchema,
    StateSchemaKey,
} from './StateSchema';

export function createReducerManager(
    initialReducers: ReducersMapObject<StateSchema, Action>,
): ReducerManager {
    const reducers = { ...initialReducers };

    let combinedReducer = combineReducers(reducers) as Reducer<
        StateSchema,
        Action
    >;

    let keysToRemove: Array<StateSchemaKey> = [];
    const mountedReducers: MountedReducers = {};

    return {
        getReducerMap: () => reducers,
        getMountedReducers: () => mountedReducers,
        reduce: (
            state: StateSchema | undefined,
            action: Action,
        ): StateSchema => {
            if (keysToRemove.length > 0 && state) {
                state = { ...state };
                for (const key of keysToRemove) {
                    delete state[key];
                }
                keysToRemove = [];
            }
            return combinedReducer(state, action);
        },
        add: (key: StateSchemaKey, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return;
            }
            reducers[key] = reducer;
            mountedReducers[key] = true;

            combinedReducer = combineReducers(reducers) as Reducer<StateSchema>;
        },
        remove: (key: StateSchemaKey) => {
            if (!key || !reducers[key]) {
                return;
            }
            delete reducers[key];
            keysToRemove.push(key);
            mountedReducers[key] = false;

            combinedReducer = combineReducers(reducers) as Reducer<StateSchema>;
        },
    };
}

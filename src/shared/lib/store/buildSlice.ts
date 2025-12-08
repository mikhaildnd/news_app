import {
    bindActionCreators,
    createSlice,
    type CreateSliceOptions,
    type SliceCaseReducers,
    type SliceSelectors,
} from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { useMemo } from 'react';

export function buildSlice<
    State,
    CaseReducers extends SliceCaseReducers<State>,
    Name extends string = string,
    ReducerPath extends string = Name,
    Selectors extends SliceSelectors<State> = SliceSelectors<State>,
>(
    options: CreateSliceOptions<
        State,
        CaseReducers,
        Name,
        ReducerPath,
        Selectors
    >,
) {
    const slice = createSlice(options);

    const useActions = (): typeof slice.actions => {
        const dispatch = useDispatch();

        return useMemo(
            () => bindActionCreators(slice.actions, dispatch),
            [dispatch],
        );
    };

    return {
        ...slice,
        useActions,
    };
}

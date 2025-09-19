// import { StateSchema } from 'app/providers/StoreProvider';
import { AsyncThunkAction } from '@reduxjs/toolkit';
import axios, { AxiosStatic } from 'axios';
import { AppDispatch, RootState } from 'app/providers/StoreProvider/config/store';
import { To } from 'react-router-dom';
import { NavigateOptions } from 'react-router';
import { ThunkExtraArg } from 'app/providers/StoreProvider/config/StateSchema'; //fix?

type ActionCreatorType<Return, Arg, RejectedValue> = Arg extends void
    ? () => AsyncThunkAction<Return, void, { rejectValue: RejectedValue; state: RootState; extra: ThunkExtraArg }>
    : (
          arg: Arg,
      ) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue; state: RootState; extra: ThunkExtraArg }>;

// type ActionCreatorType<Return, Arg, RejectedValue> = (
//     arg: Arg,
// ) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

jest.mock('axios');

const mockedAxios = jest.mocked(axios, { shallow: false });

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: AppDispatch;

    getState: () => RootState;

    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

    api: jest.MockedFunctionDeep<AxiosStatic>;

    navigate: jest.MockedFn<(to: To, options?: NavigateOptions) => void>;

    constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>, state?: Partial<RootState>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn() as unknown as AppDispatch;
        this.getState = jest.fn(() => state as RootState);

        this.api = mockedAxios;
        this.navigate = jest.fn();
    }

    async callThunk(arg?: Arg) {
        const action = this.actionCreator(arg as Arg);
        const result = await action(
            this.dispatch as unknown as Parameters<typeof action>[0],
            this.getState as unknown as Parameters<typeof action>[1],
            { api: this.api, navigate: this.navigate },
        );

        return result;
    }
}

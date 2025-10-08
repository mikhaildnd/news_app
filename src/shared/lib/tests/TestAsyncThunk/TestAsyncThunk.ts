import { AsyncThunkAction } from '@reduxjs/toolkit';
import axios from 'axios';
import {
    AppDispatch,
    RootState,
} from 'app/providers/StoreProvider/config/store';
import { ThunkExtraArg } from 'app/providers/StoreProvider/config/StateSchema';

// Универсальный тип для async thunk creator
type ActionCreatorType<Return, Arg, RejectedValue> = Arg extends void
    ? () => AsyncThunkAction<
          Return,
          void,
          { rejectValue: RejectedValue; state: RootState; extra: ThunkExtraArg }
      >
    : (
          arg: Arg,
      ) => AsyncThunkAction<
          Return,
          Arg,
          { rejectValue: RejectedValue; state: RootState; extra: ThunkExtraArg }
      >;

// ======================
// Мокаем axios глобально
// ======================
jest.mock('axios', () => ({
    create: jest.fn(() => ({
        get: jest.fn(),
        post: jest.fn(),
        put: jest.fn(),
        delete: jest.fn(),
        interceptors: {
            request: { use: jest.fn() },
            response: { use: jest.fn() },
        },
    })),
}));

// Делаем "мокнутый" axios типобезопасным
const mockedAxios = jest.mocked(axios, { shallow: false });

// ======================
// Класс TestAsyncThunk
// ======================
export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: AppDispatch;
    getState: () => RootState;
    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

    // ✅ Ключевая правка — указываем что это мок axios-инстанса
    api: jest.Mocked<ReturnType<typeof mockedAxios.create>>;

    constructor(
        actionCreator: ActionCreatorType<Return, Arg, RejectedValue>,
        state?: Partial<RootState>,
    ) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn() as unknown as AppDispatch;
        this.getState = jest.fn(() => state as RootState);

        // Используем мокнутый экземпляр axios
        this.api = mockedAxios.create() as jest.Mocked<
            ReturnType<typeof mockedAxios.create>
        >;
    }

    async callThunk(arg?: Arg) {
        const action = this.actionCreator(arg as Arg);
        const result = await action(
            this.dispatch as unknown as Parameters<typeof action>[0],
            this.getState as unknown as Parameters<typeof action>[1],
            { api: this.api },
        );
        return result;
    }
}

// import { AsyncThunkAction } from '@reduxjs/toolkit';
// import axios, { AxiosStatic } from 'axios';
// import {
//     AppDispatch,
//     RootState,
// } from 'app/providers/StoreProvider/config/store';
// import { ThunkExtraArg } from 'app/providers/StoreProvider/config/StateSchema';
//
// type ActionCreatorType<Return, Arg, RejectedValue> = Arg extends void
//     ? () => AsyncThunkAction<
//           Return,
//           void,
//           { rejectValue: RejectedValue; state: RootState; extra: ThunkExtraArg }
//       >
//     : (
//           arg: Arg,
//       ) => AsyncThunkAction<
//           Return,
//           Arg,
//           { rejectValue: RejectedValue; state: RootState; extra: ThunkExtraArg }
//       >;
//
// // старый тип
// // type ActionCreatorType<Return, Arg, RejectedValue> = (
// //     arg: Arg,
// // ) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;
//
// jest.mock('axios', () => ({
//     create: jest.fn(() => ({
//         get: jest.fn(),
//         post: jest.fn(),
//         put: jest.fn(),
//         delete: jest.fn(),
//         interceptors: {
//             request: { use: jest.fn() },
//             response: { use: jest.fn() },
//         },
//     })),
// }));
//
// const mockedAxios = jest.mocked(axios, { shallow: false });
//
// export class TestAsyncThunk<Return, Arg, RejectedValue> {
//     dispatch: AppDispatch;
//
//     getState: () => RootState;
//
//     actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;
//
//     // api: jest.MockedFunctionDeep<AxiosStatic>;
//     api: ReturnType<typeof mockedAxios.create>;
//
//     constructor(
//         actionCreator: ActionCreatorType<Return, Arg, RejectedValue>,
//         state?: Partial<RootState>,
//     ) {
//         this.actionCreator = actionCreator;
//         this.dispatch = jest.fn() as unknown as AppDispatch;
//         this.getState = jest.fn(() => state as RootState);
//
//         this.api = mockedAxios.create();
//     }
//
//     async callThunk(arg?: Arg) {
//         const action = this.actionCreator(arg as Arg);
//         const result = await action(
//             this.dispatch as unknown as Parameters<typeof action>[0],
//             this.getState as unknown as Parameters<typeof action>[1],
//             { api: this.api },
//         );
//
//         return result;
//     }
// }

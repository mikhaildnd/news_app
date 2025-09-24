import { RootState } from 'app/providers/StoreProvider/config/store';
import { getCounter } from './getCounter';

describe('getCounter', () => {
    test('should return the counter value', () => {
        const state: DeepPartial<RootState> = {
            counter: {
                value: 10,
            },
        };
        expect(getCounter(state as RootState)).toEqual({ value: 10 });
    });
});

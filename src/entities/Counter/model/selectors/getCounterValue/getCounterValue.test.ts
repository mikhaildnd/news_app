import { RootState } from 'app/providers/StoreProvider/config/store';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
    test('should return the counter value', () => {
        const state: RootStateDeepPartial = {
            counter: {
                value: 10,
            },
        };
        expect(getCounterValue(state as RootState)).toEqual(10);
    });
});

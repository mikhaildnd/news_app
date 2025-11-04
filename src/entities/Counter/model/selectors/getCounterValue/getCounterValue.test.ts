import { getCounterValue } from './getCounterValue';
import type { StateSchema } from '@/app/providers/StoreProvider';

describe('getCounterValue', () => {
    test('should return the counter value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: {
                value: 10,
            },
        };
        expect(getCounterValue(state as StateSchema)).toEqual(10);
    });
});

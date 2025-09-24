import { RootState } from 'app/providers/StoreProvider/config/store';
import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileReadonly.test', () => {
    test('should work with filled state', () => {
        const state: DeepPartial<RootState> = {
            profile: {
                readonly: true,
            },
        };
        expect(getProfileReadonly(state as RootState)).toEqual(true);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<RootState> = {};
        expect(getProfileReadonly(state as RootState)).toEqual(undefined);
    });
});

import { RootState } from 'app/providers/StoreProvider/config/store';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
    test('should return data', () => {
        const data = {
            username: 'admin',
            firstname: 'Mikhail',
            lastname: 'Dundukov',
            age: 33,
            currency: Currency.KZT,
            city: 'Almaty',
            country: Country.Kazakhstan,
            avatar: 'avatar.png',
        };

        const state: DeepPartial<RootState> = {
            profile: {
                form: data,
            },
        };
        expect(getProfileForm(state as RootState)).toEqual(data);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<RootState> = {};
        expect(getProfileForm(state as RootState)).toEqual(undefined);
    });
});

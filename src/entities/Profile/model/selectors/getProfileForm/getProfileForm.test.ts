import { StateSchema } from 'app/providers/StoreProvider';
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

        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});

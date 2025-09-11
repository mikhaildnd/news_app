import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import avatar from 'shared/assets/tests/storybook.png';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
    test('should return data', () => {
        const data = {
            username: 'admin',
            firstname: 'Mikhail',
            lastname: 'Dundukov',
            age: 33,
            currency: Currency.KZT,
            city: 'Almaty',
            country: Country.Kazakhstan,
            // Можно просто передать строку, нет особого смысла импортировать изображение
            // avatar: 'avatar.png'
            avatar,
        };

        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});

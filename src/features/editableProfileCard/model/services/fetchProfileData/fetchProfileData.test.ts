import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { fetchProfileData } from './fetchProfileData';

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

describe('fetchProfileData.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);

        const spy = jest.spyOn(thunk.api, 'get').mockResolvedValue({ data });
        // thunk.api.get.mockResolvedValue({ data });
        const result = await thunk.callThunk('1');

        expect(spy).toHaveBeenCalled();
        // expect(thunk.api.get).toHaveBeenCalled();

        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);

        spy.mockRestore();
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);

        const spy = jest
            .spyOn(thunk.api, 'get')
            .mockResolvedValue({ status: 403 });
        // thunk.api.get.mockResolvedValue({ status: 403 });
        const result = await thunk.callThunk('1');
        expect(result.meta.requestStatus).toBe('rejected');

        spy.mockRestore();
    });
});

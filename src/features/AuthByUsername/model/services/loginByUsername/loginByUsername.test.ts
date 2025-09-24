import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';
import { setAuthData } from 'entities/User/model/slice/userSlice'; //fix?

describe('loginByUsername.test', () => {
    test('success login', async () => {
        const userValue = { username: '123', id: '1' };

        const thunk = new TestAsyncThunk(loginByUsername);
        // создаём spy вместо прямого присвоения jest.fn()
        const postSpy = jest
            .spyOn(thunk.api, 'post')
            .mockResolvedValue({ data: userValue });
        // thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));
        const result = await thunk.callThunk({
            username: '123',
            password: '123',
        });

        expect(thunk.dispatch).toHaveBeenCalledWith(setAuthData(userValue));
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(postSpy).toHaveBeenCalled();
        // expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userValue);

        postSpy.mockRestore(); // восстанавливаем оригинальный метод
    });

    test('error login', async () => {
        const thunk = new TestAsyncThunk(loginByUsername);
        const postSpy = jest
            .spyOn(thunk.api, 'post')
            .mockResolvedValue({ status: 403 });
        // thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk({
            username: '123',
            password: '123',
        });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(postSpy).toHaveBeenCalled();
        // expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');

        postSpy.mockRestore(); // чтобы вернуть оригинальный метод для последующих тестов.
    });
});

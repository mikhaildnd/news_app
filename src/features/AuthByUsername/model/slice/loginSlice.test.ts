import { LoginSchema } from '../types/loginSchema';
import { loginReducer, setPassword, setUsername } from './loginSlice';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: '123' };
        expect(loginReducer(state as LoginSchema, setUsername('123'))).toEqual({
            username: '123',
        });
    });

    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '123' };
        expect(loginReducer(state as LoginSchema, setPassword('123'))).toEqual({
            password: '123',
        });
    });
});

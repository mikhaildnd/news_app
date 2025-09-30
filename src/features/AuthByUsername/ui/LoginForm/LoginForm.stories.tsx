import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            login: {
                username: 'admin',
                password: '123',
                isLoading: false,
            },
        }),
    ],
};

export const WithError: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            login: {
                username: 'admin',
                password: '123',
                error: 'error',
                isLoading: false,
            },
        }),
    ],
};

export const Loading: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            login: {
                isLoading: true,
                username: '',
                password: '',
            },
        }),
    ],
};

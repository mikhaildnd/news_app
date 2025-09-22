import type { Meta, StoryObj } from '@storybook/react';
import { CountrySelect } from './CountrySelect';
import { Country } from '../../model/types/country';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof CountrySelect> = {
    title: 'entities/CountrySelect',
    component: CountrySelect,
    argTypes: {
        onChange: { action: 'changed' },
    },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        value: Country.Russia,
        readonly: false,
    },
    decorators: [
        StoreDecorator({
            user: {
                authData: {
                    id: '1',
                    username: 'user',
                },
                _isMounted: true,
            },
        }),
    ],
};

export const Readonly: Story = {
    args: {
        value: Country.Belarus,
        readonly: true,
    },
    decorators: [
        StoreDecorator({
            user: {
                authData: {
                    id: '1',
                    username: 'user',
                },
                _isMounted: true,
            },
        }),
    ],
};

export const DarkTheme: Story = {
    args: {
        value: Country.Kazakhstan,
        readonly: false,
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            user: {
                authData: {
                    id: '1',
                    username: 'user',
                },
                _isMounted: true,
            },
        }),
    ],
};

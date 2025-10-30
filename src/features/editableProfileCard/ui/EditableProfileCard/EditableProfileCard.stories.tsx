import { Meta, StoryObj } from '@storybook/react';
import { EditableProfileCard } from './EditableProfileCard';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

const meta: Meta<typeof EditableProfileCard> = {
    title: 'features/editableProfileCard/EditableProfileCard',
    component: EditableProfileCard,
    args: {},
    decorators: [
        StoreDecorator({
            profile: {
                form: {
                    id: '1',
                    firstname: 'Mikhail',
                    lastname: 'Dundukov',
                    username: 'mikhaildnd',
                    age: 33,
                    country: Country.Russia,
                    avatar: '',
                    city: 'Togliatty',
                    currency: Currency.RUB,
                },
                isLoading: false,
                readonly: false,
            },
        }),
    ],
    // parameters: {
    //     router: {
    //         path: '/example/:id',
    //         initialEntries: ['/example/'],
    //     },
    // },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};

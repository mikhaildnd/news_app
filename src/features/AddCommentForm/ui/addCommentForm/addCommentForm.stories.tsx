import addCommentForm from './addCommentForm';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof addCommentForm> = {
    title: 'features/addCommentForm',
    component: addCommentForm,
    decorators: [StoreDecorator({})],
    argTypes: {
        onSendComment: { action: 'onSendComment' }, // название в Actions panel
    },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        onSendComment: fn(), //мок
    },
};

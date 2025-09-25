import type { Meta, StoryObj } from '@storybook/react';
import { CommentCard } from './CommentCard';

const meta: Meta<typeof CommentCard> = {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        comment: {
            id: '1',
            text: 'Тестовый комментарий',
            user: { id: '1', username: 'Test user' },
        },
        isLoading: false,
    },
};

export const Loading: Story = {
    args: {
        comment: {
            id: '1',
            text: 'Тестовый комментарий',
            user: { id: '1', username: 'Test user' },
        },
        isLoading: true,
    },
};

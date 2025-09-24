import type { Meta, StoryObj } from '@storybook/react';
import { CommentList } from './CommentList';
import { Comment } from '../../model/types/comment';

const meta: Meta<typeof CommentList> = {
    title: 'entities/CommentList',
    component: CommentList,
};
export default meta;

type Story = StoryObj<typeof meta>;

// моковые данные для комментариев
const commentsMock: Comment[] = [
    {
        id: '1',
        text: 'Первый комментарий',
        user: { id: '1', username: 'User1', avatar: '' },
    },
    {
        id: '2',
        text: 'Второй комментарий',
        user: { id: '2', username: 'User2', avatar: '' },
    },
];

export const Normal: Story = {
    args: {
        comments: commentsMock,
        isLoading: false,
    },
};

export const Loading: Story = {
    args: {
        comments: commentsMock,
        isLoading: true,
    },
};

export const Empty: Story = {
    args: {
        comments: [],
        isLoading: false,
    },
};

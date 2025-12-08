import type { Meta, StoryObj } from '@storybook/react';
import { CommentCard } from './CommentCard';
// import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

const meta: Meta<typeof CommentCard> = {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
};
export default meta;

type Story = StoryObj<typeof meta>;

const normalArgs = {
    comment: {
        id: '1',
        text: 'Тестовый комментарий',
        user: { id: '1', username: 'Test user' },
    },
    isLoading: false,
};

export const Normal: Story = {
    args: normalArgs,
};

export const NormalRedesigned: Story = {
    args: normalArgs,
    decorators: [
        NewDesignDecorator,
        // FeatureFlagsDecorator({
        //     isAppRedesigned: true,
        // }),
    ],
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

import ArticleRating from './ArticleRating';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ArticleRating> = {
    title: '_/ArticleRating',
    component: ArticleRating,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
    decorators: [],
    parameters: {
        router: {
            path: '/example/:id',
            initialEntries: ['/example/'],
        },
    },
};

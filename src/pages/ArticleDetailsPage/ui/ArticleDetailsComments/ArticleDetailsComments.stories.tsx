import { ArticleDetailsComments } from './ArticleDetailsComments';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ArticleDetailsComments> = {
    title: 'pages/ArticleDetailsPage/ArticleDetailsComments',
    component: ArticleDetailsComments,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
    decorators: [],
    parameters: {
        router: {
            path: '/articles/:id',
            initialEntries: ['/articles/1'],
        },
    },
};

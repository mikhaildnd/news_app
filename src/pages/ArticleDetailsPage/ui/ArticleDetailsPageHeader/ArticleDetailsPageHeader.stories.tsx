import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';
import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ArticleDetailsPageHeader> = {
    title: 'pages/ArticleDetailsPage/ArticleDetailsPageHeader',
    component: ArticleDetailsPageHeader,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const User: Story = {
    args: {},
};

export const Admin: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            articleDetails: {
                data: {
                    id: '1',
                    title: 'Test article',
                    user: {
                        id: '1',
                        username: 'admin',
                        avatar: '',
                    },
                    subtitle: '',
                    img: '',
                    views: 0,
                    createdAt: '',
                    type: [],
                    blocks: [],
                },
                isLoading: false,
            },
            user: {
                authData: {
                    id: '1',
                    username: 'admin',
                },
                _isMounted: true,
            },
        }),
    ],
};

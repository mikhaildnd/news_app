import ArticleRating from './ArticleRating';
import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { UserRole } from '@/entities/User';
import { http, HttpResponse } from 'msw';
import type { RateArticleRatingArg } from '../../api/articleRatingApi';

const meta: Meta<typeof ArticleRating> = {
    title: 'features/ArticleRating',
    component: ArticleRating,
    decorators: [
        StoreDecorator({
            user: {
                _isMounted: true,
                authData: {
                    id: '1',
                    username: 'admin',
                    avatar: '',
                    roles: [UserRole.ADMIN],
                },
            },
        }),
    ],
};
export default meta;

type Story = StoryObj<typeof meta>;

const mockRequest = (mockResponse: Partial<RateArticleRatingArg>) => {
    return http.get(`${__API__}/article-ratings?userId=1&articleId=1`, () => {
        return HttpResponse.json([mockResponse]);
    });
};

export const Primary: Story = {
    args: {
        articleId: '1',
    },
    parameters: {
        msw: {
            handlers: [
                mockRequest({
                    rate: 3,
                }),
            ],
        },
    },
};

export const WithoutRate: Story = {
    args: {
        articleId: '1',
    },
    parameters: {
        msw: {
            handlers: [mockRequest({})],
        },
    },
};

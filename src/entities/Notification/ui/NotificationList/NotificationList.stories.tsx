import { NotificationList } from './NotificationList';
import type { Meta, StoryObj } from '@storybook/react';
import { http, HttpResponse } from 'msw';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof NotificationList> = {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
    decorators: [StoreDecorator({})],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
    parameters: {
        msw: {
            handlers: [
                http.get(`${__API__}/notifications`, () => {
                    return HttpResponse.json([
                        {
                            id: '1',
                            title: 'Notification 1',
                            description: 'Notification description',
                        },
                        {
                            id: '2',
                            title: 'Notification 2',
                            description: 'Notification description',
                        },
                        {
                            id: '3',
                            title: 'Notification 3',
                            description: 'Notification description',
                        },
                    ]);
                }),
            ],
        },
    },
};

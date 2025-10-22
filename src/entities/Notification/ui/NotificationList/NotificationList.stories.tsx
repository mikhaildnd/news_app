import { NotificationList } from './NotificationList';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof NotificationList> = {
    title: '_/NotificationList',
    component: NotificationList,
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

import { NotificationItem } from './NotificationItem';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof NotificationItem> = {
    title: '_/NotificationItem',
    component: NotificationItem,
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

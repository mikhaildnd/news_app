import { NotificationItem } from './NotificationItem';
import type { Meta, StoryObj } from '@storybook/react';
import type { Notification } from '../../model/types/notifications';

const meta: Meta<typeof NotificationItem> = {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
};
export default meta;

type Story = StoryObj<typeof meta>;

const item: Notification = {
    id: '1',
    title: 'Notification',
    description: 'notification description',
};

export const Primary: Story = {
    args: {
        item,
    },
    decorators: [],
};

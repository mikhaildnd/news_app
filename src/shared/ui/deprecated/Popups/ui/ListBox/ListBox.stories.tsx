import { ListBox } from './ListBox';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ListBox> = {
    title: 'shared/ListBox',
    component: ListBox,
    args: {
        label: 'Label',
        value: 'items list',
        direction: 'bottom left',
        items: [
            {
                value: '1',
                content: 'storybookItem 1 ',
            },
            {
                value: '2',
                content: 'storybookItem 2',
            },
        ],
    },
    decorators: [
        (Story) => (
            <div style={{ padding: 100 }}>
                <Story />
            </div>
        ),
    ],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const BottomLeft: Story = {
    args: {},
};

export const BottomRight: Story = {
    args: {
        direction: 'bottom right',
    },
};

export const TopLeft: Story = {
    args: {
        direction: 'top left',
    },
};

export const TopRight: Story = {
    args: {
        direction: 'top right',
    },
};

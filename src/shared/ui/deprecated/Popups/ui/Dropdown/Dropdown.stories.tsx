import { Dropdown } from './Dropdown';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Dropdown> = {
    title: 'shared/Dropdown',
    component: Dropdown,
    args: {
        trigger: 'Open',
        direction: 'bottom left',
        items: [
            {
                content: 'first',
            },
            {
                content: 'second',
            },
            {
                content: 'third',
            },
        ],
    },
    decorators: [
        (Story) => (
            <div style={{ display: 'flex', padding: 100 }}>
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

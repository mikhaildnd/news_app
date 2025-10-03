import { Tabs } from './Tabs';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Tabs> = {
    title: 'shared/Tabs',
    component: Tabs,
    // просто пример
    // argTypes: {
    //     onTabClick: { action: 'onTabClick!' },
    // },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        tabs: [
            {
                value: 'Tab 1',
                content: 'Tab 1',
            },
            {
                value: 'Tab 2',
                content: 'Tab 2',
            },
            {
                value: 'Tab 3',
                content: 'Tab 3',
            },
        ],
        value: 'Tab 2',
    },
};

import { TabItem, Tabs } from './Tabs';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

const meta: Meta<typeof Tabs> = {
    title: 'shared/Tabs',
    component: Tabs,
};
export default meta;

type Story = StoryObj<typeof meta>;

const tabs: TabItem[] = [
    { value: 'Tab 1', content: 'Tab 1' },
    { value: 'Tab 2', content: 'Tab 2' },
    { value: 'Tab 3', content: 'Tab 3' },
];

const StoryTabs = () => {
    const [value, setValue] = useState('Tab 2');

    return (
        <Tabs
            tabs={tabs}
            value={value}
            onTabClick={(tab) => setValue(tab.value)}
        />
    );
};

export const Primary: Story = {
    args: {},
    render: (args) => <StoryTabs {...args} />,
};

// export const Primary: Story = {
//     render: function Render() {
//         const [value, setValue] = useState('Tab 2');
//
//         return (
//             <Tabs
//                 tabs={tabs}
//                 value={value}
//                 onTabClick={(tab) => setValue(tab.value)}
//             />
//         );
//     },
// };

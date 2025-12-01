import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
    title: 'shared/Select',
    component: Select,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        label: 'Укажите значение',
        options: [
            { value: '1', content: 'Первый пункт' },
            { value: '2', content: 'Второй пункт' },
        ],
    },
};

// export default {
//     title: 'shared/Select',
//     component: Select,
//     argTypes: {
//         backgroundColor: { control: 'color' },
//     },
// } as ComponentMeta<typeof Select>;
//
// const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;
//
// export const Primary = Template.bind({});
// Primary.args = {
//     label: 'Укажите значение',
//     options: [
//         { value: '1', content: 'Первый пункт' },
//         { value: '2', content: 'Второй пункт' },
//     ],
// };

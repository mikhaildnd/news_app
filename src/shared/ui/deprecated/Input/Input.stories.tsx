import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
    title: 'shared/Input',
    component: Input,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        placeholder: 'Type text',
        value: 'Text',
    },
};

// export default {
//     title: 'shared/Input',
//     component: Input,
//     argTypes: {
//         backgroundColor: { control: 'color' },
//     },
// } as ComponentMeta<typeof Input>;
//
// const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;
//
// export const Primary = Template.bind({});
// Primary.args = {
//     placeholder: 'Type text',
//     value: 'Text',
// };

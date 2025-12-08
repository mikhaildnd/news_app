import type { Meta, StoryObj } from '@storybook/react';
import { Code } from './Code';

const meta: Meta<typeof Code> = {
    title: 'shared/Code',
    component: Code,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        text:
            'export default {\n' +
            "    title: 'shared/Code',\n" +
            '    component: Code,\n' +
            '    argTypes: {\n' +
            "        backgroundColor: { control: 'color' },\n" +
            '    },\n' +
            '} as ComponentMeta<typeof Code>;\n' +
            '\n' +
            'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;\n' +
            '\n' +
            'export const Normal = Template.bind({});',
    },
};

// export default {
//     title: 'shared/Code',
//     component: Code,
//     argTypes: {
//         backgroundColor: { control: 'color' },
//     },
// } as ComponentMeta<typeof Code>;
//
// const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;
//
// export const Normal = Template.bind({});
// Normal.args = {
//     text:
//         'export default {\n' +
//         "    title: 'shared/Code',\n" +
//         '    component: Code,\n' +
//         '    argTypes: {\n' +
//         "        backgroundColor: { control: 'color' },\n" +
//         '    },\n' +
//         '} as ComponentMeta<typeof Code>;\n' +
//         '\n' +
//         'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;\n' +
//         '\n' +
//         'export const Normal = Template.bind({});',
// };

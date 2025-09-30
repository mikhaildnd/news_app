import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Loader } from './Loader';

const meta: Meta<typeof Loader> = {
    title: 'shared/Loader',
    component: Loader,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};

// export default {
//     title: 'shared/Loader',
//     component: Loader,
//     argTypes: {
//         backgroundColor: { control: 'color' },
//     },
//     args: {
//         to: '/',
//     },
// } as ComponentMeta<typeof Loader>;
//
// const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;
//
// export const Normal = Template.bind({});
// Normal.args = {};
//
// export const Dark = Template.bind({});
// Dark.args = {};
// Dark.decorators = [ThemeDecorator(Theme.DARK)];

import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { PageError } from './PageError';

const meta: Meta<typeof PageError> = {
    title: 'widget/PageError',
    component: PageError,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const LightStory: Story = {
    args: {},
};

export const DarkStory: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};

// export default {
//     title: 'widget/PageError',
//     component: PageError,
//     argTypes: {
//         backgroundColor: { control: 'color' },
//     },
// } as ComponentMeta<typeof PageError>;
//
// const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />;
//
// export const Light = Template.bind({});
// Light.args = {};
//
// export const Dark = Template.bind({});
// Dark.args = {};
// Dark.decorators = [ThemeDecorator(Theme.DARK)];

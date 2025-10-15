import { ArticleTypeTabs } from './ArticleTypeTabs';
import type { Meta, StoryObj } from '@storybook/react';
import { ArticleType } from 'entities/Article';
import { useState } from 'react';

const meta: Meta<typeof ArticleTypeTabs> = {
    title: 'features/Article/ArticleTypeTabs',
    component: ArticleTypeTabs,
};
export default meta;

type Story = StoryObj<typeof meta>;

const StoryArticleTypeTabs = () => {
    const [value, setValue] = useState<ArticleType>(ArticleType.ALL);

    return (
        <ArticleTypeTabs
            value={value}
            onChangeType={(type) => setValue(type)}
        />
    );
};

export const Primary: Story = {
    args: {},
    render: (args) => <StoryArticleTypeTabs {...args} />,
};

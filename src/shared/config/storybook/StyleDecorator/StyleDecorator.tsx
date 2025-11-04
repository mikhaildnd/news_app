// eslint-disable-next-line mikhaildnd/layer-imports
import '@/app/styles/index.scss';
import type { StoryFn, StoryContext } from '@storybook/react';

export const StyleDecorator = (Story: StoryFn, context: StoryContext) => {
    return <>{Story(context.args, context)}</>;
};

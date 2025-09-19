import 'app/styles/index.scss';
import { StoryFn, StoryContext } from '@storybook/react';

// export const StyleDecorator = (story: () => Story) => story();

export const StyleDecorator = (Story: StoryFn, context: StoryContext) => {
    return <>{Story(context.args, context)}</>;
};

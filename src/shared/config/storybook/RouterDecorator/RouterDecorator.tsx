import 'app/styles/index.scss';
import { StoryFn, StoryContext } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (Story: StoryFn, context: StoryContext) => {
    return <BrowserRouter>{Story(context.args, context)}</BrowserRouter>;
};

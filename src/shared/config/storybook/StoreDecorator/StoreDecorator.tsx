import { StoryContext, StoryFn } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';
import { RootState } from 'app/providers/StoreProvider/config/store';

export const StoreDecorator =
    (initialState?: Partial<RootState>) =>
    // eslint-disable-next-line react/display-name
    (Story: StoryFn, context: StoryContext) => (
        <StoreProvider initialState={initialState}>
            {Story(context.args, context)}
        </StoreProvider>
    );

import { StoryContext, StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { loginReducer } from '@/features/AuthByUsername/testing';
import { profileReducer } from '@/features/editableProfileCard/testing';
import { articleDetailsReducer } from '@/entities/Article/testing';
import { addCommentFormReducer } from '@/features/AddCommentForm/testing';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsReducer,
};

export const StoreDecorator =
    (initialState?: Partial<StateSchema>, asyncReducers?: ReducersList) =>
    (Story: StoryFn, context: StoryContext) => (
        <StoreProvider
            initialState={initialState}
            asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
        >
            {Story(context.args, context)}
        </StoreProvider>
    );

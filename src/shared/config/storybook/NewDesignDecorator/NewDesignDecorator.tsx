import type { StoryFn, StoryContext } from '@storybook/react';
import { setFeatureFlags } from '@/shared/lib/features';
import { getAllFeatureFlags } from '@/shared/lib/features/lib/setGetFeatures';

export const NewDesignDecorator = (Story: StoryFn, context: StoryContext) => {
    setFeatureFlags({ ...getAllFeatureFlags(), isAppRedesigned: true });
    return <div className="app_redesigned">{Story(context.args, context)}</div>;
};

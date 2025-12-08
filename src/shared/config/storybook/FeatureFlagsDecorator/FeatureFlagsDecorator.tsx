import type { StoryContext, StoryFn } from '@storybook/react';
import type { FeatureFlags } from '@/shared/types/featureFlags';
import { setFeatureFlags } from '@/shared/lib/features';

export const FeatureFlagsDecorator =
    (features: FeatureFlags) => (Story: StoryFn, context: StoryContext) => {
        setFeatureFlags(features);
        return Story(context.args, context);
    };

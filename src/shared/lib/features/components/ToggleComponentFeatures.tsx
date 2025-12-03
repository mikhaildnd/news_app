import type { ReactElement } from 'react';
import type { FeatureFlags } from '@/shared/types/featureFlags';
import { getFeatureFlag } from '../lib/setGetFeatures';

interface ToggleComponentFeaturesProps {
    feature: keyof FeatureFlags;
    on: ReactElement;
    off: ReactElement;
}

export const ToggleComponentFeatures = (
    props: ToggleComponentFeaturesProps,
) => {
    const { feature, on, off } = props;

    if (getFeatureFlag(feature)) {
        return on;
    }

    return off;
};

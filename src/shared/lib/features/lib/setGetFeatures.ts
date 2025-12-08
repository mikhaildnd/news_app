import type { FeatureFlags } from '@/shared/types/featureFlags';
import { LOCAL_STORAGE_LAST_DESIGN_KEY } from '@/shared/const/localstorage';

const defaultFeatures: FeatureFlags = {
    isAppRedesigned:
        localStorage.getItem(LOCAL_STORAGE_LAST_DESIGN_KEY) === 'new',
};
// Фичи не меняются в ходе сессии, их необязательно делать реактивными
// Если нужны реактивные, то храним в стейте + можно сделать для них хук для быстрого доступа
let featureFlags: FeatureFlags = {
    ...defaultFeatures,
    // далее features list
};

// context
// state
// reload page
// force reload костыль
export function setFeatureFlags(newFeatureFlags?: FeatureFlags) {
    if (newFeatureFlags) {
        featureFlags = newFeatureFlags;
    }
}

export function getFeatureFlag(flag: keyof FeatureFlags) {
    return featureFlags[flag];
}

export function getAllFeatureFlags() {
    return featureFlags;
}

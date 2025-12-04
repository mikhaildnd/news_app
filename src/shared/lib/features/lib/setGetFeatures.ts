import type { FeatureFlags } from '@/shared/types/featureFlags';

// Фичи не меняются в ходе сессии, их необязательно делать реактивными
// Если нужны реактивные, то храним в стейте + можно сделать для них хук для быстрого доступа
let featureFlags: FeatureFlags = {};

export function setFeatureFlags(newFeatureFlags?: FeatureFlags) {
    if (newFeatureFlags) {
        featureFlags = newFeatureFlags;
    }
}

export function getFeatureFlag(flag: keyof FeatureFlags) {
    return featureFlags[flag] ?? true;
}

export function getAllFeatureFlags() {
    return featureFlags;
}

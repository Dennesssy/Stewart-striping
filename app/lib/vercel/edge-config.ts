/**
 * Vercel Edge Config
 * Use for: feature flags, A/B testing, dynamic configuration
 * Note: Install @vercel/edge-config if you plan to use Edge Config
 */

// Mock implementation - install @vercel/edge-config to use real Edge Config
const get = async <T = any>(key: string): Promise<T | undefined> => {
  return undefined;
};

const getAll = async () => {
  return {};
};

// Get a single config value
export async function getConfig<T = any>(key: string): Promise<T | undefined> {
  try {
    return await get<T>(key);
  } catch (error) {
    console.error('Edge config error:', error);
    return undefined;
  }
}

// Get all config values
export async function getAllConfig() {
  try {
    return await getAll();
  } catch (error) {
    console.error('Edge config error:', error);
    return {};
  }
}

// Feature flag helper
export async function isFeatureEnabled(featureName: string): Promise<boolean> {
  try {
    const features = await get<Record<string, boolean>>('features');
    return features?.[featureName] ?? false;
  } catch (error) {
    console.error('Feature flag error:', error);
    return false;
  }
}

// Get maintenance mode status
export async function isMaintenanceMode(): Promise<boolean> {
  try {
    return (await get<boolean>('maintenanceMode')) ?? false;
  } catch (error) {
    console.error('Maintenance mode check error:', error);
    return false;
  }
}

// Get dynamic pricing
export async function getPricing() {
  try {
    return await get('pricing');
  } catch (error) {
    console.error('Pricing config error:', error);
    return null;
  }
}

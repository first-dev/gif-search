import { ExpoConfig } from 'expo/config'

// In SDK 46 and lower, use the following import instead:
// import { ExpoConfig } from '@expo/config-types';

const config: ExpoConfig = {
  name: 'rn-experiment',
  slug: 'rn-experiment',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'light',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  assetBundlePatterns: ['**/*'],
  experiments: {
    tsconfigPaths: true,
  },
  extra: {
    eas: {
      projectId: 'e07704d7-5864-46d0-9204-f05c1b79a95a',
    },
  },
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
  },
  web: {
    favicon: './assets/favicon.png',
  },
}

export default config

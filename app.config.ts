import { ExpoConfig } from "expo/config"

const config: ExpoConfig = {
  name: "gif-search",
  slug: "gif-search",
  scheme: "gif-search",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  assetBundlePatterns: ["**/*"],
  experiments: {
    tsconfigPaths: true,
    typedRoutes: false,
  },
  extra: {
    eas: {
      projectId: "305d65b6-8c5c-47ce-91c7-8ed2d6e51c2a",
    },
  },
  runtimeVersion: {
    policy: "appVersion",
  },
  plugins: ["expo-router"],
  ios: {
    supportsTablet: true,
  },
  android: {
    package: "com.gifsearch",
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
  },
  web: {
    favicon: "./assets/favicon.png",
  },
}

export default config

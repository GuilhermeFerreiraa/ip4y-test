module.exports = function (api) {
  api.cache(true);
  return {};
};

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "nativewind/babel",
      "expo-router/babel",
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@src": "src/",
            "@assets": "assets/",
            "@components": "/src/components/",
            "@helpers": "/src/helpers/",
            "@services": "/src/services/",
            "^~(.+)": "./src/\\1",
          },
          extensions: [
            ".ios.js",
            ".android.js",
            ".js",
            ".jsx",
            ".json",
            ".tsx",
            ".ts",
            ".native.js",
          ],
        },
      ],
    ],
  };
};

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',  // 添加这个插件来支持 react-native-reanimated
    ],
  };
};


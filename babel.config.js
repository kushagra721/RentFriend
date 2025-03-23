module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    // other plugins here
    'react-native-reanimated/plugin', // 👈 this must be last
  ],
};

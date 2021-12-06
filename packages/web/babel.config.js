module.exports = {
  presets: ['next/babel', ['babel-preset-expo', { jsxRuntime: 'automatic' }]],
  plugins: [
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
    'react-native-reanimated/plugin',
    // 이게 있으면 reanimated가 제대로 동작하지 않음.
    // ['react-native-web', {commonjs: true}],
  ],
};

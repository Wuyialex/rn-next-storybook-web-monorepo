module.exports = {
  presets: ['next/babel', ['babel-preset-expo', {jsxRuntime: 'automatic'}]],
  plugins: [
    ['@babel/plugin-proposal-private-methods', {loose: true}],
    ['@babel/plugin-proposal-private-property-in-object', {loose: true}],
    ['react-native-web', {commonjs: true}],
  ],
};

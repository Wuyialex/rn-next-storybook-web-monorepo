const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([
  'components',
  'dripsy',
  '@dripsy/core',
]);
const {withExpo} = require('@expo/next-adapter');

module.exports = withPlugins([
  [
    withTM({
      webpack(config) {
        config.resolve.alias = {
          ...(config.resolve.alias || {}),
          'react-native$': 'react-native-web',
        };
        config.resolve.extensions = [
          '.web.js',
          '.web.ts',
          '.web.tsx',
          ...config.resolve.extensions,
        ];
        return config;
      },
    }),
  ],
  [withExpo, {projectRoot: __dirname + '/../..'}],
]);

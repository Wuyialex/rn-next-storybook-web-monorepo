const path = require('path');

const { withExpo } = require('@expo/next-adapter');
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([
  'app',
  'dripsy',
  '@dripsy/core',
]);

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
  [withExpo, { projectRoot: path.join(__dirname, '../..') }],
]);

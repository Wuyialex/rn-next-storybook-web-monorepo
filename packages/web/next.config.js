const path = require('path');

const { withExpo } = require('@expo/next-adapter');
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withTM = require('next-transpile-modules')(['app', 'dripsy', '@dripsy/core']);

module.exports = withPlugins(
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
    withImages,
    [withExpo, { projectRoot: path.join(__dirname, '../..') }],
  ],
  {
    images: {
      disableStaticImages: true,
    },
  },
);

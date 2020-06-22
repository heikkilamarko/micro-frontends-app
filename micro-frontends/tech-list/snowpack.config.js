const WebpackAssetsManifest = require('webpack-assets-manifest');

module.exports = {
  extends: '@snowpack/app-scripts-react',
  scripts: {},
  plugins: [
    [
      '@snowpack/plugin-webpack',
      {
        extendConfig: (config) => {
          config.plugins.push(
            new WebpackAssetsManifest({
              output: 'asset-manifest.json',
            }),
          );
          return config;
        },
      },
    ],
  ],
};

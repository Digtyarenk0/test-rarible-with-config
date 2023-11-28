/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const aliasRewire = require('react-app-rewire-alias');

module.exports = function buildResolvers(config, paths) {
  // Alias
  aliasRewire.alias({
    'magic-sdk': path.resolve(__dirname, '../../node_modules/magic-sdk/dist/cjs/index.js'),
    keccak: path.resolve(__dirname, 'keccak.js'),
  })(config);

  return {
    ...config.resolve,
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    preferRelative: true,
    modules: [paths.src, 'node_modules'],
    mainFiles: ['index'],
  };
};

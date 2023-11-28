const buildLoaders = require('./config/build/loaders.js');
const buildDevServer = require('./config/build/devServer.js');
const buildPlugins = require('./config/build/plugins.js');
const buildFallback = require('./config/build/fallback.js');
const buildResolvers = require('./config/build/resolvers.js');
const path = require('path');

module.exports = function override(config) {
  const paths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
    locales: path.resolve(__dirname, 'src', 'locales'),
    buildLocales: path.resolve(__dirname, 'build', 'locales'),
  };

  const isDev = process.env.mode === 'development';
  const isAnalyze = process.env.analyze === '1';

  config.resolve = buildResolvers(config, paths);
  config.resolve.fallback = buildFallback(config);
  config.plugins = buildPlugins(config, paths, isDev, isAnalyze);

  config.entry = paths.entry,
    config.devtool = isDev ? 'eval-cheap-module-source-map' : undefined,

    buildLoaders(config, isDev);
  //
  (config.devServer = isDev ? buildDevServer(config) : undefined),
    //
    //
    (config.output = {
      ...config.output,
      filename: '[name].[contenthash].js',
      path: paths.build,
    });

  // Hide the warnings created by the console
  (config.ignoreWarnings = [/Failed to parse source map/]);
  return config;
};

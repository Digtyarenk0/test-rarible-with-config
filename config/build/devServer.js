module.exports = function buildDevServer(config) {
  return {
    ...config.devServer,
    hot: true,
    overlay: {
      errors: true,
      warnings: false,
    },
  };
};

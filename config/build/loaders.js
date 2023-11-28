/* eslint-disable @typescript-eslint/no-var-requires */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const pushLoader = (config, rulePush) => {
  config.module.rules.map((rule) => {
    if (typeof rule.test !== 'undefined' || typeof rule.oneOf === 'undefined') {
      return rule;
    }
    rule.oneOf.unshift(rulePush);
  });
};

module.exports = function buildLoaders(config, isDev = false) {
  const svgLoader = {
    test: /\.svg$/,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  };

  const resolveMJSLoader = {
    test: /\.mjs/,
    include: /node_modules/,
    type: 'javascript/auto',
    resolve: {
      fullySpecified: false,
    },
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    exclude: /node_modules/,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      'css-modules-typescript-loader',
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: /\.module\.scss$/i,
            localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
          },
        },
      },
      'sass-loader',
    ],
  };

  const babelLodaer = {
    test: /\.(ts)x?$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: 'automatic' }], '@babel/preset-typescript'],
        plugins: ['macros', isDev && require.resolve('react-refresh/babel')].filter(Boolean),
      },
    },
  };

  const laoders = [babelLodaer, fileLoader, svgLoader, cssLoader, resolveMJSLoader];

  // push rules
  laoders.map((loader) => {
    pushLoader(config, loader);
  });
};

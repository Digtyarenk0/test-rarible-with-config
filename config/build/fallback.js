module.exports = function buildFallback(config) {
    return {
        ...(config.resolve.fallback || {}),
        url: require.resolve('url'),
        http: require.resolve('stream-http'),
        os: require.resolve('os-browserify'),
        zlib: require.resolve('browserify-zlib'),
        https: require.resolve('https-browserify'),
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
        path: require.resolve('path'),
        assert: require.resolve('assert'),
        buffer: require.resolve('buffer'),

        // i18n
        vm: require.resolve('vm-browserify'),
        tty: require.resolve('tty-browserify'),
        'process/browser': require.resolve('process/browser'),
        fs: false,
        v8: false,
        module: false,
        perf_hooks: false,
    };
};

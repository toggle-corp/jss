module.exports = function config(api) {
    api.cache(true);

    return {
        presets: [
            '@babel/preset-env',
        ],
        plugins: [
            ['@babel/plugin-proposal-class-properties', { loose: true }],
            '@babel/plugin-proposal-object-rest-spread',
            ['@babel/plugin-transform-runtime', { regenerator: true }],
            ['@babel/plugin-proposal-decorators', { legacy: true }],
        ],
    };
}

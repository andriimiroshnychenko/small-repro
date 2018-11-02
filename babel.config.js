module.exports = api => {
    api.cache(false);

    return {
        presets: [
            [
                '@babel/preset-env',
                {
                    targets: {
                        browsers: ['last 2 Chrome versions', 'last 2 Safari versions', 'last 2 Firefox versions']
                    },
                    modules: false,
                    forceAllTransforms: true
                }
            ],
            '@babel/preset-typescript'
        ],
        plugins: [
            ['@babel/plugin-proposal-decorators', { legacy: true }],
            ['@babel/plugin-proposal-class-properties', { loose: true }],
        ]
    };
    };
  
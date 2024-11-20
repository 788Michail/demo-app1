export const devServer = {
    proxy: {
        '/default': {
            target: 'https://40kskudemo.scandipwa.com',
            changeOrigin: true,
            secure: false,
        },
    },
    disableHostCheck: true,
    port: '8080',
    inline: true,
    client: {
        allowedHosts: 'all',
        host: '0.0.0.0',
    },
    hot: true,
    compress: true, // Συμπίεση των resources
    historyApiFallback: true, // Για Single Page Applications
};
export const module = {
    rules: [
        {
            test: /\.scss$/,
            use: [
                'style-loader', // Injects styles into DOM
                'css-loader', // Resolves CSS imports
                'sass-loader', // Compiles SCSS to CSS
            ],
        },
    ],
};
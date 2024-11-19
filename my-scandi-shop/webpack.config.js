module.exports = {
    devServer: {
        disableHostCheck: true,
        port: '8080',
        inline: true,
        client: {
            allowedHosts: 'all',
            host: '0.0.0.0',
        },
        hot: true, // Ενεργοποίηση Hot Module Replacement (HMR)
        compress: true, // Συμπίεση των resources
        historyApiFallback: true, // Για Single Page Applications
    },
};
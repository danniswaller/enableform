// vue.config.js
module.exports = {
    chainWebpack: () => {
    },

    configureWebpack: {
        // output: {
        //     publicPath: './'
        // },

    },

    devServer: {
        port: 8080,
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
            }
        }
    }

};
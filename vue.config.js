const path = require("path");

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                "@": path.join(__dirname, 'src/')
            }
        }
    },
    chainWebpack: config => {
        config.module
            .rule("vue")
            .use("vue-svg-inline-loader")
                .loader("vue-svg-inline-loader")
                .options({ /* ... */ });
    }
}
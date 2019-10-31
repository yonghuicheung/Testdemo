/* vue.config.js */
const path = require('path')
const configs = require('./config');

// 用于做相应的 merge 处理
const merge = require('webpack-merge');
const { DefinePlugin } = require('webpack')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

// 根据环境判断使用哪份配置
const isPro = process.env.NODE_ENV === 'production'
const cfg = isPro ? configs.build.env : configs.dev.env;

const resolve = dir => {
    return path.join(__dirname, dir)
}

module.exports = {
    publicPath: './',
    outputDir: 'dist',
    productionSourceMap: true,
    devServer: {
        open: false, // 是否自动打开浏览器页面
        host: 'localhost', // 指定使用一个 host。默认是 localhost
        port: 8080, // 端口地址
        https: false, // 使用https提供服务
        // string | Object 代理设置
        proxy: {
            // 接口是 '/repos' 开头的才用代理
            'repos': {
                target: 'https://api.github.com', // 目标地址
                changeOrigin: true, // 是否改变源地址
                // pathRewrite: {'^/api': ''}
            }
        },
        progress: true,
        // 提供在服务器内部的其他中间件之前执行自定义中间件的能力
        before: app => {
            // `app` 是一个 express 实例
        }
    },
    chainWebpack: config => {
        config.module
            .rule('images')
            .use('url-loader')
            .tap(options =>
                merge(options, {
                    limit: 5120,
                })
            )

        config.resolve.alias
            .set('@', resolve('src'))
            .set('_lib', resolve('src/common'))
            .set('_com', resolve('src/components'))
            .set('_img', resolve('src/images'))
            .set('_ser', resolve('src/services'))


        config.plugin('define')
            .tap(args => {
                let name = 'process.env';

                // 使用 merge 保证原始值不变
                args[0][name] = merge(args[0][name], cfg);

                return args
            })
    },
    configureWebpack: config => {
        // config.plugins = [] // 这样会直接将 plugins 置空

        // 使用 return 一个对象会通过 webpack-merge 进行合并
        if (isPro) {
            return {
                plugins: [

                    // 开启 Gzip 压缩
                    new CompressionWebpackPlugin({
                        filename: '[path].gz[query]',
                        algorithm: 'gzip',
                        test: new RegExp(
                            '\\.(js|css)$'
                        ),
                        threshold: 10240,
                        minRatio: 0.8
                    }),

                    // 使用包分析工具
                    new BundleAnalyzerPlugin()
                ]
            }
        }
    },
}
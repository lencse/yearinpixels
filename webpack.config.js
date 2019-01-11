const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const LiveReloadPlugin = require('webpack-livereload-plugin')
const commandLineArgs = require('command-line-args')
const webpackMerge = require('webpack-merge')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin')
const cssnano = require('cssnano')

const args = commandLineArgs([
    { name: 'watch', type: Boolean }
])

const devMode = true === args.watch

const dirs = {
    dist: 'public',
    views: 'build/views'
}

const extra = devMode ?
    {
        mode: 'development',
        devtool: 'inline-source-map',
        plugins: [
            new LiveReloadPlugin()
        ]
    } : {
        mode: 'production',
        plugins: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    output: {
                        comments: false
                    }
                }
            }),
            new OptimizeCssPlugin({
                cssProcessor: cssnano,
                cssProcessorOptions: {
                    discardComments: {
                        removeAll: true
                    }
                },
                canPrint: true
            })
        ]
    }

const filenames = {
    js: devMode ? '[name].js' : '[name].[hash].js',
    css: devMode ? '[name].css' : '[name].[hash].css'
}

module.exports = webpackMerge(
    {
        entry: [
            './build/src/frontend/app.js',
            './styles/main.scss'
        ],
        output: {
            filename: filenames.js,
            path: path.resolve(__dirname, dirs.dist)
        },
        plugins: [
            new CleanWebpackPlugin([dirs.dist]),
            new HtmlWebpackPlugin({
                template: `${dirs.views}/index.ejs`,
                filename: 'index.html',
                inject: 'body'
            }),
            new ExtractTextPlugin(filenames.css)
        ],
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader', 'sass-loader']
                    })
                }
            ]
        },
        performance: {
            hints: false
        }
    }, extra
)
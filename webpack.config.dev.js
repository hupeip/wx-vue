var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        app:["./src/entry.js"]
    },
    output: {
        path: path.join(__dirname,"./dist"),
        filename: "[name].js",
        publicPath: "/",
        hash: true
    },
    module: {
      loaders: [
          { test: require.resolve("jquery"), loader: "expose?$!expose?jQuery" },   //全局jquery
          { test: /\.vue$/, loader: 'vue' },
          { test: /\.js$/, loader: 'babel', exclude: /node_modules|vue\/dist|vue-hot-reload-api|vue-router\/|vue-loader/ },
          { test: /\.css$/, loader: ExtractTextPlugin.extract("style", "css?strictMath&noIeCompat","autoprefixer-loader") },
          { test: /\.less$/, loader: ExtractTextPlugin.extract("style", "css","less?strictMath&noIeCompat","autoprefixer-loader??{browsers:['last 2 version', 'Firefox 15']}") },
          { test: /\.(jpe?g|png|gif)$/i, loaders: [
              'url?limit=10000&name=images/[hash:8].[name].[ext]',
              'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
          ]},
          { test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=10000&name=fonts/[hash:8].[name].[ext]'}
      ]
    },
    vue: {
      loaders: {
          css: 'style!css!less?strictMath&noIeCompat!autoprefixer'
      }
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(true),
        new webpack.NoErrorsPlugin(),
        new OpenBrowserPlugin({ url: 'http://localhost:4002' }),
        new webpack.DefinePlugin({
          'process.env':{
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
          }
        }),
        new ExtractTextPlugin('[hash:8].style.css', { allChunks: true }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
          title: 'vue_webpack',
          template: path.join(__dirname,'./src/index.html'),
          hash:false
        })
    ],
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js', '.vue'],
        // 别名
        alias: {
            filter: path.join(__dirname, './src/filters'),
            components: path.join(__dirname, './src/components')
        }
    },
    devServer: {
      hot: true,
      quiet: false,
      noInfo: false,
      historyApiFallback: true,
      publicPath: '/',
        proxy: {
          '/ajax/*': {
             target: 'http://183.131.144.102:8083/',
            //target: 'http://localhost',
            rewrite: function(req) {
                 req.url = req.url.replace(/^\/ajax/, '');
               }
          }
        },
        stats: { colors: true }
    },
    devtool: 'eval-source-map'
};

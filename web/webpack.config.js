/**
 * Created by wangliting on 2017/5/23.
 */
const webpack = require('webpack')

const path = require('path')
const ROOT_PATH = path.resolve(__dirname)
const NODE_PATH = path.resolve(ROOT_PATH, 'node_modules')
const BUILD_PATH = path.resolve(ROOT_PATH, 'dist')


const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')


//插件配置
let plugins = [
  new ExtractTextPlugin('css/[name].css'),
  new CopyPlugin([
    {from: 'swiper', to: 'swiper'},
  ]),
];

//入口
let entry = {
  common: [ROOT_PATH + '/js/common'],
}


//页面
let pages = [
  'index',
  'map'
]

for (const index in pages) {
  const page = pages[index];
  plugins.push(
    new HtmlPlugin({
      template: `${page}.html`,
      filename: `${page}.html`,
      favicon: '',
      chunks: [page, 'common']
    })
  )
  entry[page] = [ROOT_PATH + '/js/' + page]
}

module.exports = {
  entry,
  output: {
    path: BUILD_PATH,
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
        }
      },
      {
        test: /\.js$/,
        exclude: NODE_PATH,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(otf|eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
        use: 'url-loader?name=image/[name].[ext]&limit=10000'
      },
      {
        test: /\.mp4$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: '../video/'
          },
        }
      },
      {
        include: NODE_PATH,
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader'],
        })
      },
      {
        exclude: NODE_PATH,
        test: /\.less$/i,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'less-loader'],
          publicPath: '../'
        })
      }
    ]
  },
  devServer: {
    port: 8089,
    host: '0.0.0.0'
  },
  plugins: plugins,
  mode: 'none',
}

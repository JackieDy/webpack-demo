const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyrightWebpackPlugin = require('./myplugins/copyRight-webpack-plugin');
module.exports={
  mode:'development',
  target: "web",
  entry:'./src/index.js',
  output:{
    filename:'main.js',
    path: path.resolve(__dirname,'dist')
  },
  devServer: {
    contentBase: './dist',
    open:true,
    hot: true,
    hotOnly:false,// 页面构建失败不刷新页面
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CopyrightWebpackPlugin({name:'jackie'})
  ],
  resolveLoader: {
    modules: ['node_modules','./myloaders']
  },
  module: {
    rules: [
      {
        test: /\.png$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["my-style-loader", "my-css-loader",'postcss-loader',"my-sass-loader"],
      }, {
        test: /\.js$/i,
        use: [
          {
    //loader: path.resolve(__dirname,'./myloaders/replace-loader.js'),
            loader:'replace-loader',
            options:{
              info:'jackie',
            }
          },
          {
            loader:'replace-async-loader',
            //loader: path.resolve(__dirname,'./myloaders/replace-async-loader.js'),
            options:{
              info:'love',
            }
          },
        ],
      },
    ],
  },
}
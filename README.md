# 1.webpack以及其打包流程
  ### webpack是一个模块打包工具（es module模块，commonjs，cmd，amd都可以识别），最开始是js模块打包工具，现在可以打包各种模块

# 2.webpack项目的初始化以及webpack的配置
```
 npm init//项目初始化
 npm install webpack webpack-cli -g  //全局安装webpack和webpack-cli，webpack-cli是为了可以在命令行里可以运行webpack
 npm install webpack@版本号 webpack-cli -D //在项目中安装webpack
 npx webpack entry文件 //npx可以启动项目目录下nodemodules下的webpack
 npx webpack —config webpack的入口文件 //--config可以指定wepack的入口文件
```
 ### 默认的webpack运行文件webpack.config.js
 ### 源码放在src里，打包的文件放在dist文件下
 ### package.json的scripts中设置运行命令
 ### 设置entry和output //path.resolve(__dirname,‘dist')__dirname是相对webpack.config.js这个文件的路径
 ### 设置webpack-dev-server, 让打包更加便捷,需要安装webpack-dev-server（ webpack-cli 3.x和webpack-cli 4.x的命令区别）
 ```
 For webpack-cli 3.x:
"scripts": { "start:dev": "webpack-dev-server" }
 For webpack-cli 4.x:
"scripts": { "start:dev": "webpack serve" }
 ```
 ### 

# 3.什么是loader
### webpack可以处理js模块，对于css，png等文件是不知道该如何打包的，这个时候需要借助loader
### loader用于加载某些资源文件。因为webpack本身只能打包common.js规范的js文件，对于其他资源如css，img等，是没有办法加载的，这时就需要对应的loader将资源转化，从而进行加载。


# 5.介绍下一些常见的loader，比如css loader， html loader ，png等文件loader
### 在module中配置file-loader用来解决png的问题
### sass-loader将sass代码转译为浏览器可以识别的CSS代码
### css-loader主要是解析css文件中的@import和url语句，处理css-modules，并将结果作为一个js模块返回
### 经过css-loader的转译，我们已经得到了完整的css样式代码，style-loader的作用就是将结果以style标签的方式插入DOM树中
### postcss-loader 可以使用autoprefixer自动添加浏览器厂商前缀，需要和package.json里的browserslist一起使用(npx browserslist可以查看选择了哪些浏览器),在 css-loader 和 style-loader 之前使用它，但是在其他预处理器（例如：sass|less|stylus-loader）之后使用
### 

# 6.实现css-loader，style-loader, sass-loader
# 7.如何自己编写一个loader
# 8.什么是plugins
 ### plugin是在某些时刻帮你做事情的插件，比如HtmlWebpackPlugin会在你打包完成之后帮你引入到html中，html-webpack-plugin会为你生成一个 HTML5 文件， 在 body 中使用 script 标签引入你打包生成的js文件，HtmlWebpackPlugin可以指定template
# 9.如何自己编写一个plugin
# 10.用到的loader和插件以及一些参考地址
## 地址：
sass-loader源码repo：https://github.com/patrio/sass-loader/blob/master/index.js
style-loader源码repo：https://github.com/pleunv/style-loader/blob/master/index.js
css-loader源码repo：https://github.com/webpack-contrib/css-loader/blob/master/src/index.js
autoprefixer插件地址：https://github.com/postcss/autoprefixer
browserslist文档：https://github.com/browserslist/browserslist#queries
webpack文档地址：https://webpack.docschina.org/
自己编写一个loader地址：https://webpack.docschina.org/contribute/writing-a-loader/
Loader Interface：https://webpack.docschina.org/api/loaders/
plugin Interface：https://webpack.docschina.org/api/compiler-hooks/

## 安装的loader和plugins
```
npm install autoprefixer -D
npm install css-loader -D
npm install file-loader -D
npm install html-webpack-plugin -D
npm install postcss-loader postcss -D
npm install sass-loader sass webpack -D
npm install style-loader -D
npm install webpack webpack-cli  -D
npm install webpack-dev-server -D
```

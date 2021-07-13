//插件是一个类或者说是构造函数
class CopyrightWebpackPlugin{
  constructor(options){
     console.log('插件被使用了',options);
  }
  apply(compiler){

  }
}
module.exports = CopyrightWebpackPlugin;
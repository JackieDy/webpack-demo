//loader本质上是一个函数，但是不可以是一个箭头函数
//loader必须有返回值， return a Buffer or String
//loader 支持配置
//loader如何返回多个信息This.callback
// this.callback(
//   err: Error | null,
//   content: string | Buffer,
//   sourceMap?: SourceMap,
//   meta?: any
// );
//loader支持异步this.async
//如何处理多个loader
//美化webpack里引入的路径
// resolveLoader: {
//   modules: ['node_modules','myloaders']
// }
module.exports=function(source){
  console.log(this.query);
  // console.log(source);
  const msg = source.replace('webpack',this.query.info);
//  this.callback(null,msg);
  return msg;
}
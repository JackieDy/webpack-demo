
module.exports = function(source) {
  //动态创建style
  //把source塞进style
  //把style放进文档头部
  console.log('test',source);
return  `const tag = document.createElement('style');
tag.innerHTML=${source};
document.head.appendChild(tag)`
 };
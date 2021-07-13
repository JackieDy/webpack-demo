const sass = require('sass');
module.exports = function(source) {
  console.log(source,this.data);
  const option={data:source}
 const callback = this.async()
  sass.render(option, function(err, result) {
    console.log('result',result.css.toString());
    callback(err,result.css.toString())
  });
};
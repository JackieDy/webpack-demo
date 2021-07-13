module.exports=function(source){
  console.log(this.query);
  const callback=this.async();
  setTimeout(()=>{
    const msg = source.replace('Hello',this.query.info);
    callback(null,msg);
  },2000)
 
}
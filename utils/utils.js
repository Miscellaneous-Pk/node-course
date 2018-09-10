module.exports.add = (a,b) => a + b;

module.exports.asyncSquare = (a,b,callback) => {
  setTimeout(()=>{
    callback (a * b);
  },1000);
};

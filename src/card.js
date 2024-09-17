//Card Object 
function Card(shape, figure){
  this.shape = shape;
  this.figure = figure;
}



Card.prototype.size = function(){
  if(this.shape == "star") return this.figure * 2;
  return  this.figure;
};



module.exports = Card;

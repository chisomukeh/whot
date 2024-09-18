const loadCards = require("./loadcards.js");



function Whot(tp = 2){
  this.drawPile = loadCards();
  this.cardsCopy = this.drawPile.slice();
  this.totalPlayers = tp;
  this.callCard = this.drawPile.pop();
  this.playerCards = [];
  
  
  
  //Handle first card
  //Ignore special cards as first card
  //Special cards: [1,2,5,8,14,20]
  while([1,2,5,8,14,20].includes(this.callCard.figure)){
    this.placeCard(this.drawPile.pop());
  }
}



//Make a new card the callCard
//While putting the previous callCard into  the drawPile
Whot.prototype.placeCard = function(card){
  this.drawPile.unshift(this.callCard);
  this.callCard = card;
}



//Retun a list of playable cards
Whot.prototype.permissibleCards = function(){
  return this.copy.filter(card => card.shape == this.callCard.shape || card.figure == this.callCard.figure);
}



//Check if a card is playable
Whot.prototype.isPlayable = function(card){
  return this.permissibleCards().includes(card);
}



module.exports = Whot;

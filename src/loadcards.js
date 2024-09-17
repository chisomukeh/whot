const Card = require("./card.js");
const shuffle = require("./shuffle.js");



function loadCards(){
  let card = [];
  let addCard = (shape, figure)=> card.push(new Card(shape, figure));
  
  
  for (let i = 1; i <= 14; i++){
    if(i <= 8){
      if(i <= 5) addCard("whot", 20);
      if(i != 6) addCard("star", i);
    }
    
    
    if(i != 6 && i != 9){
      addCard("circle", i);
      addCard("triangle", i);
    }
    
    
    if(![4,6,8,9,12].includes(i)){
      addCard("cross", i);
      addCard("square", i);
    }
  }
  
  
  return shuffle(card);
}



module.exports = loadCards;
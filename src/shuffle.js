function shuffle(arr){
  for (let i = arr.length - 1; i > 0; i--){
    let j = Math.round(Math.random()*i-1);
    [arr[j], arr[i]] = [arr[i], arr[j]];
  }
  
  return arr;
}



module.exports = shuffle;
function checkRow(arr){
  // if there are four in a row or a column checkWin returns "You win!"
  // if not, checkWin returns nothing.
  for (var row = 0; row < arr.length; row++) {
    for (var column = 0; column < arr[row].length-1; column++) {
      if (arr[row][column] ===1 && arr[row][column+1] ===1){
        console.log ("You win!")
      }
    }
  }
}

function checkColumn(arr){
  for (var row = 0; row < arr.length; row++){
    for (var column = 0; column < arr[row].length-1; column++) {
      if (arr[row][column] ===1 && arr[row][column+1] ===1){
      console.log ("You win!")
      }
    }
  }
}


checkWin ([[0,1,1,0]])
checkWin ([[0,0,1,1]])
checkWin ([[0,0,0,1]])


module.exports = checkWin

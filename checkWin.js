function checkRow(arr, playerTurn){
  // if there are four in a row or a column checkWin returns "You win!"
  // if not, checkWin returns nothing.
  for (var row = 0; row < arr.length; row++) {
    for (var column = 0; column < arr[row].length-3; column++) {
      if (arr[row][column] ===playerTurn && arr[row][column+1] === playerTurn &&arr[row][column+2]=== playerTurn &&arr[row][column+3]=== playerTurn){
        return true
      }
    }
  }
}

function checkColumn(arr, playerTurn){
  for(var i = 0; i < arr [0].length; i++){
    var column = arr.map(function(row){
      return row[i]
    })
    for (var columnItem = 0; columnItem < column.length-3; columnItem++) {
      if (column[columnItem] === playerTurn && column[columnItem+1] === playerTurn &&column[columnItem+2]=== playerTurn &&column[columnItem+3]=== playerTurn){
        return true
        }
      }
    }
}

function checkWin(arr, playerTurn) {
  // if checkRow or checkColumn returns true then
  //   log out you win.
  if (checkRow(arr, playerTurn) || checkColumn(arr, playerTurn)){
    return true
  }
}

var testArr = [[1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]]
var testArr2 = [[0, 0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 0, 0, 0], [0, 0, 0, 1, 1, 1, 1]]
// checkRow (testArr2)
// checkColumn (testArr)
checkWin (testArr, 1)
// module.exports = checkRow
module.exports = checkWin
// module.exports = checkColumn

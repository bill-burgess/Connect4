function createBoard() {
var column = 7
var row = 6
var newArr = []
  for (var i = 0; i < row; i++){
    newArr.push([])
    for (var j = 0; j < column; j++) {
      newArr[i].push(0)
    }
  }
  console.log(newArr)
    return newArr
}
createBoard()
module.exports = createBoard

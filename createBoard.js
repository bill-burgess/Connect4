function createBoard(size) {
var newArr = []
  for (var i = 0; i < size; i++){
    newArr.push([])
    for (var j = 0; j < size; j++) {
      newArr[i].push(false)
    }
  }
    return newArr
}

module.exports = createBoard

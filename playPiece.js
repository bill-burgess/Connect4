function playPiece(columnNumber, playerTurn, board){
  var column = board.map(function(row){
    return row[columnNumber]
  })

  var rowNumber = null
  column.find(function(value, i){
    rowNumber = i
    return value === 0
  })

  board[rowNumber][columnNumber] = playerTurn

  return board
}

module.exports = playPiece

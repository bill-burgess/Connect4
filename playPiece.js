var displayColumn = require('./displayColumn')

function playPiece(playerTurn, board, columnNumber){
  var column = displayColumn(board, columnNumber)

  var rowNumber = null
  column.find(function(value, i){
    rowNumber = i
    return value === 0
  })

  board[rowNumber][columnNumber] = playerTurn

  return board
}

module.exports = playPiece

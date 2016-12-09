var displayColumn = require('./displayColumn')

var checkValid = function(board, columnNumber){
  var column = displayColumn(board, columnNumber)
  var emptySquares = column.filter(function(value){
    return value === 0
  })
  if(emptySquares.length > 0){
    return true
  } else {
    return false
  }
}

module.exports = checkValid

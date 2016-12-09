var displayColumn = function(board, columnNumber){
  return board.map(function(row){
    return row[columnNumber]
  })
}


module.exports = displayColumn

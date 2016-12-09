var createBoard = require('./createBoard')
var checkWin = require('./checkWin')
var playPiece = require('./playPiece')
var changeTurn = require('./changeTurn')
var checkValid = require('./checkValid')
var express = require('express')
var expresshbs = require('express-handlebars')
// var path = require('path')
// var bodyParser = require('body-parser')
// var fs = require('fs')
// var data = require('./data.json')
var app = express()

var board = createBoard()
function runGame(){
  var playerTurn = Math.floor(Math.random()) + 1
  console.log(board, playerTurn)
  if(checkWin === true){
    return 'Player' + playerTurn + 'wins!'
  // }else{
  //   runGame()
  }
}
runGame()



// view engine setup
app.engine('handlebars', expresshbs({defaultLayout: 'main'})) // makes the main page html file work.
app.set('view engine', 'handlebars') //causes the render function to work

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(express.static(path.join(__dirname, 'public')))

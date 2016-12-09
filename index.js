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

var data = {'board': createBoard(), 'playerTurn': null}
data.playerTurn = Math.floor(Math.random()*2) + 1

function runGame(){
  console.log(data.board, data.playerTurn)
  if (checkValid(data.board, Math.floor(Math.random()*7))){
    playPiece(Math.floor(Math.random()*7), data.playerTurn, data.board)
    data.playerTurn = changeTurn(data.playerTurn)
  }
  if(checkWin(data.board,data.playerTurn) === true){
    console.log( 'Player' + data.playerTurn + 'wins!')
  }else{
    runGame()
  }
}
runGame()

// app.post('/', function(req,res) {
//   data.cats.push(req.body)
//   function updateData(newData){
//     fs.writeFile('./db/data.js', JSON.stringify(newData), (err) => {
//       if (err) throw err;
//       console.log('It\'s saved!');
//     })
// }

// view engine setup
app.engine('handlebars', expresshbs({defaultLayout: 'main'})) // makes the main page html file work.
app.set('view engine', 'handlebars') //causes the render function to work

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(express.static(path.join(__dirname, 'public')))

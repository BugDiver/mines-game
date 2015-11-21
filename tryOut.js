//var lib = require("./mineLib.js").lib
var ctx = require("axel")
ctx.clear();
ctx.fg(10,30,5);
ctx.text(63,17,"CONGRATS!!!  YOU HAVE WON")
ctx.cursor.restore()
// var keypress = require('keypress')(process.stdin);
// var ctx = require("axel");
// var makeBoard = function(){ 
// 	ctx.clear();
// 	for(var i=0; i<10;i++){
// 		for(var j=0;j<10;j++){
// 			ctx.bg(255,255,255);
// 			ctx.box((i+1)*7,(j+1)*3,5,2);
// 			ctx.fg(0,0,0);
// 			ctx.text((i+1)*7+3,(j+1)*3+1,i+""+j)
// 		}
// 	}
// 	ctx.cursor.restore()
// }


// var colourCurrentmove = function(){
// 	ctx.clear();
// 	makeBoard();
// 	var currentMove = [90,91,92,93,94,95,96,97,98,99];
// 	var a =currentMove[Math.floor(Math.random()*currentMove.length)];
// 	length = +(a+"").split("")[1]*2
//  	width = +(a+"").split("")[0]*5
// 	ctx.bg(0,255,0);
// 	ctx.box(length,width,5,2);
// 	ctx.cursor.restore()
// };
// colourCurrentmove()
// var restore = function(){
// 	ctx.clear();
// 	makeBoard();
// 	ctx.cursor.restore()
// }
// process.stdin.on('keypress', function (ch, key) {
//   if (key &&  key.name == 'up') {
//   	restore()
//   	console.log(key.name)
    	
//   }
//   else if (key &&  key.name == 'down') {
//   	restore()
//   	console.log(key.name)
    	
//   }
//   else	if (key && key.name == 'left') {
//   	restore()
//   	console.log(key.name)
    	
//   }
//   else	if (key && key.name == 'right') {
//   	restore()
//   	console.log(key.name)
    	
//   }
//   else if (key && key.ctrl && key.name == 'c') {
//     	process.stdout.pause()
//   }
//   else{
//   	 process.stdout.write("wrong key");
//   	  process.exit(0);
//   }
// });
 
// process.stdin.setRawMode(true);
// process.stdin.resume();

var lib = require("./minelib.js").lib;
var ctx = require('axel');


var presentBoard = function(){ 
	ctx.clear();
	for(var i=0; i<10;i++){
		for(var j=0;j<10;j++){
			ctx.bg(255,255,255);
			ctx.box((i+1)*7,(j+1)*3,5,2);
			ctx.fg(0,0,0);
			ctx.text((i+1)*7+3,(j+1)*3+1,j+""+i);
		}
	}
	ctx.cursor.restore()
}

var colourValidMove = function(validMoves){
	validMoves.forEach(function(move){
		ctx.bg(255,255,20);
		ctx.box((move.col+1)*7,(move.row+1)*3,5,2);
		ctx.fg(0,0,0);
		ctx.text((move.col+1)*7+3,(move.row+1)*3+1,move.row+""+move.col)
	})
};

var colourCurrentmove = function(currentMove){
	var length = (currentMove.col+1)*7;
	var width = (currentMove.row+1)*3;
	ctx.bg(0,255,0);
	ctx.box(length,width,5,2);
	ctx.fg(0,0,0);
	ctx.text(length+3,width+1,currentMove.row+""+currentMove.col);
};



var isValidInputType=function(input){
	if(input == null)	return false;
	input = input.replace(/\r\n/,'').slice(0,2);
	var isLengthNot2 = input.length != 2;
	var isOutOfRange = +input < 0 && +input > 99;
	if(isLengthNot2 || isOutOfRange){
		console.log("Please Give a Valid 2 digit Input. . .");
		return false;
	}
	return true;
}
var tapAtSquare = function(input,userMoves,solvingPath,previousValidMoves){
	var input = lib.getRowColumn(input);
	if(!lib.isValidMove(input,previousValidMoves)){
		ctx.fg(255,0,0)
		ctx.text(80,17,"Enter a Valid Move From The Yellow Boxes. . .");
		setTimeout(main(solvingPath),1500);
		return previousValidMoves;
	}
	var status = lib.minePackage(input,solvingPath);
	if(status.win){
		ctx.clear();
		ctx.fg(10,30,5);
		ctx.text(63,17,"CONGRATS!!!  YOU HAVE WON")
	}
	else if(!status.proceed){
		ctx.clear();
		ctx.fg(255,0,0)
		ctx.text(65,17,'You have went over mine, RESTARTING......')
		setTimeout(function(){return main(solvingPath)},1500)
	}
	else{
		userMoves.push(userMoves);
		presentBoard();
		colourValidMove(status.validMoves);
		colourCurrentmove(status.currentMove);
		ctx.cursor.restore();
	};
	return status.validMoves;
};
var main = function(solvingPath){
	process.stdin.setEncoding('utf8');
	presentBoard();
	var validChoices = lib.getInitialMoves();
	var userMoves = [];
	process.stdin.on('readable', function() {
		var move = process.stdin.read();
		if(move == 'Q')
			process.exit(0);
  		if(isValidInputType(move)){
			move = move.replace(/\r\n/,'');
  			validChoices = tapAtSquare(move,userMoves,solvingPath,validChoices) || lib.getInitialMoves();
  		}
  	});
	process.stdin.on('end', function() {
  		process.stdin.resume();
	});
}
var solvingPath=lib.generatePath();
//console.log(solvingPath)
main(solvingPath);
	
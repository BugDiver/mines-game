var blib = require('./shuffle.js').lib;
var lib={};
exports.lib=lib;

var isVaildRowCol=function(value){
	var upper = 9;
	var lower = 0;
	isVaildRow = value.row >= lower && value.row <= upper;
	isValidColumn = value.col >= lower && value.col <= upper;
	return isVaildRow && isValidColumn;
};
var setRowCol=function(r,c){
	return {row: +r, col: +c};
};
lib.getValidMoves=function(move){
	var availableMoves = [];
	availableMoves.push(setRowCol(move.row - 1, move.col)); //left
	availableMoves.push(setRowCol(move.row + 1, move.col)); //right
	availableMoves.push(setRowCol(move.row, move.col - 1));	//up
	availableMoves.push(setRowCol(move.row, move.col + 1));	//down
	return availableMoves.filter(isVaildRowCol);
};
var getInString=function(obj){
	if(obj instanceof Array){
		return obj.map(function(element){
			return JSON.stringify(element);
		});
	}
	return JSON.stringify(obj);
};
var isInArray = function(array,element){
	var arrayWithText = getInString(array);
	var elementText = getInString(element);
	return arrayWithText.indexOf(elementText) != -1;
}
// var getUnique=function(objInsideArr){
// 	var unique=[];
// 	objInsideArr.forEach(function(obj){
// 		if(unique.indexOf(getInString(obj)) == -1)
// 			unique.push(getInString(obj));
// 	});
// 	return unique.map(JSON.parse);
// }
lib.getInitialMoves = function(){
	var validChoices = new Array(0,1,2,3,4,5,6,7,8,9);
	return validChoices.map(function(element){
		return {row: 9, col: element};
	});
};
lib.generatePath=function(){
	var path = [];
	var starting = lib.getInitialMoves();
	var selectedBox = blib.shuffle(starting);
	path.push(selectedBox);
	while(selectedBox.row != 0){
		var valid = lib.getValidMoves(selectedBox);
		selectedBox = blib.shuffle(valid);
		isInArray(path,selectedBox) || path.push(selectedBox);
	}
	if(path.length >= 25 && path.length <= 35)
		return Object.freeze(path);
	return lib.generatePath();
}
lib.getRowColumn=function(input){
	var row = input[0];
	var column = input[1];
	return setRowCol(row,column);
};
lib.isOverMine = function(move,solvingPath){
	var moveAsString = getInString(move);
	var pathAsString = solvingPath.map(function(obj){
		return JSON.stringify(obj);
	});
	return pathAsString.indexOf(moveAsString) == -1;
}
lib.hasWon = function(move,solvingPath){
	var isInTop = move.row == 0;
	var isInRightPath = !lib.isOverMine(move,solvingPath);
	return isInTop && isInRightPath;
}
lib.minePackage=function(userMove,solvingPath){
	var status = {	validMoves: 	undefined,
				 	currentMove: 	undefined,
					proceed: 		true,
					win: 			false
			   	};
	if(lib.hasWon(userMove,solvingPath)){
		status.proceed = false;
		status.win = true;
		return status;
	}
	if(lib.isOverMine(userMove,solvingPath)){
		status.proceed = false;
		return status;
	}
	status.validMoves = lib.getValidMoves(userMove);
	status.currentMove = userMove;
	return status;
}
lib.isValidMove = function(move,validMoves){
	return validMoves.some(function(obj){
		return JSON.stringify(move) == JSON.stringify(obj);
	});
}

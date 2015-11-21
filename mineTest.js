var m=require("./mineLib.js").lib;
var assert=require("assert");
var test={};
exports.test=test;

test["getValidMoves gives valid moves when pointer is at the bottom middle"]=function(){
	var move={row:9,col:4};
	var expected=[	{row: 8, col: 4},
					{row: 9, col: 3},
					{row: 9, col: 5}  ];
	assert.deepEqual(expected,m.getValidMoves(move));
};
test["getValidMoves gives valid moves when pointer is at the middle of the matrix"]=function(){
	var move = {row:4,col:4};;
	var expected=[	{row: 3, col: 4},
					{row: 5, col: 4},
					{row: 4, col: 3},
					{row: 4, col: 5}  ];
	assert.deepEqual(expected,m.getValidMoves(move));
}
test["getValidMoves gives valid moves when pointer is at the top middle"]=function(){
	var move={row:0,col:4};;
	var expected=[	{row: 1, col: 4},
					{row: 0, col: 3},
					{row: 0, col: 5}  ];
	assert.deepEqual(expected,m.getValidMoves(move));
};
test["getValidMoves gives valid moves when pointer is at the middle left"]=function(){
	var move={row:4,col:0};;
	var expected=[	{row: 3, col: 0},
					{row: 5, col: 0},
					{row: 4, col: 1}  ];
	assert.deepEqual(expected,m.getValidMoves(move));
};
test["getValidMoves gives valid moves when pointer is at the right middle"]=function(){
	var move={row:4,col:9};;
	var expected=[	{row: 3, col: 9},
					{row: 5, col: 9},
					{row: 4, col: 8}  ];
	assert.deepEqual(expected,m.getValidMoves(move));
};
test["getValidMoves gives valid moves when pointer is at the left top corner"]=function(){
	var move={row:0,col:0};;
	var expected=[	{row: 1, col: 0},
					{row: 0, col: 1}  ];
	assert.deepEqual(expected,m.getValidMoves(move));
};
test["getValidMoves gives valid moves when pointer is at the right top corner"]=function(){
	var move={row:0,col:9};;
	var expected=[	{row: 1, col: 9},
					{row: 0, col: 8}  ];
	assert.deepEqual(expected,m.getValidMoves(move));
};
test["getValidMoves gives valid moves when pointer is at the right bottom corner"]=function(){
	var move={row:9,col:9};;
	var expected=[	{row: 8, col: 9},
					{row: 9, col: 8}  ];
	assert.deepEqual(expected,m.getValidMoves(move));
};
test["getValidMoves gives valid moves when pointer is at the left bottom corner"]=function(){
	var move={row:9,col:0};;
	var expected=[	{row: 8, col: 0},
					{row: 9, col: 1}  ];
	assert.deepEqual(expected,m.getValidMoves(move));
};
//--------------------------------------------------------------------------------------------------------
var solvingPath = [ { row: 9, col: 6 },
					{ row: 8, col: 6 },
					{ row: 8, col: 5 },
					{ row: 8, col: 4 },
					{ row: 7, col: 4 },
					{ row: 6, col: 4 },
					{ row: 6, col: 3 },
					{ row: 5, col: 3 },
					{ row: 4, col: 3 },
					{ row: 4, col: 4 },
					{ row: 3, col: 3 },
					{ row: 5, col: 4 },
					{ row: 5, col: 5 },
					{ row: 5, col: 6 },
					{ row: 4, col: 6 },
					{ row: 4, col: 5 },
					{ row: 3, col: 5 },
					{ row: 3, col: 6 },
					{ row: 3, col: 7 },
					{ row: 2, col: 7 },
					{ row: 2, col: 8 },
					{ row: 3, col: 8 },
					{ row: 4, col: 8 },
					{ row: 4, col: 9 },
					{ row: 3, col: 9 },
					{ row: 1, col: 7 },
					{ row: 1, col: 8 },
					{ row: 1, col: 9 },
					{ row: 2, col: 9 },
					{ row: 0, col: 9 } ]
//-----------------------------------------------------------------------------------------------------------------------------------------------------------
test["isOverMine tells whether the given move is over mine or not when the given move is in right path and at the start of the path"]=function(){
	var move = {row: 9, col: 6};
	assert.equal(false,m.isOverMine(move,solvingPath));
}
test["isOverMine tells whether the given move is over mine or not when the given path is in right path and at the end of the path"]=function(){
	var move = {row: 0, col: 9}
	assert.equal(false,m.isOverMine(move,solvingPath));
}
test["isOverMine tells whether the given move is over mine or not when the given move is in wrong path"] = function(){
	var move = {row: 9, col: 5};
	assert.equal(true,m.isOverMine(move,solvingPath));
};
//-----------------------------------------------------------------------------------------------------------------------------------------------------------

test["hasWon Checks whether the given move is a winning move or not when it is at the winning position"]=function(){
	var move = {row: 0, col: 9};
	assert.equal(true,m.hasWon(move,solvingPath));
}
test["hasWon Checks whether the given move is a winning move or not whe the given move is at the top of the matrix but not in right path"]=function(){
	var move = {row: 0, col: 5};
	assert.equal(false,m.hasWon(move,solvingPath));
}
test["hasWon Checks whether the given path is a winning move or not whe the given move is in right path but not at the top of the matrix"]=function(){
	var move = {row: 4, col: 9};
	assert.equal(false,m.hasWon(move,solvingPath));
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------
test["isValidMove Checks whether the given move is in valid moves or not when the given move is valid"]=function(){
	var validMoves = [{row: 9, col: 4},{row: 9, col: 6},{row: 8, col: 5}];
	var move = {row: 8, col: 5};
	assert.equal(true,m.isValidMove(move,validMoves));
}
test["isValidMove Checks whether the given move is in valid moves or not when the given move is invalid"]=function(){
	var validMoves = [{row: 9, col: 4},{row: 9, col: 6},{row: 8, col: 5}];
	var move = {row: 5, col: 5};
	assert.equal(false,m.isValidMove(move,validMoves));
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------
test["generatePath gives a path size of minimum 22 move"] = function(){
	assert.ok(m.generatePath().length >= 22);
}
test["generatePath gives a path size of maximum 35 move"] = function(){
	assert.ok(m.generatePath().length <= 35);
}
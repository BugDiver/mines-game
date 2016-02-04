var lib={};
exports.lib=lib;

var generateRandomIndex = function(range){
	return Math.ceil((Math.random()*range));
};

var changePosition = function(name,index,array){
	var randomIndex = generateRandomIndex(array.length-1);
	var otherName = array[randomIndex];
	array[randomIndex] = array[index];
	array[index] = otherName;
};

lib.shuffle = function(list){
	var array = list;
	array.forEach(changePosition);
	return array[array.length-1];
};

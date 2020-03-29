/*
Exercise one
Write a loop that makes seven calls to console.log to output a triangle
*/
var hash = "#";
for (var i = 0; i < 7; i++) {
	console.log(hash);
	hash += "#";
}



/*Exercise two
Write a program that uses console.log to print all numbers from 1 -> 100
with two exceptions, numbers divisible by 3 print "Fizz" and numbers 
divisible by 5 print "Buzz". For numbers divisible by both 3 and 5 print "FizzBuzz"
*/

for (var i = 1; i < 101; i++) {
	
	if((i % 3 == 0) && (i % 5 == 0)){
		console.log("FizzBuzz");
	} else if(i % 3 == 0) {
		console.log("Fizz");
	} else if(i % 5 == 0) {
		console.log("Buzz");
	} else {
		console.log(i);
	}
}


/*Exercise three
Write a program that represents an 8x8 grid using new line characters to seperate lines.
At each position of the grid there should either be a space or #. Passing this string
to console.log should form a chessboard
*/

var board = "";
const size = 8;
//first loop represents a line
for (var i = 0; i < size; i++) {
	//second loop represents the text on a line
	for (var x = 0; x < size; x++) {
		if ((i+x) % 2 == 0) {
			board+=" ";
		} else {
			board += "#";
		}	
	}
	board += "\n";
}

console.log(board)
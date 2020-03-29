/*
Exercise one
Write a function min that takes two arguments and returns their minimum
*/

function min(x,y){
	if (x < y){
		return x
	} else {
		return y
	}
}
console.log(min(5,10));
//5


/*
Exercise two
Define a recursive function isEven that accepts a single parameter
(a positive whole number) and returns a boolean
Test on 50, 75 and -1. What happens with "-1", how can this be fixed?
*/
function isEven(num){
	if (num == 0){
		return true
	}
	if (num == 1){
		return false
	} else {
		return isEven(num - 2);
	}
}
 console.log(isEven(50));
 //true
 console.log(isEven(75));
 //false
//console.log(isEven(-1));
//too much recursion

function isEvenAcceptsNegativeNumbers(num){
	if (num == 0){
		return true
	}
	if (num == 1){
		return false
	} else if (num < 0) {
		return isEven(num + 2);
	} else {
		return isEven(num - 2);
	}
}
console.log(isEvenAcceptsNegativeNumbers(-1));
//false


/*
Exercise three
Write a function countBs that takes a string as its only argument and returns a number
indicating how many uppercase "B" charactrs are in the string.
Write a function called countChar that behaves like countBs, except 
it takes a second argument that indicates the character to be counted.
*/

function countBs(str){
	var length = str.length
	var count = 0;
	for (var i = 0; i < length; i++) {
		if(str[i] == "B"){
			if(count == 0){
				count = 1;
			} else {
				count += 1;
			}
		}
	}
	return count;
}

console.log(countBs("okB"));
// 1

function countChar(str, char){
	var length = str.length
	var count = 0;
	for (var i = 0; i < length; i++) {
		if(str[i] == char){
			if(count == 0){
				count = 1;
			} else {
				count += 1;
			}			
		}
	}
	return count;
}
console.log(countChar("Hello", "l"));
//2
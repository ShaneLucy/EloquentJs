/*
Exercise 1
Write a range function that takes two arguments start and end and returns an array containing
all the numbers from start to end. 
Write a sum function that takes an array of numbers and returns the sum of these
Modify the range function that takes a third argument step. Which indicates the step value when building the array
*/

function range(start, end, step){
	let range =[];
	//if step isn't passed add each value to array
	if(step == undefined){
		for (var i = (start + 1); i < end; i++) { 
			range.push(i);
		}
	} else {
		for (var i = (start + 1); i < end; i += step) { 
			range.push(i);
		}
	}
	console.log(range);
}
range(5,10);
//range[6,7,8,9]
range(5,10,2);
//range[6,8]


function sum(...numbers){
	var sum = 0;
	for (let number of numbers){
		sum += number;
	}
	console.log(sum);
}

sum(1,2,3);
//6

/*
Exercise 2
Write a function reverseArray that reverses an array and ouputs this to a new array. Also write a function reverseArrayInPlace 
that modifies an array by reversing its order. Neiter function may use the built in reverse method
*/

function reverseArray(...arr){
	let reversed = [];
	for (let item of arr){
		reversed.unshift(item);
	}
	console.log(reversed);
}

reverseArray(1,2,3);
//reversed[3,2,1]

function reverseArrayInPlace(...arr){
	let placeholder = [];
	for (let item of arr){
		placeholder.unshift(item);
	}
	arr = placeholder;
	console.log(arr);
}
reverseArrayInPlace("a","b","c");
//arr[c,b,a]

/*
Exercise 3
Write a function arrayToList that builds up a list structure from an array. Then write a function listToArray that produces an array
from a list. Finally write a function prepend that takes an element and a list and creates a new list with the element added to the front of the list
*/

function arrayToList(...arr){
	let list = null;
	for (let i = arr.length -1; i >= 0; i--){
		list = {
			value: arr[i], 
			rest: list
		};
	}
	console.log(list);
}
arrayToList(1,2,3);

function listToArray(list){
	let arr = [];
	for (let node = list; node; node = node.rest){
		arr.push(node.value);
	}
	console.log(arr);
}

function prepend(value, list){
	return {value, rest: list};
}

/*
Exercise 4 
Write a function deepEqual that takes two values and returns true if they are the same value.
*/

function deepEqual(one, two){
	if(one === two){
		return true;
	} else {
		return false;
	}
}

console.log(deepEqual(1,2));
//false
console.log(deepEqual("JS","JS"));
//true
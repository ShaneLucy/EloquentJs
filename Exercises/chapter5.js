/*
Exercise one 
Use the reduce method in combination with the concat method to flatten and array of 
arrays into a single array, which contains all the elements of the original arrays
*/

let arrays = [[1,2,3], [4,5,6]];	
console.log(arrays.reduce((flattened,current) => flattened.concat(current), []));
//[1,2,3,4,5,6]

/*
Exercise two
Write a higher-order function loop that provides something like a for loop statement,
it should take a value, a test function, an update function and a body function. On each iteration the
test function is fun on the current loop value and stops if it returns false. The body function is called
passing the value to it. Finally the update function is called to create a new value and starts from 
the beginning
*/
function loop(start, test, update, body) {
  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
}

loop(5, n => n < 10, n => n + 1, console.log);
//5
//6
//7
//8
//9

/*
Exercise three
Write a function every that takes an array and a predicate function as parameters which implements
the array every method
*/

function every(arr, fun){
	for (let element of arr) {
    if (!fun(element)) return false;
  }
  return true;
}
console.log(every([1,3,8], n => n < 9));
//true
console.log(every([1,3,8], n => n < 7));
//false

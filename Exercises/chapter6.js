/*
Exercise one
Write a class Vec which represents a vector in a two dimensional space. It takes x and y parameters which should
be saved to properties of the same name. It should have a plus and minus method which take a vector as a parameter and return a 
new vector. Add a getter property length which computes the length of a vector
*/

class Vec {
	constructor(x,y){
		this.x = x;
		this.y = y;
	}

	plus(a,b){
		let plusA = this.x + a;
		let plusB = this.y + b;
		console.log("(",plusA,",",plusB,")");
	}

	minus(a,b){
		let minusA = this.x - a;
		let minusB = this.y - b;
		console.log("(",minusA,",",minusB,")");
	}

	get length(){
		let xSquared = this.x * this.x;
		let ySquared = this.y * this.y;
		return Math.sqrt((xSquared + ySquared));
	}
}

let vec = new Vec(3,4);
vec.plus(5, -1);
//(8,3)
vec.minus(6, 1);
//(-3, 3)
console.log(vec.length);
//5


/*
Exercise two
Write a class Group which has add, delete and has methods. The constructor creates an empty group, add adds values to the group if the value 
isn't already present in the group. Delete removes the value from the group if the value is in the group. has returns true or false if the value is 
a member of the group. Finally it should have a static method which takes an iterable object as its argument and creates a group that contains all the values
produced by iterating over it
*/

/*
Exercise three
Make the group class from the previous exercise iterable
*/

/*
Exercise four
Can you think of a way to call hasOwnProperty on an object that has
its own property by that name?
*/
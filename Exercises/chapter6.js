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

class Group {
  constructor() {
    this.members = [];
  }

  add(value) {
    if (!this.has(value)) {
      this.members.push(value);
    }
  }

  delete(value) {
    this.members = this.members.filter(v => v !== value);
  }

  has(value) {
    return this.members.includes(value);
  }

  static from(collection) {
    let group = new Group;
    for (let value of collection) {
      group.add(value);
    }
    return group;
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
//true
console.log(group.has(30));
//false
group.add(10);
group.delete(10);
console.log(group.has(10));


/*
Exercise three
Make the group class from the previous exercise iterable
*/
class Group2 {
  constructor() {
    this.members = [];
  }

  add(value) {
    if (!this.has(value)) {
      this.members.push(value);
    }
  }

  delete(value) {
    this.members = this.members.filter(v => v !== value);
  }

  has(value) {
    return this.members.includes(value);
  }

  static from(collection) {
    let group2 = new Group2;
    for (let value of collection) {
      group2.add(value);
    }
    return group2;
  }

  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(group2) {
    this.group = group2;
    this.position = 0;
  }

  next() {
    if (this.position >= this.group.members.length) {
      return {done: true};
    } else {
      let result = {value: this.group.members[this.position],
                    done: false};
      this.position++;
      return result;
    }
  }
}

for (let value of Group2.from(["a", "b", "c"])) {
  console.log(value);
}
//a
//b
//c

/*
Exercise four
Can you think of a way to call hasOwnProperty on an object that has
its own property by that name?
*/

let map = {one: true, two: true, hasOwnProperty: true};

console.log(Object.prototype.hasOwnProperty.call(map, "one"));
//true
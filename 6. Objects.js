/* *******************************Objects***********************************
if you have groups of data that you would like to relate,you can assign 
them to something known as an object.
An object can have PROPERTIES(keys,values) and METHODS(functions)

*************************Object literal syntax******************************
1. Declaring a new variable and assigning an object literal to it - 
in other words, this: var table = {};

2. Assigning the values to each of the object's keys, using the 
assignment operator, = and commas in between
var table = {
    legs: 3,
    color: "brown",
    priceUSD: 100,
}

3. To access the table object, I can simply console log the entire object: 
console.log(table);

4.The returned value is the entire table object:  
{legs: 3, color: 'brown', priceUSD: 100}

5.Additionally, I can console log any individual property, like this:  
console.log(table.color); // 'brown'

***************************** Dot notation********************************

1. CREATE NEW objects: 
Save an empty object literal to a variable, then use the dot notation to 
declare new properties on the fly, and use the assignment operator 
to add values to those
properties; for example:
var house = {};
house.rooms = 3;
house.color = "brown";
house.priceUSD = 10000;

2. ADD new properties 
console.log(house); // {rooms: 3, color: "brown", priceUSD: 10000}
house.windows = 10;
console.log(house); // {rooms: 3, color: "brown", priceUSD: 10000, windows: 10}

3.UPDATE already EXISTING properties, not just add new ones:  
house.windows = 11;
console.log(house); // {rooms: 3, color: "brown", priceUSD: 10000, windows: 11}


**************************Bracket Notation*******************************
1. Same as DOT NOTATION

2. I can add space characters inside property names, like this: 
car["number of doors"] = 4;
console.log(car); // {color: 'green', speed: 100, number of doors: 5}

3.I can add numbers (as the string data type) as property keys:  
car["2022"] = 1901;
console.log(car); // {2022: 1901, color: 'green', speed: 100, number of doors: 5}

4. Can evaluate expressions
var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}
///
100
200
red
Using the fact that brackets notation can evaluate expressions, 
I accessed the arrOfKeys[i] property on the drone object. 

***************************METHODS*********************************
Method is just another property of the car object. It's just
another key-value par that the car object holds.
What's unique is that the value I'm assigning to it is a function. ​

var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
    console.log("The engine is running")
}
car.lightsOn = function() {
    console.log("The lights are on.")
}
console.log(car);
car.turnTheKey();
car.lightsOn()

-->
{ mileage: 98765, color: 'red' }
{
  mileage: 98765,
  color: 'red',
  turnTheKey: [Function (anonymous)],
  lightsOn: [Function (anonymous)]
}
The engine is running
The lights are on.
*/



/* examples
var assistantManager = {
    rangeTilesPerTurn: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40,
    specialAbility: "young and ambitious",
    greeting: "Let's make some money"
}
console.log(assistantManager);
console.log(assistantManager.health);

//Dot notation

var house2 = {};
house2.rooms = 4;
house2.color = "pink";
house2.priceUSD = 12345;

console.log(house2.color);

house2.windows=10;

console.log(house2);


//Bracket notation
var house2 = {};
house2["rooms"] = 4;
house2['color']= "pink";
house2["priceUSD"] = 12345;
console.log(house2); // {rooms: 4, color: 'pink', priceUSD: 12345}

var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}
*/






/*
const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( function(veggies, index) {
    console.log(`${index}. ${veggies}`);
});

const nums = [0,10,20,30,40,50];
nums.filter( function(num) {
    return num > 20;
})
console.log((num));
*/

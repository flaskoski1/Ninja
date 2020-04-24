import React from "react";
import "./App.css";
let first;
let first1;
let first2;
let result1;
let result2;
let result3;
let result4;
let result5;
let result6;
let result7;

function App() {
  return (
    <div className="App">
      {first}
      {first1}
      {first2}
      {result1}
      {result2}
      {result3}
      {result4}
      {result5}
      {result6}
      {result7}
    </div>
  );
}

export default App;
//9.14 Objects have access to properties that werent explicitly defined
//dottuka
//9.13 Simulating array-like methods
// const body = (
//   <body>
//     <input id="first" />
//     <input id="second" />
//     <script>
//       const elems={
//         length:0,
//         add:function(elem){
//           Array.prototype.push.call(this, elem)
//         },
//         gather: function(id){
//           this.add(document.getElementById(id))
//         },
//         find: function(callback){
//           return Array.prototype.find.call(this,callback)
//         }
//       };
//       elems.gather("first");
//       if(elems.length===1 && elems[0].nodeType){
//         "Verify that we have an element in our stash"
//       }
//       elems.gather("second")
//       if(elems.length===2 && elems[1].nodeType){
//         "Verify the other insertion"
//       }
//       elems.find(elem=>elem.id==="second")
//       if(foudn && found.id==="second"){
//         "We'have found ou"
//       }
//     </script>
//   </body>
// );
//dottuka
//9.12 Aggregating items with reduce
// const numbers = [1, 2, 3, 4];
// const sum = numbers.reduce((aggregated, number) => aggregated + number, 0);
// if (sum === 10) {
//   first = " The sum of the first four numbers is 10";
// }
//dottuka
//9.11 Sorting an array
// const ninjas = [{ name: "Yoshi" }, { name: "Yagyu" }, { name: "Kuma" }];
// ninjas.sort(function (ninja1, ninja2) {
//   if (ninja1.name < ninja2.name) {
//     return -1;
//   }
//   if (ninja1.name > ninja2.name) {
//     return 1;
//   }
//   return 0;
// });

// if (ninjas[0].name === "Kuma") {
//   first = "Kuma is first";
// }
// if (ninjas[1].name === "Yagyu") {
//   first1 = "  Yagyu is second";
// }
// if (ninjas[2].name === "Yoshi") {
//   first2 = "Yoshi is third";
// }
//dottuka
//9.10 Finding array indexes
// const ninjas = ["Yagyu", "Yoshi", "Kuma", "Yoshi"];
// if (ninjas.indexOf("Yoshi") === 1) {
//   first = "Yoshi is at index 1";
// }
// if (ninjas.lastIndexOf("Yoshi") === 3) {
//   first1 = "  and at index 3";
// }
// const yoshiIndex = ninjas.findIndex((ninja) => ninja === "Yoshi");
// if (yoshiIndex === 1) {
//   first2 = " Yoshi is still at index 1";
// }
//dottuka
//9.9 Finding array Items
// const ninjas = [
//   { name: "Yagyu", weapon: "shuriken" },
//   { name: "Yoshi" },
//   { name: "Kuma", weapon: "wakizashi" },
// ];
// const ninjaWithWakizashi = ninjas.find((ninja) => {
//   return ninja.weapon === "wakizashi";
// });
// if (ninjaWithWakizashi.name === "Kuma" && ninjaWithWakizashi === "wakizashi") {
//   first = " Kuma is wielding a wakizashi";
// }
// const ninjaWithKatana = ninjas.find((ninja) => {
//   return ninja.weapon === "katana";
// });
// if (ninjaWithKatana === undefined) {
//   first1 = " We couldnt find a ninja that wields a katana";
// }
// const armedNinjas = ninjas.filter((ninja) => "weapon" in ninja);

// if (armedNinjas.length === 2) {
//   first2 = " There are two armed ninjas:";
// }
// if (armedNinjas[0].name === "Yagyu" && armedNinjas[1].name === "Kuma") {
//   result1 = " Yagyu and Kuma";
// }
//dottuka
//9.8 Testing arrays with the every and some methods
// const ninjas = [
//   { name: "Yagyu", weapon: "shuriken" },
//   { name: "Yoshi" },
//   { name: "Kuma", weapon: "wakizashi" },
// ];
// const allNinjasAreNamed = ninjas.every((ninja) => "name" in ninja);
// const allNinjasAreArmed = ninjas.every((ninja) => "weapon" in ninja);
// if (allNinjasAreNamed) {
//   first = "Every ninja has a name ";
// }
// if (!allNinjasAreArmed) {
//   first1 = " But not every ninja is armed";
// }
// const someNinjasAreArmed = ninjas.some((ninja) => "weapon" in ninja);
// if (someNinjasAreArmed) {
//   first2 = " But some ninjas are armed";
// }
//dottuka
//9.7 Mapping an array
// const ninjas = [
//   { name: "Yagyu", weapon: "shuriken" },
//   { name: "Yoshi", weapon: "katana" },
//   { name: "Kuma", weapon: "wakizashi" },
// ];
// const weapons = ninjas.map((ninja) => ninja.weapon);
// if (
//   weapons[0] === "shuriken" &&
//   weapons[1] === "katana" &&
//   weapons[2] === "wakizashi" &&
//   weapons.length === 3
// ) {
//   first = "the new array contains all weapons";
// }
//dottuka
//9.6Naive extraction of a weapons array
// const ninjas = [
//   { name: "Yagyu", weapon: "shuriken" },
//   { name: "Yoshi", weapon: "katana" },
//   { name: "Kuma", weapon: "wakizashi" },
// ];
// const weapons = [];
// ninjas.forEach((ninja) => {
//   weapons.push(ninja.weapon);
// });
// if (
//   weapons[0] === "shuriken" &&
//   weapons[1] === "katana" &&
//   weapons[2] === "wakizashi" &&
//   weapons.length === 3
// ) {
//   first = "the new array contains all weapons";
// }
//dottuka
//9.5 Using the forEach method
// ninjas.forEach((ninja) => {
//   if (ninja !== "") {
//     first = ninja;
//   }
// });
//dottuka
// const ninjas = ["yagyu", "kuma", "hattori"];
// for (let i = 0; i < ninjas.length; i++) {
//   if (ninjas[i] !== null) {
//     first = ninjas[i];
//   }
// }
//9.4 Removing and adding items at arbitrary positions
// const ninjas = ["Yagyu", "Kuma", "Hattori", "Fuma"];
// var removedItems = ninjas.splice(1, 1);
// if (removedItems.length === 1) {
//   first = "One item was removed";
// }
// if (removedItems[0] === "Kuma") {
//   first2 = "first element kuma";
// }
// if (ninjas.length === 3) {
//   first1 = "There are now three items in the array";
// }

// if (ninjas[0] === "Yagyu") {
//   result1 = "the first item is still Yagyu";
// }
// if (ninjas[1] === "Hattori") {
//   result2 = " Hattori is now the second element";
// }
// if (ninjas[2] === "Fuma") {
//   result3 = " and fuma is the third element";
// }
// removedItems = ninjas.splice(1, 2, "Mochizuki", "Yoshi", "Momochi");
// if (removedItems.length === 2) {
//   first = "Now we ve removed two items ";
// }
// if (removedItems[0] === "Hattori") {
//   first1 = " Hattori was removed";
// }
// if (removedItems[1] === "Fuma") {
//   first2 = " Fuma was removed";
// }

// if (ninjas.length === 4) {
//   result1 = " We ve inserted some new items ";
// }
// if (ninjas[0] === "Yagyu") {
//   result2 = " Yagyu is here";
// }
// if (ninjas[1] === "Mochizuki") {
//   result3 = " also Mochizuki";
// }
// if (ninjas[2] === "Yoshi") {
//   result4 = " also Yoshi";
// }
// if (ninjas[3] === "Momochi") {
//   result5 = " also Momochi";
// }
//dottuka
//9.3 Naive way to remove an array item
// const ninjas = ["Yagyu", "Kuma", "Hattori", "Fuma"];
// delete ninjas[1];
// if (ninjas.length === 4) {
//   first = " Length still reports there are 4 items";
// }
// if (ninjas[0] === "Yagyu") {
//   first1 = "First item is Yagyu";
// }

// if (ninjas[1] === undefined) {
//   first2 = " We ve simply created hole";
// }
// if (ninjas[2] === "Hattori") {
//   result1 = "Hattori still the third element";
// }
// if (ninjas[3] === "Fuma") {
//   result2 = " And fuma still the last element";
// }
//dottuka
//9.2 Adding and removing array items
// const ninjas = [];
// if (ninjas.length === 0) {
//   first = "An array starts empty";
// }
// ninjas.push("Kuma");
// if (ninjas[0] === "Kuma") {
//   first1 = "Kuma is the first item in the array";
// }
// if (ninjas.length === 1) {
//   first2 = "We have one item in the array";
// }
// ninjas.push("Hattori");
// if (ninjas[0] === "Kuma") {
//   first = "Kuma is still first";
// }
// if (ninjas[1] === "Hattori") {
//   first1 = "Hattori is added to the ende of the array";
// }
// if (ninjas.length === 2) {
//   first2 = "We have two items in the array!";
// }
// ninjas.unshift("Yagyu");
// if (ninjas[0] === "Yagyu") {
//   first = " Now Yagyu is the first item";
// }
// if (ninjas[1] === "Kuma") {
//   first1 = " Kuma moved to the second place";
// }
// if (ninjas[2] === "Hattori") {
//   first2 = "And Hattori to the third place";
// }
// if (ninjas.length === 3) {
//   result1 = " We have three items in the array!";
// }
// const lastNinja = ninjas.pop();
// if (lastNinja === "Hattori") {
//   first = " We have removed Hattori from the end of the array";
// }
// if (ninjas[0] === "Yagyu") {
//   first1 = " Now Yagyu is still the first item";
// }
// if (ninjas[1] === "Kuma") {
//   first2 = " Kuma is still in second place";
// }
// if (ninjas.length === 2) {
//   result1 = " Now there are two items in the array!";
// }
// const firstNinja = ninjas.shift();
// if (firstNinja === "Yagyu") {
//   first = " We ve removed Yagyu from the beginning of the array";
// }
// if (ninjas[0] === "Kuma") {
//   first1 = " Kuma has shifted to the first place";
// }
// if (ninjas.length === 1) {
//   result1 = " Now there is only one item in the array!";
// }
//dottuka
//9.1 Creating arrays
// const ninjas = ["Kuma", "Hattori", "Yagyu"];
// const samurai = new Array("Oda", "Tomoe");
// if (ninjas.length === 3) {
//   first = "There are three ninjas";
// }
// if (samurai.length === 2) {
//   first1 = "And only two samurai";
// }
// if (ninjas[0] === "Kuma") {
//   first2 = "Kuma is the first ninja";
// }
// if (samurai[samurai.length - 1] === "Tomoe") {
//   result1 = "Tomoe is the last samurai";
// }
// if (ninjas[4] === undefined) {
//   result2 = "We get undefined if we try to access an out of bounds index";
//   ninjas[4] = "Ishi";
// }
// if (ninjas.length === 5) {
//   result3 = "Arrays are automatically expanded";
// }
// ninjas.length = 2;
// if (ninjas.length === 2) {
//   result4 = "There are only two ninjas now";
// }
// if (ninjas[0] === "Kuma" && ninjas[1] === "Hattori") {
//   result5 = "Kuma and Hattori";
// }
// if (ninjas[2] === undefined) {
//   result6 = "But we've lost Yagyu";
// }
//dottuka
//9. Dealing with collections page:224
//7.15 Inheritance in ES6
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   dance() {
//     return true;
//   }
// }
// class Ninja extends Person {
//   constructor(name, weapon) {
//     super(name);
//     this.weapon = weapon;
//   }
//   wieldWeapon() {
//     return true;
//   }
// }
// var person = new Person("Bob");
// if (person instanceof Person) {
//   first = " A person is a Person ";
// }
// if (person.dance()) {
//   first1 = " A person can dance ";
// }
// if (person.name === "Bob") {
//   first2 = " We can call it by name ";
// }
// if (!(person instanceof Ninja)) {
//   result1 = " But it s not a ninja ";
// }
// if (!("wieldWeapon" in person)) {
//   result2 = " And it cannot wield a weapon";
// }

// var ninja = new Ninja("Yoshi", "Wakizashi");
// if (ninja instanceof Ninja) {
//   result3 = " A ninja is a Ninja ";
// }
// if (ninja.wieldWeapon()) {
//   result4 = " That can wield a weapon";
// }
// if (ninja instanceof Person) {
//   result5 = " But it is also a person";
// }
// if (ninja.name === "Yoshi") {
//   result6 = " That has a name";
// }
// if (ninja.dance()) {
//   result7 = " And enjoys dancing!";
// }
//dottuka
//7.14 Static methods in ES6
// class Ninja {
//   constructor(name, level) {
//     this.name = name;
//     this.level = level;
//   }
//   swingSword() {
//     return true;
//   }
//   static compare(ninja1, ninja2) {
//     return ninja1.level - ninja2.level;
//   }
// }
// var ninja1 = new Ninja("Yoshi", 4);
// var ninja2 = new Ninja("Hattori", 3);

// if (!("compare" in ninja1) && !("compare" in ninja2)) {
//   first = " A ninja instance doesnt know how to compare ";
// }

// if (Ninja.compare(ninja1, ninja2) > 0) {
//   first1 = " The Ninja class can do the comparison! ";
// }
// if (!("swingSword" in Ninja)) {
//   first2 = " The Ninja class cannot swing a sword! ";
// }
//dottuka
//7.13 Creating a class in ES6
// class Ninja {
//   constructor(name) {
//     this.name = name;
//   }
//   swingSword() {
//     return true;
//   }
// }
// var ninja = new Ninja("Yoshi");
// if (ninja instanceof Ninja) {
//   first = "our ninja is a Ninja";
// }
// if (ninja.name === "Yoshi") {
//   first1 = " named Yoshi";
// }
// if (ninja.swingSword()) {
//   first2 = " and he can swing a sword.";
// }
//dottuka
//7.12 Watch out for changes to constructor prototypes
// function Ninja() {}
// const ninja = new Ninja();
// if (ninja instanceof Ninja) {
//   first = "our ninja is Ninja";
// }
// Ninja.prototype = {};
// if (!(ninja instanceof Ninja)) {
//   first1 = "the ninja is now not a ninja!??";
// }

//dottuka
//7.11 Studying the instanceof operator
// function Person() {}
// function Ninja() {}
// Ninja.prototype = new Person();
// const ninja = new Ninja();

// if (ninja instanceof Ninja) {
//   first = " our ninja is a Ninja!";
// }
// if (ninja instanceof Person) {
//   first1 = "A ninja is also a Person.";
// }

//dottuka
//7.10 Fixing the constructor property problem
// function Person() {}
// Person.prototype.dance = function () {};
// function Ninja() {}
// Ninja.prototype = new Person();

// Object.defineProperty(Ninja.prototype, "constructor", {
//   enumerable: false,
//   value: Ninja,
//   writable: true,
// });
// var ninja = new Ninja();
// if (ninja.constructor === Ninja) {
//   first = "Connection from ninja instances to Ninja constructor reestablished!";
// }
// for (let prop in Ninja.prototype) {
//   if (prop === "dance") {
//     first1 = "The only enumerable property is dance!";
//   }
// }

//dottuka
//7.9 Configuring properties
// let ninja = {};
// ninja.name = "Yoshi";
// ninja.weapon = "kusarigama";

// Object.defineProperty(ninja, "sneaky", {
//   configurable: false,
//   enumerable: false,
//   value: true,
//   writable: true,
// });
// if ("sneaky" in ninja) {
//   first = "we can access the new property";
// }
// for (let prop in ninja) {
//   if (prop !== undefined) {
//     first1 = "an enumerated property: " + prop;
//   }
// }
//dottuka
//7.8 Achieving inheritance with prototypes
// function Person() {}
// Person.prototype.dance = function () {};
// function Ninja() {}
// Ninja.prototype = new Person();
// const ninja = new Ninja();
// if (ninja instanceof Ninja) {
//   first = "ninja receives functionality from the ninja prototype";
// }
// if (ninja instanceof Person) {
//   first1 = "ninja receives functionality from the person prototype";
// }
// if (ninja instanceof Object) {
//   first2 = "ninja receives functionality from the object prototype";
// }
// if (typeof ninja.dance === "function") {
//   result1 = "ninja receives functionality from the function, and can dance";
// }
//dottuka
//7.3 Achieving inheritance
//7.7 Trying to achieve inheritance with prototypes
// function Person() {}
// Person.prototype.dance = function () {};
// function Ninja() {}
// Ninja.prototype = { dance: Person.prototype.dance };
// const ninja = new Ninja();
// if (ninja instanceof Ninja) {
//   first = "ninja receives functionality from the ninja prototype";
// }
// if (ninja instanceof Person) {
//   first1 = "ninja receives functionality from the person prototype";
// }
// if (ninja instanceof Object) {
//   first2 = "ninja receives functionality from the object prototype";
// }
//dottuka
//7.6 Instantiating a new object using a reference to a constructor
// function Ninja() {}
// const ninja = new Ninja();
// const ninja2 = new Ninja.constructor();

// if (ninja2 instanceof Ninja) {
//   first = "instanceof identifies the constructor, it s a Ninja";
// }
// if (ninja !== ninja2) {
//   first1 = "But not the same Ninja";
// }
//dottuka
//7.5 Examining the type of an instance and its constructor page. 180
// function Ninja() {}
// const ninja = new Ninja();
// if (typeof ninja === "object") {
//   first = "The type of the instance is object";
// }
// if (typeof ninja instanceof Ninja) {
//   first1 = "instanceof identifies the constructor";
// }
// if (ninja.constructor === Ninja) {
//   first2 = "The ninja object was created by the Ninja function";
// }
//dottuka
//7.4 With prototypes, everything can be changed at runtime
// function Ninja() {
//   this.swung = true;
// }
// const ninja1 = new Ninja();
// Ninja.prototype.swingSword = function () {
//   return this.swung;
// };
// if (ninja1.swingSword()) {
//   first = "Method exists, even out of order";
// }
// Ninja.prototype = {
//   pierce: function () {
//     return true;
//   },
// };
// if (ninja1.swingSword()) {
//   first1 = "Our ninja can still swing!";
// }
// const ninja2 = new Ninja();
// if (ninja2.pierce()) {
//   first2 = " Newly created ninjas can pierce";
// }
// if (!ninja2.swingSword) {
//   result1 = " But they cannot swing!";
// }
//dottuka
//7.3 Observing the precedence of initializing activites
// function Ninja() {
//   this.swung = false;
//   this.swingSword = function () {
//     return !this.swung;
//   };
// }
// Ninja.prototype.swingSword = function () {
//   return this.swung;
// };
// const ninja = new Ninja();
// if (ninja.swingSword()) {
//   first = "called the instance method, not the prototype method";
// }

//dottuka
//7.2 creating a new instance with a prototyped method
// function Ninja() {
//   Ninja.prototype.swingSword = function () {
//     return true;
//   };
// }
// const ninja1 = Ninja();
// if (ninja1 === undefined) {
//   first = "No instance of Ninja created";
// }

// const ninja2 = new Ninja();
// if (ninja2 && ninja2.swingSword && ninja2.swingSword()) {
//   first1 = "instance exists and method is callable";
// }
//dottuka
//7.1 Understanding prototypes
// const yoshi = { skulk: true };
// const hattori = { sneak: true };
// const kuma = { creep: true };
// if ("skulk" in yoshi) {
//   first = "yoshi can skulk";
// }
// if (!("sneak" in yoshi)) {
//   first1 = "yoshi cannot sneak";
// }
// if (!("creep" in yoshi)) {
//   first2 = "yoshi cannot creep";
// }
// Object.setPrototypeOf(yoshi, hattori);
// if ("sneak" in yoshi) {
//   result1 = "yoshi can now sneak";
// }
// if (!("creep" in hattori)) {
//   result2 = "hattori cannot creep";
// }
// Object.setPrototypeOf(hattori, kuma);
// if ("creep" in hattori) {
//   result3 = "hattori can now creep";
// }
// if (!("creep" in yoshi)) {
//   result4 = "yoshi can also creep";
// }

//dottuka
//6.5 summary
//dottuka
//6.4 combining generators and promises
//dottuka
// 6.3.6 waiting for a number of promises
//dottuka
//6.3.5 chaining promises
//dottuka
//6.3.4 creating our first real-world promise
//dottuka
//6.3.3 rejecting promises
//dottuka
//6.3.2 Diving into promises page. 149
// report("at code start");

// var ninjaDelayedPromise = new Promise((resolve, reject) => {
// report("ninjaDelayedPromise executor");
// setTimeout(() => {
// report("Resolving ninjadelayedpromise");
//     resolve("Hattori");
//   }, 500);
// });
// if (ninjaDelayedPromise !== null) {
//   first = "after creating ninjadelayedpromies";
// }
// ninjaDelayedPromise.then((ninja) => {
//   if (ninja === "Hattori") {
//     first1 = "ninjadelayedpromise resolve handled with hattori";
//   }
// });
// const ninjaImmediatePromise = new Promise((resolve, reject) => {
// report("ninjaImmedatiatePromise executore. Immediate resolve");
//   resolve("Yoshi");
// });
// ninjaImmediatePromise.then((ninja) => {
//   if (ninja === "yoshi") {
//     first2 = "ninjaimmediate promise resolve handled with yoshi";
//   }
// });
// report("at code end");
//dottuka
//6.3 Working with promisses 6.10 Creating a simple promise
// const ninjaPromise = new Promise((resolve, reject) => {
//   resolve("Hattori");
//   //reject("An error resolving a promise!")
// });
// ninjaPromise.then((ninja) => {
//   if (ninja === "Hattori") {
//     first = "we were promised hattori!";
//   } else {
//     (err) => {
//       //  fail("there shouldtn be error");
//     };
//   }
// });
//dottuka
//Tracking generators with execution contexts
// function* NinjaGenerator(action) {
//   yield "Hattori" + action;
//   return "Yoshi" + action;
// }
// const ninjaIterator = NinjaGenerator("skulk");
// result1 = ninjaIterator.next();
// result2 = ninjaIterator.next();
//dottuka
//6.9 Throwing exceptions to generators
// function* NinjaGenerator() {
//   try {
//     yield "Hattori";
//     fail("the expected exception didnt occur");
//   } catch (e) {
//     if (e === "Catch this!") {
//       first = "Aha! we caught an exception";
//     }
//   }
// }
// const ninjaIterator = NinjaGenerator();
// const result1 = ninjaIterator.next();
// if (result1.value === "Hattori") {
//   first1 = "we got Hattori";
// }
// ninjaIterator.throw("Catch this");

//dottuka
//6.8 Sending data to and receiving data from a generator
// function* ninjaGenerator(action) {
//   const imposter = yield "Hatori" + action;
//   if (imposter === "Hanzo") {
//     first = "The generator has been infiltrated";
//   }
//   yield "Yoshi (" + imposter + ")" + action;
// }
// const ninjaIterator = ninjaGenerator("skulk");
// const result1 = ninjaIterator.next();
// if (result1.value === "Hattori skulk") {
//   first1 = "Hatori is skulking";
// }
// const result2 = ninjaIterator.next("Hanzo");
// if (result2.value === "Yoshi (Hanzo) skulk") {
//   first2 = "we have an imposter";
// }
//dottuka
//6.7 Iterating over a DOM tree with generators
// function* DomTraversal(element) {
//   yield element;
//   element = element.firstElementChild;
//   while (element) {
//     yield* DomTraversal(element);
//     element = element.nextElementSiblind;
//   }
// }
// const subTree = document.getElementById("subTree");
// for (let element of DomTraversal(subTree)) {
//   if (element !== null) {
//     first = element.nodeName;
//   }
// }
//dottuka
//6.6 Recursive DOM traversal
/* <div id="subTree">
  <form>
    <input type="text"/>
  </form>
  <p>Paragraph</p>
  <span>Span</span>
</div>
<script>
  function traverseDOM(element, callBack){
    callBack(element);
    element=element.firstElementChild;
    while(element){
      traverseDOM(element,callBack);
      element=element.nexteElementSibling
    }
  }
  const subTree=document.getElementById("subTree");
  traverseDOM(subTree, function(element){
    if(element !==null){
      first=element.nodeName
    }
  })
</script> */
//dottuka
//6.5 Using generators for generating IDs
// function* IdGenerator() {
//   let id = 0;
//   while (true) {
//     yield ++id;
//   }
// }
// const idIterator = IdGenerator();
// const ninja1 = { id: idIterator.next().value };
// const ninja2 = { id: idIterator.next().value };
// const ninja3 = { id: idIterator.next().value };
// if (ninja1.id === 1) {
//   first = "first ninja has id1";
// }
// if (ninja2.id === 2) {
//   first1 = "second ninja has id2";
// }
// if (ninja3.id === 3) {
//   first2 = "third ninja has id3";
// }
//dottuka
//6.4 Using yield* to delegate to another generator
// function* warriorGenerator() {
//   yield "sun tzu";
//   yield* NinjaGenerator();
//   yield "Genghis khan";
// }
// function* NinjaGenerator() {
//   yield "Hattori";
//   yield "Yoshi";
// }
// for (let warrior of warriorGenerator()) {
//   if (warrior !== null) {
//     first = warrior;
//   }
// }
//dottuka
//6.3 Iterating over g enerator results with a while loop
// function* WeaponGenerator() {
//   yield "Katana";
//   yield "Wakizashi";
// }
// const weaponsIterator = WeaponGenerator();
// let item;
// while (!(item = weaponsIterator.next()).done) {
//   if (item !== null) {
//     first = item.value;
//   }
// }
//dottuka
//6.2.1 Controlling a generator through an iterator object
// function* WeaponGenerator() {
//   yield "Katana";
//   yield "Wakizashi";
// }
// const weaponIterator = WeaponGenerator();
// const result1 = weaponIterator.next();
// if (
//   typeof result1 === "object" &&
//   result1.value === "Katana" &&
//   !result1.done
// ) {
//   first = "Katana received!";
// }
// const result2 = weaponIterator.next();
// if (
//   typeof result2 === "object" &&
//   result2.value === "Wakizashi" &&
//   !result2.done
// ) {
//   first1 = "Wakizashi received!";
// }
// const result3 = weaponIterator.next();
// if (
//   typeof result3 === "object" &&
//   result3.value === undefined &&
//   !result3.done
// ) {
//   first2 = "there are no more results!";
// }
//dottuka
//6.2 Working with generator functions
// function* WeaponGenerator() {
//   yield "katana";
//   yield "Wakizashi";
//   yield " Kusarigama";
// }
// for (let weapon of WeaponGenerator()) {
//   if (weapon !== undefined) {
//     first = weapon;
//   }
// }
//dottuka
//asynccode
//async(function*(){
// try{
//   var ninjas = syncGetJSON("ninjas.json");
//   var missions = syncGetJSON(ninjas[0].missionsUrl)
//   var missionDetails = syncGetJSON(missions[0].detailUrl)
// }
// catch (e){
// }
//})
//dottuka
//same chapter head
// getJSON("ninjas.json", function(err, ninjas){
//   if(err){console.log("error fetching list of ninjas", err)
// return
// }
// getJSON(ninjas[0].missionsUrl, function(err, missions){
//   if(err){console.log("error locating ninja missions", err)
// return
// }
// getJSON(missions[0].detailsUrl, function(err, missionDetails){
//   if(err){console.log("error locating mission details", err)
// return
// }
// }
//dottuka
//6.1 Making our async code elegant with generators and promises
// try{
//   var ninjas = syncGetJSON("ninjas.json");
//   var missions = syncGetJSON(ninjas[0].missionsUrl)
//   var missionDetails = syncGetJSON(missions[0].detailUrl)
// }
// catch (e){

// }
//dottuka
//5.13 Using a closure in a timer interval callback
/* <div id="box1">First Box</div>
<div id="box2">Second Box</div>
<script>
  {animateIt("box1")}
  {animateIt("box2")}
  {first}
  {first1}
  {first2}      </script>
 */
//function animateIt(elementId) {
//   var elem = document.getElementById(elementId);
//   var tick = 0;
//   var timer = setInterval(function() {
//     if (tick < 100) {
//       elem.style.left ? elem.style.top : tick + "px";
//       tick++;
//     } else {
//       clearInterval(timer);
//       if (tick === 100) {
//         first = "tick accesed via closure";
//       }
//       if (elem) {
//         first1 = "element also accessed via a closure";
//       }
//       if (timer) {
//         first2 = "Timer reference also obtanied via a closure";
//       }
//     }
//   });
// }
//dottuka
//5.12 Private variables are accessed through functions not through objects
// function Ninja() {
//   var feints = 0;
//   this.getFeints = function() {
//     return feints;
//   };
//   this.feint = function() {
//     feints++;
//   };
// }
// var ninja1 = new Ninja();
// ninja1.feint();
// var imposter = {};
// imposter.getFeints = ninja1.getFeints;
// if (imposter.getFeints() === 1) {
//   first = "The imposter has access to the feints variable";
// }

//dottuka
//5.11 Approximate private variables with closures
// function Ninja() {
//   var feints = 0;
//   this.getFeints = function() {
//     return feints;
//   };
//   this.feint = function() {
//     feints++;
//   };
// }
// var ninja1 = new Ninja();
// if (ninja1.feints === undefined) {
//   first = "And the private data is inaccesible to us";
// }
// ninja1.feint();
// if (ninja1.getFeints() === 1) {
//   first1 = "we re able to access the internal feint count";
// }
// var ninja2 = new Ninja();
// if (ninja2.getFeints() === 0) {
//   first2 = "the second ninja object gets its own feints variable";
// }

//dottuka
// Accesing a functon before its declaration
// if (typeof fun === "function") {
//   first = "fun is za function even though its definition isnt reached yet";
// }
// if (typeof myFunExp === undefined) {
//   first1 = "but we cannot acces function expressions";
// }
// if (typeof myArrow === "undefined") {
//   first2 = "Nor arrow functions";
// }
// function fun() {}
// var myFunExp = function() {};
// var myArrow = x => x;

//dottuka
//5.5.3 Registering identifiers within lexical environments str. 113
// const firstRonin = "Kiyokawa";
// check(firstRonin);
// function check(ronin) {
//   if (ronin === "Kiyokawa") {
//     first = "the ronin was checked";
//   }
// }

//dottuka
//5.8 using const and let
// let first;
// let first1;
// let first2;
// let first3;
// const GLOBAL_NINJA = "yoshi";
// function reportActivity() {
//   const functionActivity = "jumping";
//   for (let i = 1; i < 3; i++) {
//     let forMessage = GLOBAL_NINJA + "" + functionActivity;
//     if (forMessage === "Yoshi jumping") {
//       first = "Yoshi is jumping within the block";
//     }
//     if (i) {
//       first1 = " Current loop counter:" + i;
//     }
//     if (
//       typeof functionActivity === undefined &&
//       typeof forMessage === undefined
//     ) {
//       first2 = "Loop variables not accesible outside the loop";
//     }
//   }
// }
// if (
//   typeof functionActivity === undefined &&
//   typeof i === undefined &&
//   typeof forMessage === undefined
// ) {
//   first3 = "we cannot see outside a function";
// }
// reportActivity();
//dottuka
//5.5.2 Variable definition keywords and lexical environments
// let first;
// let first1;
// let first2;
// let first4;
// let forMessage;
// var globalNinja = "Yoshi";
// function reportActivity() {
//   var functionActivity = "jumping";
//   for (var i = 1; i < 3; i++) {
//     var forMessage = globalNinja + "" + functionActivity;
//     if (forMessage === "Yoshi jumping") {
//       first = "Yoshi is jumping within the for block";
//     }
//     if (i) {
//       first1 = "Current loop counter:" + i;
//     }
//     if (i === 3 && forMessage === "Yoshi jumping") {
//       first2 = "Loop variables accessible outside of the loop";
//     }
//   }
// }
// reportActivity();
// if (
//   typeof functionActivity === undefined &&
//   typeof i === undefined &&
//   typeof forMessage === undefined
// ) {
//   first4 = "we cannot see the function variables outside of a function";
// }
//dottuka
//5.5 Understanding types of JavaScript variables
// const firstConst = " samurai";
// if (firstConst === " samurai") {
//   first = "firstConst is a samurai";
// }
//dottuka
//code nesting and lexical environments
// var ninja = "Muneyoshi";
// function skulk() {
//   var action = "skulking";
//   function report() {
//     var intro = "Aha!";
//     if (intro === "Aha!") {
//       ninja2 = "local";
//     }
//     if (action === "skulking") {
//       ninja3 = "outer";
//     }
//     if (ninja === "Muneyoshi") {
//       ninja1 = "global";
//     }
//   }
//   report();
// }
// skulk();
//dottuka
//5.4 Keeping track of identifiers with lexical environments str: 103
// var ninja = "Muneyoshi";
// function skulk() {
//   var action = "skulking";
//   function report() {
//     var reportNum = 3;
//     for (var i = 0; i < reportNum; i++) {
//       console.log((ninja1 = ninja + "" + action + " " + i));
//     }
//   }
//   report();
// }
// skulk();
//dottuka
//5.3 Tracking code execution with execution contexts
// function skulk(ninja) {
//   return ninja + "skulking";
// }
// function back(message) {
//   console.log(message);
// }
// skulk("ninja");
// skulk("yoshi");
//dottuka
//5.2.2 Using closures with callbacks

//dottuka
//5.2.1 Mimicking private variables
// function Ninja() {
//   var feints = 0;
//   this.getFeints = function() {
//     return feints;
//   };
//   this.feint = function() {
//     feints++;
//   };
// }
// var ninja1 = new Ninja();
// ninja1.feint();

// if (ninja1.feints === undefined) {
//   ninja1 = "And the private data is inaccessible to us";
// }
// if (ninja1.getFeints === 1) {
//   ninja1 = "We re able to access the internal feint count";
// }
// var ninja2 = new Ninja();
// if (ninja2.getFeints === 0) {
//   ninja2 = "The second ninja object gets its own feints variable";
// }

//dottuka
//5.2 Putting closures to work
//dottuka
// 5.2 Another closure example
// var outerValue = "samurai";
// var later;
// let p;
// let q;
// function outerFunction() {
//   var innerValue = "ninja";
//   function innerFunction() {
//     if (outerValue === "samurai") {
//       p = "i can see the samurai";
//     }
//     if (innerValue === "ninja") {
//       q = "i can see the ninja";
//     }
//     later = innerFunction;
//   }
// }
// outerFunction();
// innerFunction();
//dottuka
//5.1 Understanding closured str. 92..... A simple closure
// var outerValue = "ninja";
// let p;
// function outerFunction() {
//   if (outerValue === "ninja") {
//     p = "i can see the ninja";
//   }
// }
// outerFunction();
//dottuka
// 4.3.1 using arrow functions to get around function contexts
// function Button() {
//   this.clicked = false;
//   this.click = () => {
//     this.clicked = true;
//     // if (Button.clicked) {
//     click = "the button was clicked";
//     // }
//   };
//   var button = new Button();
//   var elem = document.getElementById("test");
//   elem.addEventListener("click", button.click);
// }
//dottuka
//od pocheten div
/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
// dottuka
// zbir na lista od argumenti
// function sum() {
// 	let sum = 0;
// 	for (let i = 0; i < arguments.length; i++) {
// 		sum += arguments[i];
// 	}
// 	return sum;
// }
// // if (sum(1, 2) === 2) {
// // 	sum = "we can add two numbers";
// // }
// // if (sum(1, 2, 3) === 6) {
// // 	sum = "we can add three numbers";
// // }
// if (sum(1, 2, 3, 4) === 10) {
// 	sum = "we can add four numbers";
// }
//dottuka
//changing the first argument in the function
// function infiltrate(person) {
// 	let num;
// 	if (person === "gardener") {
// 		num = "The person is gardener";
// 	}
// 	if (arguments[0] === "gardener") {
// 		num = "The first argument is gardener";
// 	}
// 	arguments[0] = "ninja";
// 	if (person === "ninja") {
// 		num = "The person is ninja now";
// 	}
// 	if (arguments[0] === "ninja") {
// 		num = "The first argument is a ninja";
// 	}
// 	person = "gardener";
// 	if (person === "gardener") {
// 		num = "The person is a gardener once more";
// 	}
// 	if (arguments[0] === "gardener") {
// 		num = "The first argument is a gardener again";
// 	}
// }
//dottuka
//tuka treba exercise za aliasing function parameters through strict mode(to avoid aliasing) ES5 stranica 66.
// the differences between function and method invocations strana 70
// function whatsMyContext() {
// 	return this;
// }
// let sum;
// if (whatsMyContext() === window) {
// 	sum = "Function call on window";
// }
// var getMyThis = whatsMyContext;
// if (getMyThis() === window) {
// 	sum = "Another function in call";
// }
// var ninja1 = {
// 	getMyThis: whatsMyContext
// };
// if (ninja1.getMyThis() === ninja1) {
// 	sum = "working with 1st ninja";
// }
// var ninja2 = {
// 	getMyThis: whatsMyContext
// };
// if (ninja2.getMyThis() === ninja2) {
// 	sum = "working with 2nd ninja";
// }
//dottuka
//4.2.3 Invocation as a constructor
// function Ninja() {
// 	this.skulk = function() {
// 		return this;
// 	};
// }
// var ninja1 = new Ninja();
// var ninja2 = new Ninja();
// let sum;
// if (ninja1.skulk() === ninja1) {
// 	sum = "the 1st ninja is sulking";
// }
// let sum1;
// if (ninja2.skulk() === ninja2) {
// 	sum = "the 2st ninja is sulking";
// }
//dottuka
//constructor return values 4.8 str 74
// function Ninja() {
// 	this.skulk = function() {
// 		return true;
// 	};
// 	return 1;
// }
// let sum, sum1, sum2;
// if (Ninja === 1) {
// 	sum2 = "Return value honored when not called as a constructor";
// }
// var ninja = new Ninja();
// if (typeof ninja === "object") {
// 	sum = "Object returned when called as a constructor";
// }
// if (typeof ninja.skulk === "function") {
// 	sum1 = " ninja object has a skulk method";
// }
//dottuka
//Constructors explicitly returning object values 4.9 str 75
// let sum, sum1;
// let puppet = {
// 	rules: false
// };
// function Emperor() {
// 	this.rules = true;
// 	return puppet;
// }
// var emperor = new Emperor();
// if (emperor === puppet) {
// 	sum = "The emperor is merely a puppet";
// }
// if (emperor.rules === false) {
// 	sum1 = "The puppet does not know how to rule!";
// }
//dottuka
//Binding a specific context to a function 4.10 str 77
/* <button
id="test"
onClick={function Button() {
  this.clicked = false;
  this.click = function() {
    this.clicked = true;
    let sum, button;

    if (button.clicked) {
      sum = "the button has been clicked";
    }
  };
}}
>
Click Me !
</button>
;<script></script> */
// var button = new Button();
// var elem = document.getElementById("test");
// elem.addEventListener("click", button.click);
//dottuka
//Using the apply and call methods to supply the function context 4.11 str 79
// function juggle() {
// 	var result = 0;
// 	for (let n = 0; n <= arguments.length; n++) {
// 		result += arguments[n];
// 	}
// 	this.result = result;
// }
// var ninja1 = {};
// var ninja2 = {};
// let sum, sum1;
// juggle.apply(ninja1, [1, 2, 3, 4]);
// console.log(ninja1, "sad");
// juggle.call(ninja2, 5, 6, 7, 8);
// console.log(ninja2, "dva");

// if (ninja1.result === 10) {
// 	sum = "juggled via apply";
// }
// if (ninja2.result === 26) {
// 	sum1 = "juggled via call";
// }
//dottuka
//Building a forEach function to demonstrate setting a function context
// function forEach(list, callback) {
// 	for (let n = 0; n < list.length; n++) {
// 		callback.call(list[n], n);
// 	}
// }
// let sum;
// var weapons = [{ type: "shuriken" }, { type: "katana" }, { type: "nunchucks" }];
// forEach(weapons, function(index) {
// 	if (this === weapons[index]) {
// 		sum = "Got the expected value of " + weapons[index].type;
// 	}
// });
//dottuka - proveri ushte ednash posleden primer
// 4.3 Fixing the problem of function contexts str 83

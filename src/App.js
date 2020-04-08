import React from "react";
import "./App.css";
let first;
let first1;
let first2;
let result1;
let result2;
let result3;
let result4;

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
    </div>
  );
}

export default App;
//7.5 Examining the type of an instance and its constructor page. 180
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

import React from "react";
import "./App.css";
let first;
let first1;
let first2;

function App() {
  return <div className="App"></div>;
}

export default App;
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

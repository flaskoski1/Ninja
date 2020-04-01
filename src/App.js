import React from "react";
import logo from "./logo.svg";
import "./App.css";
import callBack from "../src/callBack";

function App() {
  return <div className="App"></div>;
}

export default App;
//5.4 Keeping track of identifiers with lexical environments str: 103
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

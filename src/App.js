import React from "react";
import logo from "./logo.svg";
import "./App.css";
import callBack from "../src/callBack";

function App() {
	return <div className="App"></div>;
}

export default App;
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

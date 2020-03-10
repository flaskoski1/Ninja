const callBack = () => {
	var text = "Domo arigato!";
	console.log("before defining functionts");

	function useless(ninjaCallback) {
		console.log("in useless function");
		return ninjaCallback();
	}
	function getText() {
		console.log("In getText function");
		return text;
	}
	console.log("before making all the calls");
	if ((useless(getText) === text, "the useless function works" + text));
	console.log("after the calls have been made");
};
// Memorizing previosly computed values
// function isPrime(value) {
//     if (!isPrime.answers) {
//         isPrime.answers = {};
//     }
//     if (isPrime.answers[value] !== undefined) {
//         return isPrime.answers[value];
//     }

//     var prime = value !== 1;
//     for (var i = 2; i < value; i++) {
//         if (value % i === 0) {
//             prime = false;
//             break;
//         }
//     }
//     return (isPrime.answers[value] = prime);
// }
// console.log(isPrime(5), "5 is prime");
// console.log(isPrime.answers[5], "5 is cached");
//Storing functions
// var store = {
//     nextId: "1",
//     cache: {},
//     add: function(fn) {
//         if (!fn.id) {
//             fn.id = this.nextId++;
//             this.cache[fn.id] = fn;
//             return true;
//         }
//     }
// };
// function ninja() {
//     if (store.add(ninja) === true) {
//         console.log("Function was safely added");
//         console.log(store.add(ninja));
//     } else {
//         console.log("But it was only added once");
//     }
//     // if ((!store.add(ninja), console.log("But it was only added once")));
// }
//objects elems
// var ninjaArray = 0;
// var ninja = { a: "a" };
// // ninjaArray.push({ b: "b" });
// ninja.data = {};
// console.log(ninja, "ninja");
//console.log timer
// console.time("My operation");
// let maxCount = null;
// for (var n = 0; n < maxCount; n++) {
// 	return n;
// }
// console.timeEnd("My operation");
//sortiranje niza
// let val = 0;
// var values = ["0", "3", "2", "5", "7", "4", "8", "1"];
// values.sort(function(value1, value2) {
// 	return (val = value1 - value2);
// });
// console.log(val, "val");

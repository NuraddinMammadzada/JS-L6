let a = +prompt("Ani daxil et:");

let b = +prompt("Bni daxil et:");

let c = prompt("Cni daxil et:");

// if (c == "*") {
//     alert(a * b)
// }
// else if (c == "-") {
//     alert(a - b)
// }
// if (c == "+") {
//     alert(a + b)
// }
// else if (c == "/") {
//     alert(a / b)
// };
alert((c == "*") ? alert(a * b) : (c == "+") ? alert(a + b) : (c == "-") ? alert(a - b) : (c == "/") ? alert(a / b) : alert("Tema kutardi"))

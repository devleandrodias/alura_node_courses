// Var, Let, Const

var height = 5;
var width = 10;

area = height * width;
console.log(area);
var area;

let shape = "retangle";

let height2 = 5;
let width2 = 10;
let area2;

if (shape == "retangle") {
  area2 = height2 * width2;
} else {
  area2 = (height2 * width2) / 2;
}

console.log(area2);

const height3 = 5;
const width3 = 10;
let area3;

if (shape == "retangle") {
  area3 = height3 * width3;
} else {
  area3 = (height3 * width3) / 2;
}

console.log(area3);

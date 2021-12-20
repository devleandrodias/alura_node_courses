const javascriptRoom = [7, 8, 8, 4, 9, 8, 4];
const pythonRoom = [5, 8, 9, 7, 6];
const golangRoom = [3, 7, 8, 9, 4, 5];

const getAverage = (grades) => {
  return Number(
    (grades.reduce((pv, cv) => pv + cv) / grades.length).toFixed(2)
  );
};

const javascriptRoomAverage = getAverage(javascriptRoom);
const pythonRoomAverage = getAverage(pythonRoom);
const golangRoomAverage = getAverage(golangRoom);

console.log(`JavaScript Room: ${javascriptRoomAverage}`);
console.log(`Python Room: ${pythonRoomAverage}`);
console.log(`GoLang Room: ${golangRoomAverage}`);

const globalRoomsAverage = [
  javascriptRoomAverage,
  pythonRoomAverage,
  golangRoomAverage,
];

const globalAverage = Number(
  globalRoomsAverage.reduce((pv, cv) => pv + cv, 0) / globalRoomsAverage.length
).toFixed(2);

console.log(`Global Average: ${globalAverage}`);

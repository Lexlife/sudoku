function stringToArr(string) {

  let b = string.split("");
  // console.log(b);
  const arr = [];
  for (i = 0; i < b.length; i += 9) {
    arr.push(b.slice(i, i + 9));

  }
  return arr;
}
// console.table(stringToArr('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'))

module.exports = {
  stringToArr
}


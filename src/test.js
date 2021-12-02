// String.prototype.toJadenCase = function () {
//     let space = ' ';
//     let arrayOfStrings = str.split(space);

//      for (let i = 0; i < arrayOfStrings.length; i++) {
//          arrayOfStrings[i] = arrayOfStrings[i][0].toUpperCase() + arrayOfStrings[i].slice(1);
//                }

//                return arrayOfStrings.join(' ');
//  };

// String.toJadenCase = function (str) {
//     let space = ' '
//     let arrayOfStrings = str.split(space)
//    console.log(arrayOfStrings.length)

//      for (let i = 0; i < arrayOfStrings.length; i++) {
//          arrayOfStrings[i] = arrayOfStrings[i][0].toUpperCase() + arrayOfStrings[i].slice(1)
//          console.log(arrayOfStrings[i])

//                }
//             console.log(arrayOfStrings)
//             return arrayOfStrings.join(' ')

//  };

//  String.toJadenCase("How can mirrors be real if our eyes aren't real")
//  console.log(String.toJadenCase("How can mirrors be real if our eyes aren't real"))
String.prototype.toJadenCase = function (str) {
  let space = " ";
  let arrayOfStrings = str.split(space);
  console.log(arrayOfStrings.length);

  for (let i = 0; i < arrayOfStrings.length; i++) {
    arrayOfStrings[i] =
      arrayOfStrings[i][0].toUpperCase() + arrayOfStrings[i].slice(1);
    console.log(arrayOfStrings[i]);
  }
  console.log(arrayOfStrings);
  return arrayOfStrings.join(" ");
};

String.prototype.toJadenCase("How can mirrors be real if our eyes aren't real");
console.log(
  String.prototype.toJadenCase(
    "How can mirrors be real if our eyes aren't real"
  )
);

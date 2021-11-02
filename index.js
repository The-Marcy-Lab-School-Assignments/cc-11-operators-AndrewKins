//1
// function areBothSame(arg1, arg2) {
//   if (arg1 == arg2) {
//     return true
//   }
//   else
//     return false
// }
// console.log(areBothSame(true, 1))
// //2
// function areBothEqual(int1, int2) {
//   if (int1 === int2) {
//     return true
//   }
//   else
//     return false
// }
// console.log(areBothEqual("2", "2"))
//3
// function areAllFourEqual(fun1, fun2, fun3, fun4) {
//   if (fun1 && fun2 === fun3 && fun4) {
//     return true
//   }
//   else
//     return false
// }
// console.log(areAllFourEqual("2", "2", "2", "2"))

//4
// function areAllFourSame(and1, and2, and3, and4) {
//   if (and1 && and2 == and3 && and4) {
//     return true
//   }
//   else
//     return false
// }
// console.log(areAllFourSame("2", "2", "2", "2"))
//5
function areAllFourSameOrEqual(new1, new2, new3, new4) {
  if (new1 === new2 && new1 === new3 && new1 === new4) {
    return "equal"
  }
  else if (new1 == new2 && new1 == new3 && new1 == new4) {
    return "same"
  }
  else
    return "null"
}
console.log(areAllFourSameOrEqual("2", "2", "2", "2")) 
function luwi(d) {
  if (d % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
let bolo = luwi(1);
console.log(bolo);
function martkutxedi(a, b) {
  martkutxedi = a * b;
  console.log(martkutxedi);
}
martkutxedi(3, 6);
function kvadrati(c) {
  kvadrati = c * c;
  console.log(kvadrati);
}
kvadrati(3);
let rendom = Math.floor(Math.random() * 100 + 0);
console.log(rendom);
//with "for"
//let onenikname = [];
//for (let i = 0; i < characters.length; i++) {
//if (characters[i].alternate_names.length === 0) {
//onenikname.push(characters[i]);
//}
//}
//console.log(onenikname);

let niknamesfree = characters.filter(function (e) {
  return e.alternate_names.length === 0;
});
console.log(niknamesfree);
//function2???
//let niknamesFree = characters.filter(
// (character) => characters.alternate_names.lenght === 0
//);

//console.log(niknamesFree);
let date = new Date();
let year = date.getFullYear();
let age = characters.filter(function (e) {
  return year - e.dateOfBirth >= 18;
});
console.log(age);

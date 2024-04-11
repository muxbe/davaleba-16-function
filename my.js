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

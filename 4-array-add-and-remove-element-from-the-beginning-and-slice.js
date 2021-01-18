var teaLine = ['kalam', 'Salam', 'Balam', 'Jalam', 'Talam'];

teaLine.shift();
console.log(teaLine);

teaLine.unshift('Palam');
console.log(teaLine);

// slicing

var part = teaLine.slice(2, 4);
console.log(part);

console.log(teaLine);
/* that means slice korle
main array er kono change hobe nah
but jni slice o main array er o change korte cai tahole = splice = use kora jbe */
var student1 = { id: 121, phone: 7145, name: 'Abir' };
var student2 = { id: 131, phone: 457, name: 'mahi' };
var student3 = { id: 141, phone: 45799, name: 'hemal' };


// find specific item from object
var phoneNo1 = student1.phone; // same
var phoneNo2 = student2["phone"]; // same but another method
var phonePropName = "phone";
var phoneNo3 = student3[phonePropName]; // same but another method

console.log(phoneNo1);
console.log(student2);
console.log(phoneNo2);
console.log(phoneNo3);

// update phone number
student2.phone = 54245; // same
student2['phone'] = 54245; // same but another method
student2[phonePropName] = 54245 // same but another method
console.log(student2);

// add new property
student2.cinema = "Ogni22";
student2['cinema'] = "Ogni32"; // same but another method
console.log(student2);
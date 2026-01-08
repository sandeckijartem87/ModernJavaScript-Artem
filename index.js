let ender = [];
ender[0] = "Donald";
ender[1] = "Ole";
ender[2] = "Max";
ender[3] = "Kevin";
ender[4] = "Alexander";
ender[5] = "Jon";
ender[6] = "Vladimir";
ender[7] = "Mikkel";
ender[8] = "Julian";
ender[9] = "Artem";
console.log(ender[2]);
console.log(ender[5]);
console.log(ender[8]);
// a) En index er plasseringen til et element i en array.

// b) Første index i en array er 0.

// c) Siste index i en array er array.length - 1.

// d) Lengden på en array viser hvor mange elementer den inneholder.

// e) Sammenhengen mellom lengde og siste index er at lengden alltid er én mer enn siste index.

// Når typeof brukes på en array, returnerer den "object".

//For å sjekke om en variabel er en array i JavaScript, bruker man Array.isArray().

function testArray(argument) {
  if (Array.isArray(argument)) {
    console.log("Argumentet er en array");
  } else {
    console.log("Argumentet er ikke en array");
  }
}


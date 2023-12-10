const angka = [1, 5, 2, -1, 10, -7, 8, 3]

// filter
const angkaFilter = angka.filter(a => a > 4);
console.log(`hasil filter angka lebih besar dari 4 : ${angkaFilter}`);

// map
const angkaMap  = angka.map(a => a + 2);
console.log(`hasil map, angka ditambah 2 : ${angkaMap}`);

// reduce
const angkaReduce = angka.reduce((previous, curent) => previous + curent);
console.log(angkaReduce);

// method chaining
const angkaChain = angka.filter(a => a > 5).map(a => a * 2).reduce((prev, curr) => prev + curr);
console.log(angkaChain);
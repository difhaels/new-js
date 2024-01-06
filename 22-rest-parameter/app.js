// rest  parameter 
function restPrm(...args){
    return args;
}
console.log(restPrm(1,2,3,4,5)); // mengembalikan array

// bisa juga menggunakan argumen
function withArgs(){
    return Array.from(arguments);
}
console.log(withArgs(1,2,3,4))

// coba rest parameter dengan func penjumlahan semua args
function jumlah(...args){
    return args.reduce((prev, curr) => prev+curr);
}
console.log(jumlah(1,2,3,4,5));

// coba des variable
const nama = ["agung", "albi", "aru"];
const [leader, ...member] = nama;
console.log(`leader = ${leader} and member = ${member}`);

// filter number
function filterN(type, ...args){
    return args.filter(args => typeof args === type)
}
console.log(filterN('number',1,'2',3,'4','5',false,7))

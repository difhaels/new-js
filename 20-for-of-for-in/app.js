const mhs = ["agung", "aru", "albi"];

// biasa
// for(let i = 0; i < mhs.length; i++){
//     console.log(mhs[i]);
// }

// lumayan
// mhs.forEach(nama => {
//     console.log(nama)
// });

// hmm keren juga
// const cek = mhs.map(nama=>nama+" jr")
// console.log(cek)

for(const nama of mhs){
    console.log(nama)
}

const nama = "agung";
for(const huruf of nama){
    console.log(huruf)
}

const mahasiswa ={
    nama: "agung",
    npm: 227006516002
}
for(property in mahasiswa){
    console.log(property)
}
for(property in mahasiswa){
    console.log(mahasiswa[property])
}
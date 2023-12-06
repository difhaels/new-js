// arrow function
const selamatPagi = () => {
    return "Selamat pagi!"
};
console.log(selamatPagi());

const selamat = waktu => `Selamat ${waktu}`;
console.log(selamat("sore"));
console.log(selamat("malam"));

// contoh dengan map
let mahasiswa = ["aru", "albi", "wisnu"];
let panjangMahasiswa = mahasiswa.map((nama) => nama.length);
console.log(panjangMahasiswa);

// balikin objek
let objekMhs = mahasiswa.map((nama) => ({nama, panjang : nama.length}));
console.log(objekMhs);
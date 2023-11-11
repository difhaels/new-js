// bikin objek
// 1. Objek literal
let Mahasiswa = {
    nama : "agung",
    power : 200,

    addPower : function(energy){
        this.power += energy;
        console.log("power up")
    }
}
 
// 2. Make function declaration
function Mhs(nama, power){
    let objek = {};
    objek.nama = nama;
    objek.power = power;
    objek.addPower = function(energy){
        this.power += energy;
    }

    return objek;
}

const mahasiswa2 = Mhs("albi", 100);

// 3. constructor
function ConstructorMahasiswa (nama, power) {
    this.nama = nama;
    this.power = power;
    this.addPower = (energy) => {
        this.power += energy;
    };
};

// class ConstructorMahasiswa {
//     constructor(nama, power) {
//         this.nama = nama;
//         this.power = power;
//         this.addPower = (energy) => {
//             this.power += energy;
//         };
//     }
// };

const mahasiswa3 = new ConstructorMahasiswa("aru",150);

// 4. objek create
const methodMhs = {
    addPower : function(energy){
        this.power += energy;
        console.log("power up")
    }
}


function Mhsoc(nama, power){
    let mahasiswa = Object.create(methodMhs)
    mahasiswa.nama = nama;
    mahasiswa.power = power;
    

    return mahasiswa;
}

const Wisnu = Mhsoc("wisnu", 100)

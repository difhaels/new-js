// closure = fucntion yang menggunakan data dari parentnya
// cara rekomendasi | function factory
function salam1(waktu){
    return function (nama){
        console.log(`halo ${nama} selamat ${waktu}`)
    }
}

const selamatPagi = salam1("Pagi");
selamatPagi("Agung");
const selamatMalam = salam1("Malam");
selamatMalam("Aru");


// cara default | function factory
function salam2(waktu) {
    function namanya (nama) {
        console.log(`halo ${nama} selamat ${waktu}`)
    }
    return namanya;
}

const selamatSore = salam2("Sore");
selamatSore("Albi")

// cara elite | function factory
const salam3 = (waktu) => {
    const namanya = (nama) => {
        console.log(`halo ${nama} selamat ${waktu}`)
    }
    return namanya;
}
const selamatSubuh = salam3("Subuh");
selamatSubuh("Wisnu")


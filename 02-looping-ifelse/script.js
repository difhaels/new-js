for(let i = 0; i < 5; i++){
    console.log("hai" + i)
}

console.log("\n");
const banyakNama = ["agung", "aru", "albi", "wisnu"];
banyakNama.forEach(nama => {
    console.log(nama)
});

const nama = "rehan";
switch (nama) {
    case "agung":
        console.log("halo agung")
        break;
    case "rehan":
        console.log("halo rehan")
        break;

    default:
        console.log("halo")
        break;
}

let nilai = 1;
console.log(nilai === 1? "nilai sesuai" : "nilai salah" )
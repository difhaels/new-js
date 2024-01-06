// const mhs = ["agung", "aru", "albi"];
// const dosen = ["pak djarot", "pak agus", "pak iwan"];
// const orang = [...mhs, ...dosen];
// console.log(mhs);
// console.log(orang);

// // bisa juga dengan concat
// console.log(mhs.concat(dosen));

// // tapi dengan concat tidak bisa melakukan 
// // mengisi array ditengah
// const orang2 = [...mhs, "wisnu", "dian",...dosen];
// console.log(orang2)

// // mencopy array
//     // perlu diingat!
//     const orang3 = orang; // ini bukan mengcopy karena jika mengubah orang3 maka orang jg akan berubah
//     // yang benar adalah 
//     const orang4 = [...orang];


// // dari html nodelist ke array
// const li = document.querySelectorAll('li');
// const arrayLi = [...li].map((m)=>{return m.textContent});
// console.log(arrayLi);

const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h=>`<span>${h}</span>`).join('');
nama.innerHTML = huruf;
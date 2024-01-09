// callback synchronous
function coba(callback) { 
    console.log(callback());
}

function callback(){
    const nama = prompt("masukan nama");
    return nama;
}

// console.log('satu');
// coba(callback);
// console.log('dua');

//asynchronous callback
function getDataMahasiswa(url, success, error) {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4) {
            if(xhr.status === 200) {
                success(xhr.response);
            } else if (xhr.status === 404) {
                error('data not found');
            }
        }
    }

    xhr.open('get', url);
    xhr.send();
}


console.log('satu')
getDataMahasiswa('mahasiswa.json', (result) => {
    const mhs = JSON.parse(result)
    console.log('dua')
})
console.log('tiga')
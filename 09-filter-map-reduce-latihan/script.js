// ambil semua elemen video 
const videos = Array.from(document.querySelectorAll("[data-durasi]"));

// pilih hanya yang js lanjutan
const jsVideos = videos.filter((video) => {
    return video.textContent.includes('Javascript Lanjutan');
})

// ambil durasi masing-masing video
const totalDetik = jsVideos.map((item) => {
        return item.dataset.durasi;
    })
// ubah durasi menjadi int, ubah menit jadi detik
    .map((waktu) => {
        // 10:00 => [10, 00] ubah jadi array spt tersebut dengan split
        const waktuArray = waktu.split(':').map((part) => {
            return parseFloat(part);
        });
        return (waktuArray[0] * 60) + waktuArray[1];
    })
// jumlahkan semua detik 
    .reduce((prev, curr) => {
        return prev + curr;
    })

// ubah format menjadi jam menit detik
const jam = Math.floor(totalDetik / 3600);
const sisaDetik = totalDetik - (jam * 3600);
const menit = Math.floor(sisaDetik / 60)
const detik = sisaDetik - (menit * 60);

// masukkan kedalam dom

const totalVid = document.querySelector(".total-video").innerHTML = jsVideos.length;
const totalDurasi = document.querySelector(".total-durasi").innerHTML = `${jam}:${menit}:${detik}`;
// const promise = new Promise(resolve => {
//     const waktu = 2000;
//     setTimeout(()=>{
//         resolve('test')
//     },waktu)
// }) 

// promise.then(() => console.log(promise))

function cobaPromise(){
    return new Promise((resolve, reject) => {
        const waktu = 2000;
        if(waktu < 3000){
            setTimeout(() => {
                resolve('selesai');
            },2000)
        } else {
            reject('kelamaan');
        };
    }); 
};

// kalo make then and catch
    // const coba = cobaPromise();
    // coba
    //     .then((result) => console.log(result))
    //     .catch(() => console.error(coba));
    // yap gitu doang, tapi disini kita akan menggunakan async await


// menggunakan async await
// try = then = resolve (untuk menangani keberhasilan)
// catch = catch = reject (untuk menangani kegagalan)
async function cobaAsync(){
    try{
        const coba = await cobaPromise();
        console.log(coba);
    } catch (e){
        console.error(e)
    }
};

cobaAsync();

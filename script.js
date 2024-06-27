const fotoKhodam = [
    {url: 'img/buayaPink.jpg', title: 'Buaya Pink'},
    {url: 'img/digidaw.jpg', title: 'Digidaw'},
    {url: 'img/esCendol.jpg', title: 'Es Cendol'},
    {url: 'img/gantunganBaju.jpg', title: 'Gantungan Baju'},
    {url: 'img/kucingIsriwil.jpg', title: 'Kucing Isriwil'},
    {url: 'img/kucingPalestina.jpg', title: 'Kucing Palestina'},
    {url: 'img/kucingsigma.jpg', title: 'Kucing Sigma'},
    {url: 'img/loveBird.jpg', title: 'Love Bird'},
    {url: 'img/macanApi.jpg', title: 'Macan Api'},
    {url: 'img/macanPutih.jpg', title: 'Macan Putih'},
    {url: 'img/makSukebeg.jpg', title: 'Mak Sukebeg'},
    {url: 'img/manusiaSabun.jpg', title: 'Manusia Sabun'},
    {url: 'img/nyiRoroKidul.jpg', title: 'Nyi Roro Kidul'},
    {url: 'img/pisangKeju.jpg', title: 'Pisang Keju'},
    {url: 'img/pocongIdiot.jpg', title: 'Pocong Idiot'},
    {url: 'img/priaUwu.jpg', title: 'Pria UWU'},
    {url: 'img/rogerSumatera.jpg', title: 'Roger Sumatera'},
    {url: 'img/serigalaApiBiru.jpg', title: 'Serigala Api Biru'},
    {url: 'img/tengkorakMewing.jpg', title: 'Tengkorak Mewing'},
    {url: 'img/tuyulMerah.jpg', title: 'Tuyul Merah'},
    {url: 'img/tuyulPutih.jpg', title: 'Tuyul Putih'}
];

function randomizeKhodam() {
    const randomKhodam = Math.floor(Math.random() * fotoKhodam.length);
    const hasilKhodam = fotoKhodam[randomKhodam];
    const nama = document.getElementById('nama');
    const nama2 = nama.value;

    if(nama.value === '') {
        alert("Nama Tidak Boleh Kosong!!!");
    }
    else {
        const imgKhodam = document.getElementById('img-khodam');
        imgKhodam.innerHTML = `
        <div id="txt-khodam">${nama2.toUpperCase()} Khodam Kamu Adalah</br> "${hasilKhodam.title}"</div>
        <img src="${hasilKhodam.url}">
        `;
    }
    nama.value= '';
}
    document.getElementById('btn-check').addEventListener('click', randomizeKhodam);
    document.getElementById('nama').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            randomizeKhodam();
        }
});

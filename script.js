const fotoKhodam = [
    {url: 'img/buayaPink.jpg', title: 'Buaya Pink', detail: 'Buaya pink berasal dari lautan di sekitar pulau permen.'},
    {url: 'img/digidaw.jpg', title: 'Digidaw', detail: 'Burung hantu pengendali waktu yang mati karena basah dan kedinginan.'},
    {url: 'img/esCendol.jpg', title: 'Es Cendol', detail: 'Minuman yang terbuat dari tepung beras dan sebagainya yang dibentuk dengan penyaring, kemudian dicampur dengan air gula dan santan.'},
    {url: 'img/gantunganBaju.jpg', title: 'Gantungan Baju', detail: 'Alat untuk menyangkutkan atau menggantungkan baju'},
    {url: 'img/kucingIsriwil.jpg', title: 'Kucing Isriwil', detail: 'Kucing pro isriwil'},
    {url: 'img/kucingPalestina.jpg', title: 'Kucing Palestina', detail: 'Kucing pro palestina'},
    {url: 'img/kucingsigma.jpg', title: 'Kucing Sigma', detail: 'Kucing yang looksmaxxing sampai fase SIGMAA!'},
    {url: 'img/loveBird.jpg', title: 'Love Bird', detail: 'Burung yang mencintai sesamanya'},
    {url: 'img/macanApi.jpg', title: 'Macan Api', detail: 'Macan yang turun dari neraka'},
    {url: 'img/macanPutih.jpg', title: 'Macan Putih', detail: 'Macan legenda yang hidup abadi'},
    {url: 'img/makSukebeg.jpg', title: 'Mak Sukebeg', detail: 'Mark accidentally punch himself'},
    {url: 'img/manusiaSabun.jpg', title: 'Manusia Sabun', detail: 'Orang mandi airnya abis'},
    {url: 'img/nyiRoroKidul.jpg', title: 'Nyi Roro Kidul', detail: 'ratu laut selatan'},
    {url: 'img/pisangKeju.jpg', title: 'Pisang Keju', detail: 'pisang yang ditaburi keju diatasnya'},
    {url: 'img/pocongIdiot.jpg', title: 'Pocong Idiot', detail: '3 sahabat pocong yg dongo'},
    {url: 'img/priaUwu.jpg', title: 'Pria UWU', detail: 'UwU :3'},
    {url: 'img/rogerSumatera.jpg', title: 'Roger Sumatera', detail: 'Roger berubah manjadi serigala setiap bulan purnama'},
    {url: 'img/serigalaApiBiru.jpg', title: 'Serigala Api Biru', detail: 'Serigala dari Nether'},
    {url: 'img/tengkorakMewing.jpg', title: 'Tengkorak Mewing', detail: 'Manusia yang mewing 5 tanpa henti'},
    {url: 'img/tuyulMerah.jpg', title: 'Tuyul Merah', detail: 'seorang anak yang mati keracunan krayon warna merah'},
    {url: 'img/tuyulPutih.jpg', title: 'Tuyul Putih', detail: 'seorang anak yang mati keracunan krayon warna putih'}
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

        const detailKhodam = document.getElementById('detail-khodam');
        detailKhodam.innerHTML = `
        <h1 class="h">${hasilKhodam.title}</h1>
        <p id="txt-khodam">${hasilKhodam.detail}</p>
        `;

        const btnDetail = document.getElementById('btn-detail');
        btnDetail.style.display = 'block';
    }
    nama.value= '';   
}
function openModal(){
    const modal = document.getElementById('modal');
    modal.style.display= 'block';
    

}

    // Close the modal when the user clicks on <span> (x)
    document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

// Close the modal when the user clicks anywhere outside of the modal
    window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

    document.getElementById('btn-detail').addEventListener('click', openModal);
    
    document.getElementById('btn-check').addEventListener('click', randomizeKhodam);
    document.getElementById('nama').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            randomizeKhodam();
        }
});

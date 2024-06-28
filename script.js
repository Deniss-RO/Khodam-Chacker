const fotoKhodam = [
    {url: 'img/buayaPink.jpg', title: 'Buaya Pink', detail: 'buaya pink berasal dari lautan di sekitar pulau permen'},
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

const randomKhodam = Math.floor(Math.random() * fotoKhodam.length);
const hasilKhodam = fotoKhodam[randomKhodam];
const nama = document.getElementById('nama');
const nama2 = nama.value;

function randomizeKhodam() {

    if(nama.value === '') {
        alert("Nama Tidak Boleh Kosong!!!");
    }
    else {
        const imgKhodam = document.getElementById('img-khodam');
        imgKhodam.innerHTML = `
        <div id="txt-khodam">${nama2.toUpperCase()} Khodam Kamu Adalah</br> "${hasilKhodam.title}"</div>
        <img src="${hasilKhodam.url}"></br>
        `;
    }
    nama.value= '';   
}
function openModal(){
    const modal = document.getElementById('modal');
    modal.style.display= 'block';
    
    const detailKhodam = document.getElementById('detail-khodam');
    detailKhodam.innerHTML = `
    <h1 id="txt-detail">${hasilKhodam.title}</h1>
    `;

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

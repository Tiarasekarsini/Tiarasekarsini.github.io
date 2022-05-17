function display(){
    var namap = document.querySelector("#namap").value;
    var nohp = document.querySelector("#nohp").value;
    var namak = document.querySelector("#namak").value;
    var jenisK = document.querySelector("Input[name =jenisK]:checked").value;
    var layanan = document.querySelector("Input[name =lVaksin]:checked").value;
    var alamat = document.querySelector("#almt").value;

    alert("Nama pemilik: " + namap + "\nNo.Telepon: " + nohp + "\nNama Kucing: " + namak +
     "\nJenis Kelamin: "+ jenisK + "\nLayanan Vaksin: "+ layanan+ "\nAlamat: " +  alamat);
}
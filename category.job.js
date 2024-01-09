var marketing = {
    image: "https://assets.ayobandung.com/crop/0x0:0x0/750x500/webp/photo/2022/09/27/215744334.jpg",
    judul: "Marketing",
    ket1: "Marketing adalah proses mengenalkan produk atau jasa agar diketahui oleh masyarakat. Marketing juga berarti proses pemasaran produk atau jasa, mulai dari pembuatan strategi hingga apa yang dirasakan oleh konsumen. Perkembangan dunia bisnis membuat proses marketing ikut berkembang.",
    ket2: "Marketing memiliki tujuan untuk memberikan nilai tersendiri bagi prospek dan konsumen melalui konten dalam menunjukkan nilai produk, loyalitas merek, hingga akhirnya bisa meningkatkan penjualan."
}

var customerService = {
    image: "https://www.karier.mu/blog/wp-content/uploads/2022/05/customer-640x400-c-default.jpg",
    judul: "Customer Service",
    ket1: "Customer service adalah sebuah layanan yang ditawarkan dari perusahaan untuk para customer, baik sebelum atau sesudah membeli produk atau jasa. Tujuan CS adalah memberikan kenyamanan sehingga pengalaman mereka bertransaksi menjadi lebih baik dan berharap memenuhi ekspektasi mereka.",
    ket2: "Tujuan utama dari customer service adalah memenuhi kebutuhan dan kepuasan pelanggan."
}

var humanResource = {
    image: "https://smesta.kemenkopukm.go.id/storage/contents/news/5-alasan-human-resources-sangat-penting-untuk-membuat-bisnis-kamu-sukses.jpg",
    judul: "Human Resource",
    ket1: "pekerjaan dari HR sendiri adalah untuk mengurus berbagai hal yang berkaitan dengan karyawan yang ada di perusahaan tersebut. Sehingga dapat dikatakan jika HRD merupakan sebuah divisi yang terlibat di dalam proses untuk menangani berbagai masalah yang ada di dalam ruang lingkup karyawan.",
    ket2: "Ada beberapa tujuan human resources management yang perlu Anda pahami yaitu: Menyediakan iklim perusahaan yang energik dan baik. Merancang sistem kerja yang efisien sehingga karyawan merasa aman dan nyaman dalam bekerja. Meningkatkan kesejahteraan SDM baik itu secara jasmani maupun rohani."
}

var projectManagement = {
    image: "https://dibimbing-cdn.sgp1.cdn.digitaloceanspaces.com/1693468565011-Project-Management_-Definisi-Manfaat-Aspek-Penting-dan-Tahapan.webp",
    judul: "Project Management",
    ket1: "project management adalah metode perencanaan dan pengelolaan sumber daya yang bisa digunakan perusahaan untuk menyelesaikan sebuah proyek.",
    ket2: "Tujuan project management adalah Melakukan perencanaan, menjalankan project hingga selesai tanpa adanya masalah dan hambatan. Memaksimalkan Sumber daya yang ada. Mencari peluang yang ada dan memanfaatkannya. Meningkatkan koordinasi antara karyawan yang ada"
}

function detail(option) {
    image = window[option].image
    judul = window[option].judul
    ket1 = window[option].ket1
    ket2 = window[option].ket2

    document.getElementById("jobImage").src = image;
    document.getElementById("jobJudul").innerHTML = judul;
    document.getElementById("jobKet1").innerHTML = ket1;
    document.getElementById("jobKet2").innerHTML = ket2;
}
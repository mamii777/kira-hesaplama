function hesapla() {
    // Input elemanından girilen sayıyı al
    let sayi = document.getElementById("sayi").value;

    // Seçenek listesinden seçilen yüzdeyi al
    let secenek = document.getElementById("secenek").value;

    // Yüzdeye göre çarpma işlemi yap
    let sonuc = sayi * secenek;

    let toplam = parseFloat(sonuc) + parseFloat(sayi);

    // Sonucu label elementinde göster
    document.getElementById("sonuc").innerHTML = "Sonuç: " + sonuc;
    document.getElementById("toplam").innerHTML ="Yeni ödenecek tutar: "+ toplam;
}
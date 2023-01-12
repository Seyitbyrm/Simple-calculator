
var sayi1 = Number(prompt("Lütfen 1. sayıyı giriniz : "));
var sayi2 = Number(prompt("Lütfen 2. sayıyı giriniz : "));
var toplamaSonuc = toplama(sayi1, sayi2);
var cikarmaSonuc = cikarma(sayi1, sayi2);
var carpmaSonuc = carpma(sayi1, sayi2);
var bolmeSonuc = bolme(sayi1, sayi2);



while (true) {

    var islem = prompt("Lütfen yapılacak işlemi seçiniz (Toplama : + , Çıkarma : - , Çarpma : * , Bölme : /)");

    if (islem === "+") {
        alert(toplamaSonuc);
        console.log("İşlemin Sonucu : ", toplamaSonuc);
        document.getElementById("sonuc").innerHTML = toplamaSonuc;

        break
    }

    else if (islem === "-") {
        alert(cikarmaSonuc);
        console.log("İşlemin Sonucu : ", cikarmaSonuc);
        document.getElementById("sonuc").innerHTML = cikarmaSonuc;

        break

    }

    else if (islem === "*") {
        alert(carpmaSonuc);
        console.log("İşlemin Sonucu : ", carpmaSonuc);
        document.getElementById("sonuc").innerHTML = carpmaSonuc;

        break

    }

    else if (islem === "/") {
        alert(bolmeSonuc);
        console.log("İşlemin Sonucu : ", bolmeSonuc);
        document.getElementById("sonuc").innerHTML = bolmeSonuc;

        break

    }

    else {
        alert("Geçersiz İşlem Girdiniz Lütfen Tekrar Deneyiniz!");
    }
}

function toplama(x, y) {
    var toplamaSonuc = x + y;
    return toplamaSonuc;
}


function cikarma(x, y) {
    var cikarmaSonuc = x - y;
    return cikarmaSonuc;
}

function carpma(x, y) {
    var carpmaSonuc = x * y;
    return carpmaSonuc;
}

function bolme(x, y) {
    var bolmeSonuc = x / y;
    return bolmeSonuc;
}

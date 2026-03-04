// eğer b, a'dan küçükse ekrana "1" yazdır. tam tersi durumda ise ekrana "2" yazdır.

// if (koşul) { koşul doğruysa gerçekleşecek işlemler }


var a = 10
var b = 10

if (b < a) {
    console.log(1)
}
else if (a < b) {
    console.log(2)
}
else {
    console.log(3)
}
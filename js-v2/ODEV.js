// sayılardan oluşan bir dizi tanımlayın, içinde negatif ve pozitif sayılar olabilir, bu dizinin bütün
// elemanlarının toplamını ekrana yazdıran kod

// var a = [1, -5, 10, 96, -81, 104]
// var toplam = 0

// // a[0] + a[1] + a[2] .. + a[5]

// for(var sayac = 0; sayac < a.length; sayac++){
//     toplam = toplam + a[sayac]
// }


// console.log(toplam)


//              1   2   3   4   5   6
// sayac:       0   1   2   3   4   5
// toplam:      1  -4   6  102  21 125
const arr = [1,34,52,78,65,93];
const result = arr.reduce((total,current) => total + current, -1500);
console.log(result)
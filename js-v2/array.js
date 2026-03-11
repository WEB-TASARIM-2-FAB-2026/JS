// ARRAY METODLARI

// var a = ["elma", "armut", "karpuz"] // a: string[] 

// console.log(a)
// a.push("nar") // sondan eleman ekler

// a.pop()

// var b = a.shift()

// var b = a.unshift("avokado")

// var b = a.slice(0,2)


// ARRAYLERDE DÖNGÜ FONKSİYONLARI

var meyveler = ["elma", "armut", "muz", "çilek", "karpuz"];

// meyveler.forEach(function(meyve){
//     console.log(meyve)
// })

// meyveler.forEach((meyve) => console.log(meyve))

// meyveler.forEach((meyve) => {
//     if (meyve.length > 4) {
//         console.log(meyve)
//     }
// })

// MAP FONKSİYONU (ÖNEMLİ)

meyveler.map(meyve => console.log(meyve))
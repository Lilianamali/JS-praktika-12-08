console.log("1 užduotis");

let n = 20;

if (n < 0) {
    console.log("Skaičius blogas");
} else if (n > 0) {
    console.log("Skaičius geras");
} else {
    console.log("Skaičius geras");
}

// if (n >0) {
//     console.log("skaičius garas")
// } else if(n == 0) {
//     console.log("įvestas nulis");



// }

console.log("2 užduotis")

let n2 = 2;

if (n2 == 1) {
    console.log("Eikite");
} else if (n2 == 2) {
    console.log("Palaukite");
} else if (n2 == 3) {
    console.log("Stovėkite");
} else {
    console.log("Įvestas skaičius nera nei1, nei 2, nei 3");
}

console.log("3 užduotis");

let d = 3;
let k = 18;
let m = 5;

if (d * m >= k) {
    console.log("Knygos telpa į dežes");
} else {
    console.log("Knygos netelpa į dežes");
}

console.log("4 užduotis");

// let n3 = 1221;
// let ketvirtas = n3 % 10;
// let trečiasis = Math.floor(n3 / 10) % 10;
// let antras = Math.floor(n3 / 100) % 10;
// let pirmas = Math.floor(n3 / 1000);

// if (pirmas == ketvirtas){
//     if (antras == trečiasis){
//         console.log("skaičius polindromas");
//     } else {console.log("skaičius nera pollindromas");}
// } else {console.log("skaicius nera polindromas");}

// if (pirmas == ketvirtas && antras == trečiasis){
//     console.log("skaičius yra polindromas")
// } else {console.log ("skaičius nera polindromas")}

console.log("5 užduotis");


let n4 = 222442;
let sesi = n4 % 10;
let penki = Math.floor(n4 / 10) % 10;
let keturi = Math.floor(n4 / 100) % 10;
let trys = Math.floor(n4 / 1000) % 10;
let du = Math.floor(n4 / 10000) % 10;
let vienas = Math.floor(n4 / 100000) % 10;
let sumn4 = sesi + penki + keturi + trys + du + vienas;



if (sumn4 % 4 == 0){
    console.log("Bilietas laimingas");
} else {
    console.log("Bilietas nelaimingas");
}

console.log("6 užduotis");

let metai = 2003;

if(metai % 4 == 0 && metai % 100 != 0){
    console.log("keliamieji")
} else {
    console.log("nekieliamieji");
}

console.log("7 užduotis");

let h = 12321


let t1 = h % 10;
let t2 = Math.floor(h / 10) % 10;
let t3 = Math.floor(h / 100) % 10;
let t4 = Math.floor(h / 1000) % 10;
let t5 = Math.floor(h / 10000) % 10;

if (t1 == t5 && t2 == t4){
        console.log("skaičius polindromas");
    } else {console.log("skaičius nera pollindromas");
}

console.log("8 užduotis");

let r = 4;

if (r<=6 && n>-1){
    if (r % 2 == 0){
    console.log("tvarko vyersnelis")
} else {
    console.log("tvarko jaunimelis");
}
} else {
    console.log("zaisime iki sesiu");
}

console.log("9 užduotis");

let p1 = 5;
let p2 = 8;
let p3 = 10;

if(p1 > p2 && p3< p1 ){
    console.log("geresnis")
} else if(p2 > p1 && p3 < p2)  {
    console.log ("prastesnis pazymis")
} else {console.log("geriausias");
}
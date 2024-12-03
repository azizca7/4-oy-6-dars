// Oddiy hisob-kitoblar

// =======================
// 1-masala:
// Funksiya yozing, u berilgan sonning juft yoki toq ekanligini aniqlasin.

// function odd(num) {
//   let res = num % 2 == 0 ? console.log("juft") : console.log("toq");

//   return res;
// }

// odd(5);

// =======================
// 2-masala:
// Funksiya yozing, u berilgan sonning musbat, manfiy yoki nol ekanligini aniqlasin.

// function positive(num) {
//   if (num > 0) {
//     return "musbat";
//   } else if (num === 0) {
//     return "nol";
//   } else {
//     return "manfiy";
//   }
// }

// console.log(positive(5));
// console.log(positive(-8));
// console.log(positive(0));

// =======================
// 3-masala:
// Funksiya yozing, u berilgan ikki sondan kattasini qaytarsin.

// function big(a, b) {
//   if (a > b) {
//     return a;
//   } else {
//     return b;
//   }
// }

// console.log(big(5, 6));
// console.log(big(8, 3));

// =======================
// 4-masala:
// Funksiya yozing, u uchta sondan eng kattasini aniqlasin.

// function big(a, b, c) {
//   if (a > b && a > c) {
//     return a;
//   } else if (b > a && b > c) {
//     return b;
//   } else {
//     return c;
//   }
// }

// console.log(big(1, 2, 3));

// =======================
// 5-masala:
// Funksiya yozing, u berilgan sonning 3 ga bo‘linishini aniqlasin.

// function check(num) {
//   if (num % 3 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(check(9));

// =======================
// 6-masala:
// Funksiya yozing, u berilgan sonning kvadratini qaytarsin.

// function check(num) {
//   return num ** 2;
// }
// console.log(check(3));
// console.log(check(8));

// =======================
// 7-masala:
// Funksiya yozing, u ikki sonning ko‘paytmasini hisoblasin.

// function check(num1, num2) {
//     return num1 * num2;
// }
// console.log(check(2, 6));

// =======================
// 8-masala:
// Funksiya yozing, u berilgan sonni 1 dan boshlab o‘sha songacha bo‘lgan barcha sonlarning yig‘indisini hisoblasin.

// function sum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }

//   return sum;
// }

// console.log(sum(20));

// =======================
// 9-masala:
// Funksiya yozing, u 1 dan 10 gacha bo‘lgan sonlarning ko‘paytmasini qaytarsin.

// function multiply() {
//   let multiply = 1;
//   for (let i = 1; i <= 10; i++) {
//     multiply *= i;
//   }
//   return multiply;
// }

// console.log(multiply());

// =======================
// 10-masala:
// Funksiya yozing, u berilgan sondan boshlab 1 ga kamaytirib chiqaradi.

// function reduce(n) {
//   for (let i = n; i >= 1; i--) {
//      console.log(i);
//   }
// }

// reduce(10);

//  Shart operatorlari va sikllar

// =======================
// 11-masala:
// Funksiya yozing, u berilgan sonni faqat juft bo‘lsa ekranga chiqaradi.

// function check(num) {
//     if (num % 2 == 0){
//         return num;
//     }
// }

// console.log(check(8));

// =======================
// 12-masala:
// Funksiya yozing, u berilgan ikki sondan kattasini ternary operator yordamida aniqlasin.

// function check(num1, num2) {
//   return num1 > num2 ? console.log(num1) : console.log(num2);
// }

// check(5,8)

// =======================
// 13-masala:
// Funksiya yozing, u berilgan son 5 ga va 3 ga bo‘linishini tekshiradi.

// function check(num) {
//   let res = num % 15 == 0 ? console.log(true) : console.log(false);
//   return res
// }

// check(45)

// =======================
// 14-masala:
// Funksiya yozing, u berilgan sonning kvadrati va kubini qaytaradi.

// function check (num) {
//     let square = num ** 2;
//     let cube = num ** 3;
//     return {square, cube}

// }
// console.log(check(3));

// =======================
// 15-masala:
// Funksiya yozing, u 1 dan 100 gacha bo‘lgan faqat juft sonlarni ekranga chiqaradi.

// function check() {
//   for (let i = 1; i <= 100; i++) {
//     if (i % 2 == 0) {
//       console.log(i);
//     }
//   }
// }

// check();

// =======================
// 16-masala:
// Funksiya yozing, u 1 dan n gacha bo‘lgan toq sonlarni ekranga chiqaradi.

// function check(n) {
//   for (let i = 1; i <= n; i++) {
//     if (i % 2 == 1) {
//       console.log(i);
//     }
//   }
// }

// check(20);

// =======================
// 17-masala:
// Funksiya yozing, u kiritilgan sonning faktorialini hisoblaydi.

// function factorial(num) {
//    let factorial = 1;
//    for (let i = 1; i <= num; i++){
//     factorial *= i
//    }
//    return factorial;
// }

// console.log(factorial(5));

// =======================
// 18-masala:
// Funksiya yozing, u kiritilgan sonni 10 ga bo‘lgandagi qoldiqni qaytaradi.

// function check(num) {
//     return num % 10;
// }
// console.log(check(15));

// =======================
// 19-masala:
// Funksiya yozing, u ikki sonni o‘zaro solishtirib, qaysi biri katta ekanligini ekranga chiqaradi.

// function check(a, b) {
//   if (a > b) {
//     console.log(a);
//   } else if (a < b) {
//     console.log(b);
//   } else {
//     console.log("ikkalasi ham teng!");
//   }
// }

// check(13,5)

// =======================
// 20-masala:
// Funksiya yozing, u 1 dan 50 gacha bo‘lgan barcha sonlarning yig‘indisini qaytaradi.

// function check() {
//     let sum = 0;
//     for (let i = 1; i <= 50; i++){
//         sum += i;
//     }
//     return sum;
// }

// console.log(check());

//  Matematik masalalar
// =======================
// 21-masala:
// Funksiya yozing, u berilgan sonning kvadrat ildizini hisoblaydi (math metodlari ishlatilmasin).

// function check(num) {
//   let sqrt = 0;
//   for (let i = 1; i * i <= num; i++) {
//     sqrt = i;
//   }
//   return sqrt;
// }

// console.log(check(25));

// =======================
// 22-masala:
// Funksiya yozing, u ikkita sonning o‘rta arifmetik qiymatini hisoblaydi.

// function check(num1, num2) {
//     let sum = num1 + num2;
//     return sum / 2;
// }
// console.log(check(18, 4));

// =======================
// 23-masala:
// Funksiya yozing, u berilgan son musbatmi yoki manfiy ekanligini if orqali aniqlasin.

// function positive(num) {
//   if (num > 0) {
//     return "musbat";
//   } else {
//     return "manfiy";
//   }
// }

// console.log(positive(5));

// =======================
// 24-masala:
// Funksiya yozing, u berilgan sonni juft sonlar yig‘indisini hisoblaydi.

// function check(num) {
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//     if (i % 2 == 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }
// console.log(check(10));

// =======================
// 25-masala:
// Funksiya yozing, u ikki sonni qo‘shadi, lekin agar sonlardan biri manfiy bo‘lsa, natijaga 10 qo‘shadi.

// function check(num1, num2) {
//     let sum = num1 + num2;
//     if (num1 < 0 || num2 < 0){
//         return sum + 10;
//     }
// }

// console.log(check(-8, 9));

// =======================
// 26-masala:
// Funksiya yozing, u berilgan ikkita sonni qo‘shadi va ko‘paytiradi, natijalarni alohida qaytaradi.

// function check(num1, num2) {
//   let sum = num1 + num2;
//   let multiply = num1 * num2;

//   return { sum, multiply };
// }
// console.log(check(6, 5));

// =======================
// 27-masala:
// Funksiya yozing, u foydalanuvchi kiritgan son 7 ga bo‘linishini aniqlaydi.

// function check(num) {
//   if (num % 7 == 0) {
//     return true;
//   }
// }
// console.log(check(7));

// =======================
// 28-masala:
// Funksiya yozing, u berilgan sonni xuddi shu tartibda 10 marta ko‘paytirib chiqaradi.

// function check(num) {
//   for (let i = 1; i <= 10; i++) {
//     num *= 10;
//     console.log(num);
//   }
// }

// check(5);

// =======================
// 29-masala:
// Funksiya yozing, u ikki sonni ko‘paytiradi, lekin agar sonlardan biri 0 bo‘lsa, natija 1 bo‘ladi.

// function multiply(num1, num2) {
//     let multiply = num1 * num2;
//     if (num1 === 0 || num2 === 0){
//         multiply = 1;
//     }
//     return multiply;
// }
// console.log(multiply(0, 5));

// =======================
// 30-masala:
// Funksiya yozing, u foydalanuvchi kiritgan ikkita sonning modulini hisoblaydi.

// function module(a, b) {
//   let module_a = a >= 0 ? a : -a;
//   let module_b = b >= 0 ? b : -b;

//   return { module_a, module_b };
// }

// console.log(module(-5, 9));

//  Sonlar bilan ishlash
// =======================
// 31-masala:
// Funksiya yozing, u foydalanuvchi kiritgan sonni faqat manfiy bo‘lsa ekranga chiqaradi.

// function check(num) {
//     if (num < 0){
//         return num;
//     }
// }

// console.log(check(-5));
// console.log(check(5));

// =======================
// 32-masala:
// Funksiya yozing, u 1 dan 100 gacha bo‘lgan sonlardan faqat 5 ga karrali bo‘lganlarni ekranga chiqaradi.

// function check() {
//   for (let i = 1; i <= 100; i++) {
//     if (i % 5 == 0) {
//       console.log(i);
//     }
//   }
// }

// check()

// =======================
// 33-masala:
// Funksiya yozing, u berilgan ikki sonning yig‘indisini hisoblaydi, agar natija juft bo‘lsa, "Juft" deb qaytaradi.

// function check(num1, num2) {
//   let sum = num1 + num2;
//   if (sum % 2 == 0) {
//     return "juft";
//   }
// }
// console.log(check(6, 8));

// =======================
// 34-masala:
// Funksiya yozing, u foydalanuvchi kiritgan sonning bo‘luvchilarini ekranga chiqaradi.

// function check(num) {
//   for (let i = 1; i <= num; i++) {
//     if (num % i == 0) {
//       console.log(i);
//     }
//   }
// }

// let num = +prompt("son kiriting:");
// check(num);

// =======================
// 35-masala:
// Funksiya yozing, u berilgan sondan kattalik bo‘yicha kichik bo‘lgan barcha toq sonlarni chiqaradi.

// function check(num) {
//   for (let i = 1; i <= num; i++) {
//     if (i % 2 == 1) {
//       console.log(i);
//     }
//   }
// }
// check(6)

// =======================
// 36-masala:
// Funksiya yozing, u berilgan sonni 1 dan 20 gacha bo‘lgan sonlarga bo‘lib, har birining qoldig‘ini chiqaradi.

// function check(num) {
//   for (let i = 1; i <= 20; i++) {
//     console.log(num % i);
//   }
// }
// check(8);

// =======================
// 37-masala:
// Funksiya yozing, u foydalanuvchi kiritgan sonning barcha bo‘luvchilarini hisoblaydi va yig‘indisini qaytaradi.

// function check(num) {
//   let count = 0;
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//     if (num % i == 0) {
//       count++;
//       sum += i;
//     }
//   }
//   return { count, sum };
// }

// let num = +prompt("son kiriting:");
// console.log(check(num));

// =======================
// 38-masala:
// Funksiya yozing, u foydalanuvchi kiritgan sonni faqat juft bo‘lsa kvadratini hisoblaydi.

// function check(num) {
//   if (num % 2 == 0) {
//     console.log(num ** 2);
//   }
// }

// let num = +prompt("son kiriting:");
// check(num);

// =======================
// 39-masala:
// Funksiya yozing, u berilgan son 100 dan katta bo‘lsa, uni ikki barobar oshiradi, aks holda 10 qo‘shadi.

// function check(num) {
//   if (num >= 100) {
//     console.log(num * 2);
//   } else {
//     console.log(num + 10);
//   }
// }
// check(150)
// check(56)

// =======================
// 40-masala:
// Funksiya yozing, u foydalanuvchi kiritgan sonning barcha raqamlarini birma-bir chiqaradi.

// function check(num) {
//   let numString = num.toString();
//   for (let i = 0; i < numString.length; i++) {
//     console.log(numString[i]);
//   }
// }
// check(123);

//  Murakkabroq masalalar
// =======================
// 41-masala:
// Funksiya yozing, u foydalanuvchi kiritgan ikki sonning o‘zaro karrali ekanligini aniqlaydi.

// function check(num1, num2){
//     if (num1 % num2 == 0 || num2 % num1 == 0){
//         return true;
//     }
// }
// console.log(check(20, 10));

// =======================
// 42-masala:
// Funksiya yozing, u foydalanuvchi kiritgan sonning raqamlari yig‘indisini hisoblaydi.

// function check(num) {
//   let sum = 0;
//   let numString = num.toString();
//   for (let i = 0; i < numString.length; i++) {
//     sum += parseInt(numString[i]);
//   }
//   return sum;
// }
// console.log(check(123));

// =======================
// 43-masala:
// Funksiya yozing, u 1 dan foydalanuvchi kiritgan sondan katta bo‘lgan barcha sonlarni ekranga chiqaradi.
// function check(num) {
//   for (let i = num + 1; i <= num + 10; i++) {
//     console.log(i);
//   }
// }

// let num = +prompt("son kiriting:");
// check(num);

// =======================
// 44-masala:
// Funksiya yozing, u foydalanuvchi kiritgan ikkita sonning bo‘linmasini hisoblaydi (qoldiqsiz).

// function check(num1, num2) {
//   if (num1 % num2 === 0) {
//     return num1 / num2;
//   }
// }

// let num1 = +prompt("Birinchi sonni kiriting:");
// let num2 = +prompt("Ikkinchi sonni kiriting:");

// console.log(check(num1, num2));

// =======================
// 45-masala:
// Funksiya yozing, u 1 dan n gacha bo‘lgan barcha sonlarning kvadratlarini ekranga chiqaradi.

// function check(n) {
//   for (let i = 1; i <= n; i++) {
//     console.log(i ** 2);
//   }
// }
// check(20)

// =======================
// 46-masala:
// Funksiya yozing, u foydalanuvchi kiritgan sonning o‘z-o‘ziga karraligini aniqlaydi.

// function check(num) {
//   if (num % num == 0) {
//     return true;
//   }
// }
// console.log(check(5));

// function check(num) {

//   let sqrt = Math.sqrt(num);
//   if (sqrt === Math.floor(sqrt)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let num = +prompt("Sonni kiriting:");
// console.log(check(num));

// =======================
// 47-masala:

// function check(num) {
//   let numString = num.toString();
//   for (let i = 0; i < numString.length; i++) {
//     console.log(numString[i] ** 2);
//   }
// }
// check(123);

// =======================
// 48-masala:
// Funksiya yozing, u 1 dan 50 gacha bo‘lgan barcha sonlarning faqat toqlari yig‘indisini hisoblaydi.

// function check() {
//   let sum = 0;
//   for (let i = 1; i <= 50; i++) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(check());

// =======================
// 49-masala:
// Funksiya yozing, u foydalanuvchi kiritgan sonni teskari tartibda chiqaradi.

// function check(num) {
//   let reverse = 0;
//   while (num !== 0) {
//     reverse = reverse * 10 + (num % 10);
//     num = Math.trunc(num / 10);
//   }
//   return reverse;
// }
// let num = +prompt("son kiriting:");
// console.log(check(num));

// =======================
// 50-masala:
// Funksiya yozing, u foydalanuvchi kiritgan sonning raqamlari yig‘indisi 10 dan katta yoki kichikligini aniqlaydi.

// function check(num) {
//   let sum = 0;
//   let numString = num.toString();
//   for (let i = 0; i < numString.length; i++) {
//     sum += parseInt(numString[i]);
//   }
//   if (sum > 10) {
//     return sum;
//   }
// }
// let num = +prompt("son kiriting:");
// console.log(check(num));

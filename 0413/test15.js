// test15.js
'use strict';
let text1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcde';
let text2 = 'ABC   BCDEF   GHI  JKLMN....      ABC..  OPQ';

// demo.innerHTML = text1
// demo.innerHTML = text1.length;
// demo.innerHTML = text1.substring(0,10);
// demo.innerHTML = text1.slice(0,10);
// demo.innerHTML = text1.substring(10);
// demo.innerHTML = text1.substr(10);
// demo.innerHTML = text1.replace('ABC','opq');
// demo.innerHTML = text2.replace('ABC','opq');
// demo.innerHTML = text2.replaceAll('ABC','opq');
// demo.innerHTML = text2.toUpperCase();
// demo.innerHTML = text2.toLowerCase();
// demo.innerHTML = text2.concat('안녕', 1234);
// demo.innerHTML = concat('안녕', 1234);  == error concat은 함수라서 혼자 사용 X
// demo.innerHTML = text2.trim() +"abc";
// demo.innerHTML = text2.trimStart() +"abc";
// demo.innerHTML = "abc"+text2.trimEnd() +"abc";
// demo.innerHTML = "abc"+text2.replaceAll(' ',''); + "abc";
// demo.innerHTML = text1.charAt(10);
// demo.innerHTML = text1.charCodeAt(26);
let mbc = text2.split('ABC');
// demo.innerHTML = mbc;
// demo.innerHTML = typeof(mbc);
let temp = ' ';
for (let item of mbc) {
  console.log(item);
  temp += item;
}
demo.innerHTML = temp;

let title = ['지역번호', '국번호', '전화번호'];
let telTemp = '010-3423-2704';
let tels = telTemp.split("-");

tels.forEach((tel, i) => {
  console.log(title[i] + ":" + tel );
});

// demo.innerHTML = text1.indexOf('t');
// demo.innerHTML = text2.search('t');
// demo.innerHTML = text1.match('ABC');
demo.innerHTML = text1.includes('ABC');

let price = 100; // 가격
let vat = 0.25; // 부가가치세
let total = price * (1 + vat);


// let str = "총금액 : " + total;
let str = `총금액 : ${price * (1 + vat)}원`;  //EL표기법(Expression Language) => ${}
demo.innerHTML = str;


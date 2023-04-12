//test17.js
'use strict';

// 오늘 날짜를 전역변수로 선언.
const today = new Date();
const year = today.getFullYear();   // 연도 4자리
const month = today.getMonth() + 1;     // 월(0~11로 계산되어 기존 월보다 -1되어 출력됨)
const date = today.getDate();       // 일
const hour = today.getHours();      // 시
const minute = today.getMinutes();  // 분
const second = today.getSeconds();  // 초
const yymmdd = year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;

// 표준날짜
function fCheck1() {
  console.log("표준 날짜" + today);
  demo.innerHTML = today;
}

function fCheck2() {
  console.log("편집 날짜" + yymmdd);
  demo.innerHTML = yymmdd;
}

// 요일 = 0(일)~ 6(토)
function fCheck3() {
  let str = today.getDay();
  let week = ['일', '월', '화', '수', '목', '금', '토']
  demo.innerHTML = week[str] + '요일';
}
// 해당 달의 마지막 날짜
function fCheck4() {
  let mon = prompt("마지막날짜를 출력할 '년-월'을 입력하세요. (yyyy-mm)");
  let temp = mon.split("-");
  let yy = temp[0];
  let mm = temp[1];

  let str = new Date(yy, mm, 0);
  let strDate = str.getFullYear() + '-';
  // strDate += (str.getMonth() + 1) + '-';
  // strDate += str.getDate();
  // strDate = "해당월의 마지막 일자 : " + strDate;

  strDate = "해당월의 마지막 일자? " + yy + "-" + mm + "-" + str.getDate();
  demo.innerHTML = strDate;
}

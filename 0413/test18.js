//test18.js
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
  let temp = year + "-" + month + "-" + date;
  document.getElementById("date1").value = temp;
}

// 날짜 비교하기 (isSameDay(날짜형식1,날짜형식2))
function fCheck2() {
  let start = document.getElementById("date1").value;
  let end = document.getElementById("date2").value;

  const startDate = new Date(start);
  const endDate = new Date(end);
  let lemp;

  if (isSameDay(startDate, endDate)) temp = "같다.";
    else temp = "다르다."

}


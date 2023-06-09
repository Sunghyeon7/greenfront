// test1.js
'use strict';

function regexCheck(){
  // 정규표현식변수를 먼저 만들어 놓는다.
  const regex1 = /atom/g;  // 'atom'이라는 문자열이 포함되어 있으면 true, 없으면 false 반환
  const regex2 = /mbc|kbs|sbs/g; // mbc 또는 kbs 또는 sbs 문자열을 포함하고 있느냐.
  const regex3 = /홍길(동|순)/g; // 홍길동,홍길순이 존재하는지..
  const regex4 = /[a-z]/gm; // 영문 소문자를 포함하고 있는지..
  const regex5 = /[^a-z]/gm; // 영문 소문자만 포함하고 있는지..
  const regex6 = /[A-Z]/gm; // 영문 대문자를 포함하고 있는지..
  const regex7 = /[^A-Z]/gm; // 영문 대문자만 포함하고 있는지..
  const regex8 = /[0-9]/gm; // 숫자를 포함 하고 있는지
  const regex9 = /[^0-9]/gm; // 숫자만 포함하고 있는지..
  const regex10 = /[가-힣]/gm; // 한글을 포함하고 있는지..
  const regex11 = /[^가-힣]/gm; // 한글만 포함하고 있는지
  const regex12 = /[a-zA-Z0-9]/gm; // 영문자와 숫자를 포함하고 있는지
  const regex13 = /[^a-zA-Z0-9]/gm; // 영문자와 숫자만 포함되고 있는지
  const regex14 = /[^a-zA-Z0-9_]/gm; // 영문자와 숫자와 밑줄(_)만 포함되고 있는지
  
  const regex21 = /\./g;    // .을 포함하고 있는지
  const regex22 = /\d/g;    // 숫자를 포함하고 있는지..
  const regex23 = /\D/g;    // 숫자를 포함하지 않는지...
  const regex24 = /\w/g;    // 영문자/숫자/_를 포함하고 있는지..
  const regex25 = /\W/g;    // 영문자/숫자/_를 포함하지 않는지..
  const regex26 = /\s/g;    // 문장안에 공백(탭 포함)을 포함하고 있는지

  // 와일드 카드: 1개 글자만 포함 유무(?), 복수개의 문자의 포함 유무(+, *)
  const regex31 = /홍길동?/g;       // ' 홍길동 ' 의 '동' 0개 글자 포함 유무
  const regex32 = /홍길동+/g;       // ' 홍길동 ' 의 '동' 1개 이상 글자의 포함 유무
  const regex33 = /홍길동*/g;       // ' 홍길동 ' 의 '동' 0개 이상 글자의 포함 유무



  let content = document.getElementById("content").value.trim();

  if(content.trim() == "") alert("문자열을 입력하세요");
  // else if(!content.match(regex1))alert("atom 문자열을 포함하고 있지 않습니다.");
  // else if(!content.match(regex2)) alert("방송국을 선택하세요.");
  // else if(!content.match(regex3)) alert("홍길동/홍길순이 존재하지 않습니다.");
  // else if(!regex4.test(content)) alert("영문 소문자가와 다른 문자가 포함하고 있습니다.");
  // else if(regex5.test(content)) alert("영문 소문자 외 다른 문자를 포함하고 있습니다.");
  // else if(!regex6.test(content)) alert("영문 대문자와 다른문자를 포함하고 있습니다.");
  // else if(regex7.test(content)) alert("영문 대문자 외 다른문자를 포함하고 있습니다.");
  // else if(!regex8.test(content)) alert("숫자를 포함하고 있지 않습니다.");
  // else if(regex9.test(content)) alert("숫자외 다른 문자를 포함하고 있습니다.");
  // else if(!regex10.test(content)) alert("한글을 포함하고 있지 않습니다");
  // else if(regex11.test(content)) alert("한글외 다른 문자를 포함하고 있습니다");
  // else if(!regex12.test(content)) alert("영문자나 숫자를 포함하고 있지 않습니다.");
  // else if(regex13.test(content)) alert("영문자나 숫자 외 다른문자를 포함하고 있습니다.");
  // else if(regex14.test(content)) alert("영문자나 숫자 외 밑줄(_)외 다른문자를 포함하고 있습니다.");
  
  // else if(regex21.test(content)) alert("입력 데이터중에 .을 포함하고 있습니다");
  // else if(regex22.test(content)) alert("입력 데이터중에 숫자를 포함하고 있습니다.");
  // else if(!regex23.test(content)) alert("입력 데이터중에 숫자만 포함하고 있습니다.");
  // else if(regex24.test(content)) alert("입력 데이터중에 영문자/숫자/_을 포함하고 있습니다.");
  // else if(regex25.test(content)) alert("입력 데이터중에 영문자/숫자/_만 포함하고  있지 않습니다.");
  // else if(regex26.test(content)) alert("입력 데이터중에 공백을 포함하고 있습니다.");
  
  // else if(regex31.test(content)) alert("입력 데이터중에 홍길'동'을 포함하고 있습니다.");
  // else if(regex32.test(content)) alert("입력 데이터중에 홍길'동'을 포함하고 있습니다.");
  else if(regex33.test(content)) alert("입력 데이터중에 홍길'동'을 포함하고 있습니다.");

  else alert('정상적으로 통과.')
}

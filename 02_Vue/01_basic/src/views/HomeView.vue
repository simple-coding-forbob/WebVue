<template>
  <div>
    <!-- 주석 : ctrl + / -->
    <!-- TODO: 여기 : html 코딩하는 곳 -->
    <h1>안녕하세요</h1>
    <!-- TODO: 1) vue 의 사용법 vs jsp 사용법 -->
      <!-- jsp el 표현식 : ${변수} -->
      <!-- vue 표현식 : 콧수염 표기법 : {{변수}} -->
      <!-- 1) 문자열 : O -->
      {{"문자열 출력"}}
      <!-- 2) 숫자(숫자연산) : O -->
      <br/>
      {{1 + 1 * 2 - 3 / 2}}
      <br/>
      <!-- 3) 문자열 붙이기 : + : O -->
      {{ "abc" + "가나다"}}
      <br/>
      <!-- 4) 배열(js) : O -->
      {{["가", "나"]}}
      <br/>
      <!-- 5) 참/거짓(boolean) : O -->
      {{true}}
      <br/>
      <!-- 6) 3항 연산자 : 조건식? 참 : 거짓 => O -->
      {{true? "true" : "false"}}
      <!-- 7) js 함수 : O -->
      {{ new Date().getMonth() }}

      <!-- TODO: 안되는 것  -->
      <!-- 8) 객체 출력(js) : {속성:값} : X -->
      <!-- {{{name:"홍길동"}}} -->
      <!-- 9) 조건문 : if문/ switch문 : X -->
      <!-- {{if(true) { console.log("true")}}} -->
      <!-- 10) 반복문 : for문/while문 : X  -->
      <!-- {{for(let i=0;i<2;i++) {console.log("aaa")}}} -->
  </div>
</template>
<script>
// js 주석 : ctrl + /
// TODO: 여기 : js 코딩하는 곳
export default {
  
}
</script>
<style>
/* css 주석 : ctrl + / */
/* TODO: 여기 : css 를 코딩하는 곳 */
  h1 {
    background-color: aqua;
  }
</style>
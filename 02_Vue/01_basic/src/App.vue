<template>
  <!-- TODO: 머리말 : 컴포넌트(jsp 의 include 와 유사) -->
  <HeaderCom/>
  
  <!-- 1) /about 클릭 => AboutView 의 내용이 아래에 보임 -->
  <!-- 2) /dept 클릭 => DeptView 의 내용이 아래에 보임 -->
  <!-- TODO: 결론 : 아래태그가 본문부분을 의미함 -->
  <router-view/>

  <!-- TODO: 간단연습) 꼬리말 컴포넌트 만들고 화면에 표시하세요 -->
  <!-- 이름 : FooterCom.vue -->
  <FooterCom/>
</template>
<script>
// 다른 vue 페이지 include == import 하기(이크마스크립트)
import HeaderCom from "./components/HeaderCom.vue";
// TODO: 꼬리말 페이지 import
import FooterCom from "./components/FooterCom.vue";
export default {
  components:{
    HeaderCom,
    FooterCom
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

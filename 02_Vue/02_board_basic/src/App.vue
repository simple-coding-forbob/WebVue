// App.vue
<template>
<!-- 머리말 : HeaderCom.vue -->
  <HeaderCom/>
  <!-- 본문 : router-view 태그 (본문을 대리하는 태그)  -->
  <div class="container mt-3">
      <router-view/>
  </div>

</template>

<script>
// HeaderCom 페이지 import
import HeaderCom from "./components/HeaderCom.vue";
export default {
  // 컴포넌트 등록 : jsp include 기능 유사
  components : {
    HeaderCom
  }
}
</script>

<style>
</style>

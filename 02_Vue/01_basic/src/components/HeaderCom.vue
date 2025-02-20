// components/HeaderCom.vue // vueInit 단축키 // 자동정렬 단축키 : ctrl + alt +
l
<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <!-- router-link 태그 사용 : 클릭시 부분 새로고침이 발생(성능 향상)  -->
      <router-link to="/dept">Dept</router-link> |
      <!-- a 태그 사용 : 클릭시 전체 새로고침이 발생(성능 저하)  -->
      <!-- <a href="/dept">Dept</a> | -->
      <router-link to="/emp">Emp</router-link> |
      <router-link to="/binding">Binding</router-link> |
      <router-link to="/attribute">Attribute</router-link> |
    </nav>
  </div>
</template>
<script>
export default {};
</script>
<style></style>

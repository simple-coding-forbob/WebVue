// views/BindingView.vue
// vueInit 단축키
<template>
    <div>
        <h1>바인딩 변수로 화면 표시</h1>
        {{hello}}
        <br/>
        {{message}}
        <br/>
        {{name}}
        <!-- TODO: html 태그 굳이 적용하고 싶다(참고:해킹의 위험) -->
        <!-- html 태그 적용됨  -->
        <span v-html="message"></span>
    </div>
</template>
<script>
// js : 변수 , 여기서 코딩
export default {
    data() {
        return {
            // TODO: vue 의 변수는 여기에 코딩
            hello: "안녕",
            message: "<h1>안녕하세요</h1>",
            // TODO: 간단연습) name 속성을 만들고 장길산 이라고 화면에 표시하세요(변수이용)
            name: "장길산"
        }
    },
}
</script>
<style>
    
</style>
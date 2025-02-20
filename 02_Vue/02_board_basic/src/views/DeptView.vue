// DeptView.vue // url(path) : /dept // vueInit 단축키
<template>
  <div>
    <!-- 부트스트랩 테이블 넣기 -->
    <table class="table">
        <!-- TODO: 테이블 제목 -->
      <thead>
        <tr>
          <th scope="col">dno</th>
          <th scope="col">dname</th>
          <th scope="col">loc</th>
        </tr>
      </thead>
      <tbody>
        <!-- TODO: tr태그 반복문 대상 -->
        <!-- 반복문 : v-for -->
        <tr v-for="(data, index) in dept" :key="index">
          <td>{{data.dno}}</td>
          <td>{{data.dname}}</td>
          <td>{{data.loc}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      dept: [] // 빈배열 (json 읽어서 배열에 복사)
    };
  },
//   함수 : methods
  methods: {
    // TODO: 비동기 코딩 : async ~ await (비동기 코딩 키워드 : js)
    // TODO: 대상 : (벡엔드 데이터 받기 코딩 : json 데이터 받기(axios 함수들))
    //     vs 동기 코딩  : 자바처럼 코딩하는것 (일반적인 코딩) 
    // TODO: async/await 사용법 : async 뷰함수명(){ let 변수 = await axios함수명() }
    //      
    async getDepts(){
        // 예외처리 : try / catch 
        try {
            // axios get 함수 실행 : DeptService.js getAll()
            let response = await axios.get("http://localhost:8080/dept.json");
            // 디버깅 : 변수 출력
            console.log(response.data);
            // TODO: axios 함수는 결과(json) : response.data 나옴
            this.dept = response.data; // dept.json 내용
        } catch (error) {
            console.log(error);
        }
    }
  },
//   자동실행 : 이페이지가 최초로 화면에 뜰때
    mounted() {
        this.getDepts();
    },
};
</script>
<style></style>

// CustomerView.vue(연습) // vueInit 단축키 // 1) url(/customer) 메뉴등록 // 2)
json 파일 데이터를 배열에 복사해서 // 반복문으로 화면에 표시
<template>
  <div>
    <!-- 부트스트랩 테이블 넣기 -->
    <table class="table">
      <!-- TODO: 테이블 제목 -->
      <thead>
        <tr>
          <th scope="col">cid</th>
          <th scope="col">fullName</th>
          <th scope="col">email</th>
          <th scope="col">phone</th>
        </tr>
      </thead>
      <tbody>
        <!-- TODO: tr태그 반복문 대상 -->
        <!-- 반복문 : v-for -->
        <tr v-for="(data, index) in customer" :key="index">
          <td>{{ data.cid }}</td>
          <td>{{ data.fullName }}</td>
          <td>{{ data.email }}</td>
          <td>{{ data.phone }}</td>
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
      customer: [], // 빈배열 준비
    };
  },
  methods: {
    async getCustomers() {
      try {
        // CustomerService.js import getAll() 실행
        let response = await axios.get("http://localhost:8080/customer.json");
        console.log(response.data);
        this.customer = response.data; // customer.json
      } catch (error) {
        console.log(error);
      }
    },
  },
  // 최초 이페이지가 뜰때 자동실행됨
  mounted() {
    this.getCustomers();
  },
};
</script>
<style></style>

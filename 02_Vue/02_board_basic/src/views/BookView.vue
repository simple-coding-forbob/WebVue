// BookView.vue // vueInit url(/books) // 연습 : book 페이지를 만들고 books.json
파일 // 읽어서 화면에 반복 출력 // cant resolve ~(에러) : 그 파일을 찾을 수
없습니다. // => 오타 등(90%) , import 안됨
<template>
  <div>
    <table class="table">
      <!-- TODO: 테이블 제목 -->
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">title</th>
          <th scope="col">publisher</th>
        </tr>
      </thead>
      <tbody>
        <!-- TODO: tr태그 반복문 대상 -->
        <!-- 반복문 : v-for -->
        <tr v-for="(data, index) in books" :key="index">
          <td>{{ data.id }}</td>
          <td>{{ data.title }}</td>
          <td>{{ data.publisher }}</td>
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
      books: [],
    };
  },
  methods: {
    async getBooks() {
        try {
            let response = await axios.get("http://localhost:8080/books.json");
            console.log(response.data);
            this.books = response.data; // books.json 내용
        } catch (error) {
            console.log(error);
        }
    },
  },
  //   최초 이페이지가 뜰때 자동실행
  mounted() {
    this.getBooks();
  },
};
</script>
<style></style>

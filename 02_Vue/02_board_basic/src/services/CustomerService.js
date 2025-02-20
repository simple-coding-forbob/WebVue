// CustomerService.js
// 연습: axios 함수 작성하고,
// customer.json 파일을 읽어서 화면에 출력
// 단, 비동기 코딩(async/await) 하세요
import axios from "axios";
const baseURL="http://localhost:8080"; // public 폴더를 의미

// 전체조회 함수
const getAll = ()=>{
    // dept.json 파일 읽는 함수 실행 : axios.get(json데이터)
    // TODO: 결과 : 객체배열(json)
    return axios.get(baseURL+"/customer.json");
}

const CustomerService={
    getAll
}

export default CustomerService;
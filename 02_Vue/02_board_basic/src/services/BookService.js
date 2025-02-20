// BookService.js
// axios 함수 정의
import axios from "axios";
const baseURL="http://localhost:8080"; // public 폴더를 의미

// 전체조회 함수
const getAll = ()=>{
    // books.json 파일 읽는 함수 실행 : axios.get(json데이터)
    // TODO: 결과 : 객체배열(json)
    return axios.get(baseURL+"/books.json");
}

// 객체 정의 : 함수 목록 , 속성
const BookService={
    getAll
}

export default BookService; // BookService.getAll() 사용
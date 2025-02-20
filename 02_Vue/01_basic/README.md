# README.md
# 1) vue 실행하기 : 명령프롬프트(터미널) 사용
  npm run serve
# 2) vue 종료하기 : 명령프롬프트(터미널) 사용
  ctrl + C (2번이상)
# 3) 결과 확인 : vue 실행 후 웹브라우저에서 확인
http://localhost:8080/
# vue 코딩 :
  1) 홈화면 : views/HomeView.vue
     => vueInit 단축키 (vue 코딩 템플릿)
  2) {{값}} : 콧수염표기법 (jsp el 표현식 비슷)
  3) 위의 콧수염표기법 : 객체, for/if문 사용불가
# vue 장점 : jsp 보다 장점 : 
  1) 성능 : jsp 는 새로고침시 전체 페이지 새로고침이 발생
    => vue 장점 : 부분 새로고침 (변경된 부분만 새로고침)
# vue 메뉴 만들기 : 
  1) 새페이지         : XxxView.vue 
  2) router/index.js : path 추가 - /xxx 
                       component - XxxView.vue 
  3) 화면에 링크 추가 : App.vue 추가
                      a 태그, router-link 태그 사용
  *) App.vue : Vue 에서 역할 
    => Vue 실행되면 제일 처음 찾는 파일 : App.vue

# vue 컴포넌트 페이지 만들기 : jsp 의 include 와 유사
  1) 컴포넌트 페이지 작성 : components/XxxCom.vue
  2) 다른 vue 에 끼워넣기 : App.vue 에 넣기
     - import 이름 from "경로/파일명";
     -   components:{
            이름     // 컴포넌트명 추가
          }
     - html 부분에서 사용 : <이름 /> 

# vue 바인딩 변수 사용하기 :
  1) data() {
        return {
            hello: "안녕", // 변수
        }
    },
  2) 변수 사용 : {{hello}}
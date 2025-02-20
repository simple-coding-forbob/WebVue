# vue 실행 명령어 : 명령프롬프트
 npm run serve
# vue 종료 
  ctrl + c (여러번 타이핑)
# vue 소스(프로젝트) : 실행파일 없음
# 실행파일 : node-modules 폴더(인터넷다운로드 : 1G이상)
 npm i

# 0) components/HeaderCom.vue 만들기(머리말 페이지)
# 1) 부트스트랩 css/js cdn 링크 넣기 : public/index.html
# 2) DeptView.vue : 부서 페이지
  - 벡엔드 데이터를 화면에 반복문으로 출력
   => springboot : json 데이터 전송
   => vue        : 받아서 화면에 출력 
   (json : 자바스크립트 객체배열 데이터 : [{},{}])
# 3) json 데이터(파일) 읽어서 빈배열(dept) 에 복사
  => 라이브러리의 함수의 도움 : axios.get() 
  => axios 설치 : 명령프롬프트
     npm i axos
     npm i axios (정정)
  => 설치 확인 : package.json (목록 확인: axos => axios)
  => 설치 제거 : npm uninstall axos (잘못 설치버전 제거)
  => 설치 명령어 사용법 : npm i 라이브러리명
  => 삭제 명령어 사용법 : npm uninstall 라이브러리명
# 4) vue : axos 명령어 함수 => services 폴더에 관리
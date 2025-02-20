// components/HeaderCom.vue // vueInit
<template>
  <div>
    <!-- ctrl + alt + l : 자동정렬 -->
    <!-- 머리말 : 부트스트랩 메뉴 -->
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Simple</a>
        <!-- 부트스트랩 메뉴 : 모바일/pc 화면메뉴가 다름 -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- TODO: 대메뉴 -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Basic
              </a>
              <!-- 소메뉴 -->
              <ul class="dropdown-menu">
                <li>
                  <!-- TODO: vue : a(태그) -> router-link(태그:성능좋음) -->
                  <router-link class="dropdown-item" to="/dept">Dept</router-link>
                </li>
                <li>
                  <router-link class="dropdown-item" to="/customer">Customer</router-link>
                </li>
                <li>
                  <router-link class="dropdown-item" to="/books">Books</router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {};
</script>
<style></style>

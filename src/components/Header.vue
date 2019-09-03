<template>
  <header>
    <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-primary">
      <a href="#" class="py-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="d-block mx-auto" role="img" viewBox="0 0 24 24" focusable="false"><title>Product</title><circle cx="12" cy="12" r="10"></circle><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path></svg>
      </a>
      <a href="/" class="navbar-brand">Pizza 点餐系统</a>
      <ul class="navbar-nav">
        <li><router-link to="/" class="nav-link">主页</router-link></li>
        <li><router-link to="/menu" class="nav-link">菜单</router-link></li>
        <li><router-link to="/admin" class="nav-link">管理</router-link></li>
        <li><router-link to="/about" class="nav-link">关于我们</router-link></li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li><router-link to="/login" class="nav-link">登录</router-link></li>
        <li><router-link to="/register" class="nav-link">注册</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<template>
  <div>
    <div class="row mb-5">
      <div class="col-4">
        <!-- 左侧导航 -->
        <div class="list-group mb-5">
          <router-link tag="li" class="nav-link" :to="{name:'newsPage'}">
            <a class="list-group-item list-group-item-action">新闻资讯</a>
          </router-link>
          <router-link tag="li" class="nav-link" :to="{name:'contactPage'}">
            <a class="list-group-item list-group-item-action">联系我们</a>
          </router-link>
        </div>
      </div>
      <div class="col-8">
        <!-- 左侧导航响应内容 -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

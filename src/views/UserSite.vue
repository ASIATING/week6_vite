<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light navbarColor">
  <div class="container ">
    <a class="navbar-brand" href="#"><img src="/pawprint_1076928.png" alt=""></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
      <li class="nav-item active">
        <RouterLink to="/"  class="nav-link">首頁</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/products" class="nav-link" >產品頁面</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/cart" class="nav-link">購物車頁面</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/admin/products" class="nav-link">後台商品列表</RouterLink>
      </li>
    </ul>
    </div>
  </div>
</nav>
    <!-- <h5>使用者-首頁</h5>
    <RouterLink to="/" active-class="active">首頁</RouterLink> |
    <RouterLink to="/products" active-class="active">產品頁面</RouterLink> |
    <RouterLink to="/product" active-class="active">產品詳細頁面</RouterLink> |
    <RouterLink to="/cart" active-class="active">購物車頁面</RouterLink> |
    <RouterLink to="/admin/products" active-class="active">後台商品列表</RouterLink> -->

  </div>
  <RouterView />
  <footerArea />
</template>

<script>
import footerArea from '@/components/front/footerArea.vue'
export default {
  components: {
    footerArea
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.navbarColor{
  background-color: #ffe0b2;
}
</style>

<template>
  <div>
  <div>
    <h5>使用者-首頁</h5>
    <RouterLink to="/" active-class="active">首頁</RouterLink> |
    <RouterLink to="/products" active-class="active">產品頁面</RouterLink> |
    <RouterLink to="/product" active-class="active">產品詳細頁面</RouterLink> |
    <RouterLink to="/cart" active-class="active">購物車頁面</RouterLink> |
    <RouterLink to="/admin/products" active-class="active">後台商品列表</RouterLink>
    123

  </div>
  <RouterView />
</div>
</template>

<script>

export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
</style>

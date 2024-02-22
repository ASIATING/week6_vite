<template>
  <div>
  <div>
    <h5>後台-首頁</h5>
    <RouterLink to="/">回到前台</RouterLink> |
    <RouterLink to="/admin/products">後台產品列表</RouterLink> |
    <RouterLink to="/admin/orders">後台訂單</RouterLink> |
    <a href="#" @click="logout">登出</a>

  </div>
  <RouterView />
</div>
</template>

<script>
import axios from 'axios'
export default {
  mounted () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    axios.defaults.headers.common.Authorization = token
    this.checkLogin()
  },
  data () {
    return {
      apiUrl: import.meta.env.VITE_API
      // import.meta.env.VITE_PATH
    }
  },
  methods: {
    checkLogin () {
      axios.post(`${this.apiUrl}/api/user/check`)
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          alert(err.response.data.message)
          this.$router.push('/login')
        })
    },
    logout () {
      axios.post(`${this.apiUrl}/logout`)
        .then(res => {
          console.log(res)
          this.$router.push('/')
        })
        .catch(err => {
          alert(err)
        })
    }
  }
}
</script>

<style scoped>
</style>

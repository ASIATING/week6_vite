import { defineStore } from 'pinia'
import axios from 'axios'
// import Swal from 'sweetalert2'
const { VITE_API, VITE_PATH } = import.meta.env
export default defineStore('counter', {
  state: () => ({
    count: 0,
    isLoading: true,
    products: [],
    cart: {
    },
    qty: 1,
    loadingItem: '',
    pagination: {},
    selectedOption: ''
  }),
  actions: {
    increment () {
      this.count += 1
    },
    getProducts (page) {
      console.log('piniagetProductsNEW')
      this.isLoading = true
      let url = `${VITE_API}/api/${VITE_PATH}/products?page=${page || 1}`
      if (this.selectedOption !== '') {
        url = `${VITE_API}/api/${VITE_PATH}/products?category=${this.selectedOption}&page=${page || 1}`
      }
      axios.get(url)
        .then(res => {
          this.isLoading = false
          this.pagination = res.data.pagination
          console.log(this.pagination)
          this.products = res.data.products
          console.log(this.products)
        })
        .catch(err => {
          this.isLoading = false
          alert(err.response.data.message)
        })
    },
    serchBtn (tempCategory) {
      console.log('serchBtn')
      this.selectedOption = tempCategory
      this.getProducts()
    }

  }
})

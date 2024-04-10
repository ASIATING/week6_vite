import { defineStore } from 'pinia'
import axios from 'axios'
// import Swal from 'sweetalert2'
const { VITE_API, VITE_PATH } = import.meta.env
export default defineStore('productStore', {
  state: () => ({
    count: 0,
    isLoading: true,
    products: [],
    cart: {
    },
    productInfo: {
      imagesUrl: [],
      content: ''
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
      this.isLoading = true
      let url = `${VITE_API}/api/${VITE_PATH}/products?page=${page || 1}`
      if (this.selectedOption !== '') {
        url = `${VITE_API}/api/${VITE_PATH}/products?category=${this.selectedOption}&page=${page || 1}`
      }
      axios.get(url)
        .then(res => {
          this.pagination = res.data.pagination
          this.products = res.data.products
          this.isLoading = false
        })
        .catch(err => {
          alert(err.response.data.message)
          this.isLoading = false
        })
        // .finally(
        //   this.isLoading = false
        // )
    },
    serchBtn (tempCategory) {
      this.selectedOption = tempCategory
      this.getProducts()
    },
    getProductInfo (id) {
      const url = `${VITE_API}/api/${VITE_PATH}/product/${id}`
      axios.get(url)
        .then(res => {
          this.productInfo = res.data.product
        })
        .catch(err => {
          alert(err.response.data.message)
        })
    }

  }
})

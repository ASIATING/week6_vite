<template>
        <div id="DelProductModal" ref="DelProductModal" class="modal fade" tabindex="-1" aria-labelledby="DelProductModalLabel"
      aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 id="DelProductModalLabel" class="modal-title">
              <span>刪除{{ apiMethod }}</span>
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            是否刪除
            <strong class="text-danger">{{ item.title }}</strong> 項目(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
              取消
            </button>
            <button type="button" class="btn btn-danger" @click="delProduct">
              確認刪除
            </button>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  props: ['item', 'apiMethod'],
  data () {
    return {
      apiUrl: 'https://vue3-course-api.hexschool.io/v2',
      apiPath: 'ting-hexschool',
      DelProductModal: null
    }
  },
  mounted () {
    this.DelProductModal = new window.bootstrap.Modal(this.$refs.DelProductModal, {
      keyboard: false,
      backdrop: 'static'
    })
  },
  methods: {
    delProduct () {
      axios.delete(`${this.apiUrl}/api/${this.apiPath}/admin/${this.apiMethod}/${this.item.id}`).then(() => {
        this.hideModal()
        this.$emit('update')
      }).catch((err) => {
        alert(err.response.data.message)
      })
    },
    openModal () {
      this.DelProductModal.show()
    },
    hideModal () {
      this.DelProductModal.hide()
    }
  }
}
</script>

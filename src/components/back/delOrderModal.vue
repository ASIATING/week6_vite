<template>
        <div id="delOrderModal" ref="delOrderModal" class="modal fade" tabindex="-1" aria-labelledby="delOrderModalLabel"
      aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 id="delOrderModalLabel" class="modal-title">
              <span>刪除訂單</span>
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            是否刪除
            <strong class="text-danger">{{ item.id }}</strong> 訂單(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
              取消
            </button>
            <button type="button" class="btn btn-danger" @click="delOrder">
              確認刪除
            </button>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import axios from 'axios'
import * as bootstrap from 'bootstrap'
export default {
  props: ['item'],
  data () {
    return {
      apiUrl: 'https://vue3-course-api.hexschool.io/v2',
      apiPath: 'ting-hexschool',
      delOrderModal: null
    }
  },
  mounted () {
    this.delOrderModal = new bootstrap.Modal(this.$refs.delOrderModal, {
      keyboard: false,
      backdrop: 'static'
    })
  },
  methods: {
    delOrder () {
      axios.delete(`${this.apiUrl}/api/${this.apiPath}/admin/Order/${this.item.id}`).then((response) => {
        this.hideModal()
        this.$emit('update')
      }).catch((err) => {
        alert(err.response.data.message)
      })
    },
    openModal () {
      this.delOrderModal.show()
    },
    hideModal () {
      this.delOrderModal.hide()
    }
  }
}
</script>

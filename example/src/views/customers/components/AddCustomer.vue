<template>
  <wb-modal class="add-customer">
    <wb-nav :title="title" left-text="取消" right-text="保存" @click-left="cancel" @click-right="$debounce(save)" />
    <wb-content keyboard-handler>
      <div style="text-align:center;margin-top:50px;">
        新增用户
      </div>
    </wb-content>
    <!-- <contact-list ref="contactList" /> -->
  </wb-modal>
</template>
<script>
export default {
  name: 'AddCustomer',
  props: {
    title: {
      default: '',
      type: String
    },
    isEdit: Boolean,
    info: {
      default: function() {
        return {}
      },
      type: Object
    }
  },
  data() {
    return {
      name: { text: this.info.name || '', error: false, msg: '' },
      type: { value: this.info.type, error: false, msg: '' },
      subtype: { value: this.info.subtype, error: false, msg: '' },
      remark: { text: this.info.remark || '', error: false, msg: '' }
    }
  },
  methods: {

    cancel() {
      this.$popPage()
    },

    save() {
      this.$popPage(this.info, 300)
    }
  }
}
</script>
<style lang="scss">
.add-customer{
  .my-textarea{
    padding-top:5px;
  }
}

</style>


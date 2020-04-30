<template>
  <div class="my-projects">
    <!-- 头部导航栏 -->
    <wb-nav
      title="客户"
    />

    <!-- 列表部分 -->
    <wb-content has-footer>
      <div class="my-button" @click="addCustomer">
        新增
      </div>
      <div class="my-button" @click="customerDetail">
        详情
      </div>
    </wb-content>
  </div>
</template>

<script>
import AddCustomer from './components/AddCustomer'
import CustomerDetail from './components/CustomerDetail'
export default {
  methods: {
    // 添加商机
    addCustomer() {
      // 加上防抖，防止用户多次点击
      this.$pushPage(AddCustomer, { title: '新建客户' }).onPageClose((data) => {
        if (data) {
          console.log(data)
        }
      })
    },
    customerDetail() {
      this.$pushPage(CustomerDetail, { title: '新建客户' }).onPageClose((data) => {
        if (data) {
          console.log(data)
        }
      })
    }
  }
}
</script>

<style lang="scss">
  .my-projects {
    .van-nav-bar__title {
      max-width: 83%;
    }
    .van-nav-bar__right{
      padding-right:0px;
    }
    .van-popup {
      .van-button {
        border-radius: 0px;
      }
    }
    .van-swipe-cell__right{
      width:90px;
    }
    .my-button{
      margin-top:30px;
      text-align: center;
      color:#fff;
      background: rgba(0, 110, 255, 0.884);
      height:50px;
      line-height: 50px;
    }
  }
</style>

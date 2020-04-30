# mobile-page-loader

### 说明
```
 使用vue开发移动端页面，vue-router不是很灵活，因此特开发针对移动端页面的加载器，支持组件传参与回调传参，使页面之间的数据交互更加灵活方便。
```
### 安装
```
npm install mobile-page-loader

```
### 实现效果
 ![image](https://raw.githubusercontent.com/2018Cool/mobile-page-loader/master/assets/%E6%BC%94%E7%A4%BA.gif)
### 使用示例
```
使用方法和示例见example目录；使用此页面加载器加载的component的必须基于WbPage或者WbModal实现。
```
### 页面间传参和回传说明
```
//显示页面
this.$pushPage(page,{props}).onClosePage((data)=>{
  回调数据处理
})

// 弹出页面
this.$popPage(data,delay)   //data为回调数据屏，可选参数；delay页面回调延时，默认为0,可选参数

//页面返回传参的两种方式
1. 使用$popPage直接传参
   如：this.$popPage(data)
2. 使用$callbackData
  先对$callbackData赋值然后调用$popPage
  this.$callbackData = {a:1}
  this.$popPage()  //如果使用this.$popPage(data),将会覆盖$callbackData
```

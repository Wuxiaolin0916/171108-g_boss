/*
后台启动服务器的入口模块
1. 引入express
2. 生成应用对象(执行express函数)
3. 注册根路由(使用app的use())
4. 启动服务器(使用app监听指定端口)
 */

const express =require('express')

const app =express()


app.use('/',function (req,res) {
    res.send('hello server')
})

app.listen('3000',function () {
    console.log('start server at port 3000')
})
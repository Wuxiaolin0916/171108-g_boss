const mongoose =require ('mongoose') //连接数据库

mongoose.connect('mongodb://localhost:27017/gboss_test')//

const conn =mongoose.connection //获取连接对象

conn.on('connected',function () {
    console.log('数据连接成功')//绑定连接完成的监听 用来提示连接成功
})



//得到对应的特定集合的Model

//字义Schema 描述文档结构

const userSchema = mongoose.Schema({
  //配置对象
    // 用户名
    'name': {type: String, 'required': true},
    // 密码
    'pwd': {type: String, 'required': true},
    // 类型
    'type': {'type': String, 'required': true},
    // 头像
    'avatar': {'type': String},
    // 个人简介或者职位简介
    'desc': {'type': String},
    // 职位名
    'title': {'type': String},
    // 如果你是boss 还有两个字段
    // 公司名称
    'company': {'type': String},
    // 工资
    'money': {'type': String}
});

//定义Model  与集合对应 可以操作集合

const UserModel =mongoose.model('user',userSchema);

// 通过Model 的实例的 save() 添加数据

function testSave() {
    const user ={
        name: 'Jack',
        pwd: '123',
        type: 'genius',
        avatar: 'boy'}
    const userModel = new UserModel(user)
    //保存到数据库
    userModel.save(function (err,user) {
        console.log('save()',err,user)
    })
}

//testSave()


//通过 Model 的find()或findOne() 查询一个或多个数据

function testFind() {
    UserModel.find(function (err,users) {
        console.log('find()',err,users)
    })
    UserModel.findOne({_id:'\'5a69d23dcbe9821448e5f799'},function (err,user) {
        console.log('findOne()',err,user)
    })
}
//testFind()

//通过Model 的findByIdAndUpdate()更新某个数据


function testUpdate() {
    UserModel.findByIdAndUpdate({_id: '5aa7ca295d3ce920f0684702'}, {name: 'BB'}, function (err, user) {
        console.log('findByIdAndUpdate()', err, user)
    })
}

//testUpdate()

//  通过Model的remove()删除匹配的数据
function testRemove() {
    UserModel.remove({_id: '5aa7ca295d3ce920f0684702'}, function (err, result) {
        console.log('remove()', err, result) // { ok: 1, n: 1 }
    })
}
 //testRemove()

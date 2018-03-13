import  React from 'react'
import {NavBar,WhiteSpace,WingBlank,List,InputItem,Button,Radio} from  'antd-mobile'
import Logo from '../../components/logo/logo'
const RadioItem =Radio.RadioItem;
export default class Login extends React.Component{
    /*  constructor(props){
          super(props)
          this.state={
              name:'',
              pwd:'',
              pwd2:'',
              type:'boss'
          }
       }*/

    state={
        name:'',
        pwd:'',
    }

    handsRegister=()=>{
        console.log(this.state)
    }
    goRegister=()=>{
        this.props.history.replace('/register')
    }
    handsChang=(name,val)=>{
        this.setState({[name]:val})
    }

    render(){
        return(
            <div>
                <NavBar>硅谷直聘</NavBar>
                <Logo/>
                <WingBlank>
                    <List>
                        <InputItem onChange={(val)=>this.handsChang('name',val)}>用户名：</InputItem>
                        <WhiteSpace/>
                        <InputItem onChange={(val)=>this.handsChang('pwd',val)} type='password'>密码：</InputItem>
                        <WhiteSpace/>

                        <Button onClick={this.handsRegister} type='primary'>登录</Button>

                        <WhiteSpace/>

                        <Button onClick={this.goRegister}>还没有账户</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}
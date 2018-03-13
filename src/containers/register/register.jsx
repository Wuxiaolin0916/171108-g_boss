import  React from 'react'
import {NavBar,WhiteSpace,WingBlank,List,InputItem,Button,Radio} from  'antd-mobile'
import Logo from '../../components/logo/logo'

const RadioItem =Radio.RadioItem;

export default class Register extends React.Component{
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
      pwd2:'',
      type:'boss'
  };

    handsRegister=()=>{
     console.log(this.state)
    };
    goLogin=()=>{
        this.props.history.replace('/login')
    };
    handsChang=(name,val)=>{
        this.setState({[name]:val})
    };

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
                        <InputItem onChange={(val)=>this.handsChang('name',val)} type='password'>确认密码：</InputItem>

                        <RadioItem checked={this.state.type ==='genius'}
                           onClick={()=>this.handsChang('type','genius')} > 牛人</RadioItem>

                        <WhiteSpace/>

                        <RadioItem checked={this.state.type ==='boss'}
                          onClick={()=>this.handsChang('type','boss')}>boss</RadioItem>

                        <WhiteSpace/>

                        <Button onClick={this.handsRegister} type='primary'>注册</Button>

                        <WhiteSpace/>

                        <Button onClick={this.goLogin}>已有账号</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}
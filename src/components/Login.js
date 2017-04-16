import React, { Component } from 'react';
import {
  StyleSheet,
  View, 
  Text,
  Image
} from 'react-native';
import {
   InputItem,
   List,
   WingBlank,
   Button,
   Toast
} from "antd-mobile";
import Back from './Back';
import Logo from '../images/car.png';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      phone:'', 
      pwd:''
    };
    this.submit = this.submit.bind(this);
  }
  changePhone(e) {
    this.setState({phone:e})
  }
  changePwd(e) {
    this.setState({pwd:e})
  }
  submit() {
    let {
      phone, pwd
    } = this.state;
    if(phone.length > 0 && pwd.length > 0) {
      Toast.success('正在登录',1,()=>this.props.setPage('operation'))
    } else {
      alert('输入不完整');
    }
  }
  render() {
    let {
      phone, 
      pwd
    } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.logoview}>
          <Image source={Logo} style={styles.logo}/>
          <Text style={styles.title}>导航车移动端模拟遥控器</Text>
        </View>

        <WingBlank>
          <List style={styles.list}>
            <InputItem
              onChange={(e)=>this.changePhone(e)}
              value={phone}
              type="phone"
              placeholder="请输入账号"
            >账号</InputItem>
            <InputItem
              onChange={(e)=>this.changePwd(e)}
              value={pwd}
              type="password"
              placeholder="请输入密码"
            >密码</InputItem>
          </List>
          <Button 
            onClick={()=>this.submit()}
            type="primary">登录</Button>
        </WingBlank>
      </View>
    )
  }
}

const styles = StyleSheet.create({
	container: {
    flexDirection:'column', 
		flex: 1,
		justifyContent : 'center',
	},
  logoview: {
    justifyContent:'center',
    alignItems:'center',
    marginBottom:60,
  },
  title:{
    marginTop:20,
    fontSize:20,
  },
	logo: {
    display:'flex',
    width:120,
    height:80
  },
  list: {
    marginBottom:20
  }
});

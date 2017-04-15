import React, { Component } from 'react';
import {
  View, 
  Text
} from 'react-native';
import {
  Button
} from 'antd-mobile';
import Login from './Login';
import Back from './Back';
import Operation from './Operate/App';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      current:'Login'
    }
  }
  setPage(e) {
    this.setState({current:e});
  }
  render() {
    return (   
      <Back>
        {
          this.state.current == 'Login' ?
          <Login {...this.state} setPage={(e)=>this.setPage(e)}/>:<Operation/>
        }
      </Back>
    )
  }
}
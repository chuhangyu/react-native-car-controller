import React, { Component } from 'react';
import {
  View, 
  PanResponder,
  StyleSheet,
  Text,
  Image
} from 'react-native';
import round from '../../images/round.png';

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventName:'', 
      pos:''
    };
    this.muPanResponder = {};
  }

  componentWillMount() {
    this.myPanResponder = PanResponder.create({
      onStartShouldSetPanResponder:(evt, gestureState) => true,
      onStartShouldSetPanResponderCapture:(evt, gestureState) =>true,
      onMoveShouldSetPanResponder:(evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture:(evt, gestureState) => true,
      onPanResponderTerminationRequest:(evt, gestureState)=>true,
      onPanResponderGrant:(evt, gestureState) => {
        this.state.eventName = "触摸开始";
        this.forceUpdate();
      },
      onPanResponderMove:(evt, gestureState) => {
        var _pos = 'x:' + gestureState.moveX.toFixed(1) + ',y:'+gestureState.moveY.toFixed(1);
        this.setState({eventName:'移动', pos:_pos});
      },
      onPanResponderRelease:(evt, gestureState) => {
        this.setState({eventName:'抬手'});
      },
      onPanResponderTerminate:(evt, gestureState) => {
        this.setState({
          eventName:'另一个组件已经成为了新响应者'
        })
      }
    });
  }

  render() {
    return (
      <View 
        style={styles.himiViewStyle}>
        <View>
          <Image 
          {...this.myPanResponder.panHandlers}
          source={round}></Image>
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>{this.state.eventName}</Text>
          <Text style={styles.text}>{this.state.pos}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1, 
    flexDirection:'row', 
    justifyContent:'center', 
    alignItems:'center', 
    backgroundColor:'#f5fcef'
  }, 
  text:{
    color:'#f00', 
    fontSize:30
  },
  himiViewStyle:{
    flex:1, 
    flexDirection:'column', 
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#f5fcef'
  }, 
  himiTextStyle:{
    color:'#f00', 
    fontSize:30,
    marginTop:10
  }
})
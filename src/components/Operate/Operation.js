import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	Image,
  View,
  Text,
	PanResponder
} from 'react-native';
import {
	Button
} from 'antd-mobile';
import Round from '../../images/round.png';

export default class Operation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			eventName:'', 
      pos:'',
			updown:'up'
		};
		this.muPanResponder = {};
	}
	componentWillMount() {
		this.myPanResponder = PanResponder.create({
			onStartShouldSetPanResponder: (evt, gestureState) => true,
			onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
			onMoveShouldSetPanResponder: (evt, gestureState) => true,
			onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
			onPanResponderTerminationRequest: (evt, gestureState) => true,
			onPanResponderGrant: (evt, gestureState) => {
				this.state.eventName = "触摸开始";
				this.forceUpdate();
			},
			onPanResponderMove: (evt, gestureState) => {
				var _pos = 'x:' + gestureState.moveX.toFixed(1) + ',y:' + gestureState.moveY.toFixed(1);
				this.setState({ eventName: '移动', pos:_pos });
				let logdata = this.props.logdata;
				logdata.push(_pos);
				this.props.setLogdata(logdata)
			},
			onPanResponderRelease: (evt, gestureState) => {
				this.setState({ eventName: '抬手' });
			},
			onPanResponderTerminate: (evt, gestureState) => {
				this.setState({
					eventName: '另一个组件已经成为了新响应者'
				})
			}
		});
	}
	render() {
		return (
				<View style={styles.all}>
					<Text>请竖屏操作</Text>

					<View style={styles.container}>
						<View style={styles.roundview}>
							<Image 
								{...this.myPanResponder.panHandlers}
								source={Round} 
								style={styles.round}></Image>
						</View>
						<View style={styles.buttonview}>
							<Button
								onClick={()=>this.setState({updown:'up'})} 
								type={this.state.updown === 'up' ? 'primary' : 'default'} 
								style={styles.buttonup}>
								<Text>上升</Text>
							</Button>
							<Button
								type={this.state.updown === 'down' ? 'primary' : 'default'} 
								onClick={()=>this.setState({updown:'down'})} 
								style={styles.buttondown}>
								<Text>下降</Text>
							</Button>
						</View>
					</View>
					<View style={styles.xydata}>
						<Text style={styles.text}>{this.state.eventName}</Text>
						<Text style={styles.text}>{this.state.pos}</Text>
						<Text style={styles.text}>{this.state.updown}</Text>
					</View>

				</View>
		);
	}
}

const styles = StyleSheet.create({
	all: {
		flexDirection:'column'
	},
	container: {
		flexDirection:'row',
		display:'flex',
		alignItems:'center',
		justifyContent:'space-between'
	},
	roundview: {
		// alignItems:'center', 
		flex:1,
		alignItems:'center',
		justifyContent:'center',
		margin:40,
	},
	round:{
		width:200,
		height:200
	},
	buttonview: {
		flex:1,
		justifyContent:'center',
		marginLeft:30,
		flexDirection:'column'
	},
	buttonup:{
		width:100
	},
	buttondown:{
		marginTop:20,
		width:100,
	},
	text:{
    color:'#f00', 
    fontSize:30
  },
	xydata:{
		alignItems:'center',
		justifyContent:'center'
	}
})

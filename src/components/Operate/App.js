import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	Image,
  View,
  Text
} from 'react-native';
import {
	TabBar
} from 'antd-mobile';
import Operaion from './Operation';
import Log from './Log';

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<TabBar style={styles.TabBar}>
					<TabBar.Item
					title="操作"
          key="操作">
					</TabBar.Item>
					<TabBar.Item
					title="日志"
          key="日志">
					</TabBar.Item>
					<TabBar.Item
					title="我的"
          key="我的">
					</TabBar.Item>
				</TabBar>
				<Text style={styles.text}>123</Text>
      </View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		display:'flex',
		flexDirection:'column-reverse',
		justifyContent:'flex-start'
	},
	text:{
		flex:2
	},
	TabBar:{
		flex:1,
		alignSelf:'flex-start'
	}
})

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
import ScrollableTabView  from 'react-native-scrollable-tab-view';
import Operation from './Operation';
import Log from './Log';
import Mine from './Mine'

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			selectedTab:'tab1',
			logdata:[]
		};
	}
	setLogdata(e) {
		this.setState({logdata:e})
	}
	render() {
		return(
			<TabBar
				unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white">
				<TabBar.Item
					onPress={()=>this.setState({selectedTab:'tab1'})}
					selected={this.state.selectedTab === 'tab1'}
					key="操纵"
					title="操纵">
					<Operation 
						{...this.state} 
						setLogdata={(e)=>this.setLogdata(e)}/>
				</TabBar.Item>
				<TabBar.Item
					onPress={()=>this.setState({selectedTab:'tab2'})}
					selected={this.state.selectedTab === 'tab2'}
					key="数据"
					title="数据">
					<ScrollableTabView>
						<Log
							{...this.state} 
							tabLabel="日志" />
						<Mine tabLabel="我的" />		
					</ScrollableTabView>
				</TabBar.Item>
			</TabBar>
		)
	}
}


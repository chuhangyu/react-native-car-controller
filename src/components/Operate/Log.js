import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	Image,
  View,
  Text
} from 'react-native';
import {
	Table
} from 'antd-mobile';

export default class Log extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}
	render() {
		return (
			<View>
				{this.props.logdata.map((e, l)=>(
					<Text
						key={l}>
					{e}
					</Text>
				))}
			</View>
		);
	}
}

import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

class Chat extends React.Component {
	render(){
		return (
			<View>
				<Text>
					Hello {this.props.name}
				</Text>
			</View>
		);
	}
}

Chat.defaultProps = {
	name: 'John',
};

Chat.propTypes = {
	name: React.PropTypes.string,
};

export default Chat;
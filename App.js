import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View 
} from 'react-native';

import Home from './src/components/Home';
import Chat from './src/components/Chat';

import {
  Router,
  Scene
} from 'react-native-router-flux';

export default class App extends React.Component {
  render() {
    return (
        <Router>
          <Scene key='root' style={{paddingTop: 64}}>
            <Scene key='hame' component={Home} title='Home' />
            <Scene key='chat' component={Chat} title='Chat' />
          </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

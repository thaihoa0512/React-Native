/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
     <NavigatorIOS
     initialRoute={
       {
         Component: MyScene,
        title: 'My initial Scene',
        passProps: {index:1},
       }
     }
     styles={{flex: 1}}
     />
    );
  }
}
class MyScene extends React.Component{
  static propTypes = {
    route: PropTypes.shape(
      {
        title: this.propTypes.string.isRequired,
      }
    ),
    navigator: PropTypes.object.isRequired,
  };
  constructor(props,context){
    super(props,context);
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

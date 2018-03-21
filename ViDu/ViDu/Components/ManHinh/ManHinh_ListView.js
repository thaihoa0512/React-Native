/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Day la man hinh 1 cua IOS',
  android: 'Day la man hinh 1 cua ANDROID',
});

type Props = {};
export default class ManHinh_ListView extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
       
        <Text style={styles.instructions}>
          {instructions} The hien List View
        </Text>
      </View>
    );
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

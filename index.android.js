/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

class sgmobile extends Component {
  render() {
    return (
        <View style={styles.mainContainer}>
          <View style={styles.rowContainer}>
            <View style={styles.container}>
              <Text style={styles.welcome}>{'VK'}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.welcome}>{'FB'}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.welcome}>{'OK'}</Text>
            </View>
          </View>
          <View style={styles.rowContainer}>
            <View style={styles.container}>
              <Text style={styles.welcome}>{'LiveJournal'}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.welcome}>{'YouTube'}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.welcome}>{'Twitter'}</Text>
            </View>
          </View>
          <View style={styles.rowContainer}>
            <View style={styles.container}>
              <Text style={styles.welcome}>{'PodFM'}</Text>
            </View>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  mainContainer:{
    flex:1,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
  },
  rowContainer:{
    flex:1,
    flexDirection: 'row'
  }
});

AppRegistry.registerComponent('sgmobile', () => sgmobile);

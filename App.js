
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Fb from './screens/fb';
import Insta from './screens/insta'

export default function App() {
  return (
    <View style={styles.container}>
<AppContainer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

var TabNavigator=createBottomTabNavigator({
  Fb:Fb,
  Insta:Insta
})

const AppContainer=createAppContainer(TabNavigator)


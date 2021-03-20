import * as React from 'react';
import { View } from 'react-native';
import HomeScreen from './screen/homeScreen'
import BuzzerScreen from './screen/buzzerScreen'
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}


var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  BuzzerScreen : BuzzerScreen
})

const AppContainer = createAppContainer(AppNavigator)

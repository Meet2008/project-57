import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import AppHeader from '../components/appHeader'
import SoundButton from '../components/soundButton'


export default class BuzzerScreen extends React.Component {
  render(){
    return(
      <View>
        <AppHeader/>
        <SoundButton color={this.props.navigation.getParam('color')}/>
      </View>
    )
  }
}

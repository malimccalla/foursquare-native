import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { MapView } from 'expo';
import axios from 'axios';
import config from './config';

export default class App extends React.Component {
  getData = async () => {
    const data = await axios.get(
      `https://api.foursquare.com/v2/venues/explore?ll=40.7,-74&v=20160601&client_id=VPSWABARGJ4R3K4L0MYHQL3D2DNTU0K1HJGJI4TNVZMTIAKO&client_secret=${config.fsSecret}`
    );
    console.log('DATA', data);
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput autoFocus style={styles.input}/>
        <TouchableOpacity onPress={this.getData} style={styles.button}><Text>Load data</Text></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 50,
    width: 300,
    backgroundColor: '#fff'
  },
  button: {
    height: 50,
    width: 300,
    marginTop: 50,
    backgroundColor: '#e4d100'
  }
});

import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Vibration, Alert } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'World'
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.name}</Text>
        <TextInput onChangeText={(text) => {
          this.setState({ name: text })
        }} />
        <Button title="Who" onPress={() => {
          Vibration.vibrate(1000)
          Alert.alert("Title", `this is ${this.state.name}`, [
            { text: "okay", onPress: () => { console.log("doon") }, style:"okay" },
            { text: "Cancle", onPress: () => { console.log("diin") }, style:"Cancel"}
          ])
        }}></Button>
      </View>
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

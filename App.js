import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }

    this.add = this.add.bind(this)
    this.minus = this.minus.bind(this)
  }

  add() {
    this.setState((prev) => ({ count: prev.count + 1 }));
  }

  minus() {
    this.setState((prev) => ({ count: prev.count - 1 }))
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>React Native Counter</Text>
        </View>
        <View style={styles.main}>
          <Text style={styles.text}>
            {this.state.count}
          </Text>
        </View>
        <View style={styles.main}>
          <Button title="👍" style={styles.button} onPress={this.add} />
          <Button title="👎" style={styles.button} onPress={this.minus} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 2,
    backgroundColor: "#fc1a16",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontWeight: "bold",
    backgroundColor: "grey"
  },
  main: {
    flex: 1,
    flexDirection: 'row'
  },
  button: {
    flex: 1,
    textAlign: "center"
  },
  container: {
    flexDirection: "column",
    height: 100,
    width: 500,
    alignItems: "center",
    justifyContent: "center"
  }
});

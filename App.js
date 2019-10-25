import React, {Component} from 'react';
import {StyleSheet, View, Animated, Text} from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.text = '大家好，这是一个跑马灯例子。'.split('');
    this.animatedValues = this.text.map(v => {
      return new Animated.Value(0);
    });
  }
  componentDidMount() {
    const animations = this.animatedValues.map((v, i) => {
      return Animated.timing(v, {
        toValue: 1,
        duration: 400,
      });
    });
    Animated.sequence(animations).start();
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{fontSize: 14, color: '#fff'}}>
            请您用普通话大声阅读：
          </Text>
        </View>
        <View style={styles.content}>
          {this.animatedValues.map((v, i) => {
            const iv = v.interpolate({
              inputRange: [0, 1],
              outputRange: ['rgb(255, 255, 255)', 'rgb(255, 235, 0)'],
            });
            return (
              <Animated.Text key={i} style={{fontSize: 22, color: iv}}>
                {this.text[i]}
              </Animated.Text>
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  header: {
    marginBottom: 20,
    marginLeft: '5%',
  },
  content: {
    flexDirection: 'row',
    width: '80%',
    marginLeft: '10%',
  },
});

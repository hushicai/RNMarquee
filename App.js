import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.text = '大家好，这是一个跑马灯例子。'.split('');
    this.maxCount = this.text.length;
    this.count = 1;
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.count += 1;
      this.forceUpdate();
      if (this.count >= this.maxCount) {
        clearInterval(this.timer);
      }
    }, 400);
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
          {new Array(this.maxCount).fill(0).map((v, i) => {
            return (
              <Text
                key={i}
                style={
                  i < this.count
                    ? {fontSize: 22, color: 'rgb(255, 235, 0)'}
                    : {fontSize: 22, color: 'rgb(255, 255, 255)'}
                }>
                {this.text[i]}
              </Text>
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

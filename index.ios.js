/**
 * Tony Facts
 * https://github.com/johnwalley/react-native-tony-facts
 * @flow
 */

import React from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import { FactsSwiper } from './src/main';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAd1R5DDlkgnvV9zQzlT1EHsDXakICH9vk",
  authDomain: "tony-facts.firebaseapp.com",
  databaseURL: "https://tony-facts.firebaseio.com",
  storageBucket: "tony-facts.appspot.com",
  messagingSenderId: "657469581471"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
}

function shuffle(a) {
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
}

export default class ReactNativeTonyFacts extends React.Component {
  constructor(props) {
    super(props);

    this.state = { facts: ['Generating facts...'] };

    factsRef = firebaseApp.database().ref('facts/');

    factsRef.on('value', (snap) => {
      const facts = [];
      snap.forEach((child) => { facts.push(child.val()) });
      shuffle(facts);
      this.setState({ facts: facts });
    });
  }

  render() {
    return (
      <View style={styles.container} onLayout={(evt) => this.setState({ width: evt.nativeEvent.layout.width, height: evt.nativeEvent.layout.height })}>
        <FactsSwiper facts={this.state.facts} width={this.state.width} height={this.state.height} />
      </View>
    );
  }
}

AppRegistry.registerComponent('ReactNativeTonyFacts', () => ReactNativeTonyFacts);

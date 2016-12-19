/**
 * Tony Facts
 * https://github.com/johnwalley/react-native-tony-facts
 * @flow
 */

import React from 'react';
import {
  AppRegistry,
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

export default class ReactNativeTonyFacts extends React.Component {
  constructor(props) {
    super(props);

    this.state = { facts: ['Loading'] };

    factsRef = firebaseApp.database().ref('facts/');

    factsRef.on('value', (snap) => {
      const facts = [];
      snap.forEach((child) => { facts.push(child.val()) });
      this.setState({facts: facts.concat(facts).concat(facts)});
    });
  }

  render() {
    return (
      <FactsSwiper facts={this.state.facts}/>
    );
  }
}

AppRegistry.registerComponent('ReactNativeTonyFacts', () => ReactNativeTonyFacts);

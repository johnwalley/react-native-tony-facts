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

    this.itemsRef = firebaseApp.database().ref();

    console.log(this.itemsRef);

    itemsRef.on('value', (snap) => {
      console.log(snap);
    });
  }

  render() {
    return (
      <FactsSwiper />
    );
  }
}

AppRegistry.registerComponent('ReactNativeTonyFacts', () => ReactNativeTonyFacts);

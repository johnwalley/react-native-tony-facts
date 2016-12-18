/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  AppRegistry,
} from 'react-native';
import { FactsSwiper } from './src/main';

export default class ReactNativeTonyFacts extends React.Component {
  render() {
    return (
      <FactsSwiper />
    );
  }
}

AppRegistry.registerComponent('ReactNativeTonyFacts', () => ReactNativeTonyFacts);

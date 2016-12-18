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

export default class ReactNativeTonyFacts extends React.Component {
  render() {
    return (
      <FactsSwiper />
    );
  }
}

AppRegistry.registerComponent('ReactNativeTonyFacts', () => ReactNativeTonyFacts);

import React from 'react';
import {
  Image,
  Text,
  View
} from 'react-native';
import Swiper from 'react-native-swiper';

const styles = {
  wrapper: {
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  text: {
    color: '#222',
    fontSize: 20,
    textAlign: 'center'
  }
}

export const FactsSwiper = ({facts}) => <Swiper style={styles.wrapper} showsPagination={false} showsButtons>
  {facts.map((fact, i) => <View style={styles.slide} key={i}>
    <Image
      source={require('../img/photo.png')}
      />
    <Text style={styles.text}>{fact}</Text>
  </View>)}
</Swiper>
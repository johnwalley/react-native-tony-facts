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

const facts = [
  "70% of facts are true",
  "70% of Americans are overweight",
  "To the cloud!",
  "70% of people are water",
  "A fully grown Tony can eat its own body weight in just less than 24 hours",
  "Tony and Nigel Farage have never been observed in the same place at the same time",
  "Alpacas are herd animals. A lone alpaca will eventually die",
  "Tonys can't look up",
  "Always stay upwind of a Tony during mating season ",
  "If you laid all of the Tony's in the world end to end, you'd probably catch something ",
  "Eskimos have twenty words for 'Tony'",
  "In space, no one can hear you say Tony",
  "The imaginary musical 'Lease' has never won a Tony award",
  "A Tony has bilateral but not rotational symmetry"
];

export const FactsSwiper = () => <Swiper style={styles.wrapper} showsButtons>
  {facts.map((fact, i) => <View style={styles.slide} key={i}>
    <Image
      source={require('../img/photo.png')}
      />
    <Text style={styles.text}>{fact}</Text>
  </View>)}
</Swiper>
import React from 'react';
import {Dimensions, View} from 'react-native';
import Animated from 'react-native-reanimated';
import hooked from 'react-hook-hooked';

import Slide from '../../components/Slide';
import useOnboarding, {Hooked} from './hooks';

import styles from './styles';

const OnboardingScreen = ({backgroundColor, onScroll}: Hooked) => (
  <View style={styles.container}>
    <Animated.View style={[styles.slider, {backgroundColor}]}>
      <Animated.ScrollView
        horizontal
        snapToInterval={Dimensions.get('window').width}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        bounces={false}
        scrollEventThrottle={1}
        {...{onScroll}}>
        <Slide label="Relaxed" />
        <Slide label="Playful" right />
        <Slide label="Excentric" />
        <Slide label="Funky" right />
      </Animated.ScrollView>
    </Animated.View>
    <View style={styles.footer}>
      <Animated.View style={[styles.overlay, {backgroundColor}]} />
      <View style={styles.content} />
    </View>
  </View>
);

export default hooked(useOnboarding)(OnboardingScreen as any); // lib workaround

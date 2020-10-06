import React from 'react';
import {View} from 'react-native';
import Animated from 'react-native-reanimated';
import hooked from 'react-hook-hooked';

import Slide from '../../components/Slide';
import Subslide from '../../components/Slide/Subslide';
import {screenWidth} from '../../utils/dimensions';

import useOnboarding, {Hooked} from './hooks';
import styles from './styles';

const OnboardingScreen = ({
  backgroundColor,
  onScroll,
  slidesConfig,
  subslideStyle,
  scrollRef,
  ctaPress,
  paginationAnimation,
}: Hooked) => (
  <View style={styles.container} testID="welcome">
    <Animated.View style={[styles.slider, {backgroundColor}]}>
      <Animated.ScrollView
        ref={scrollRef}
        horizontal
        snapToInterval={screenWidth}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        bounces={false}
        scrollEventThrottle={1}
        {...{onScroll}}>
        {slidesConfig.map((slide) => (
          <Slide
            title={slide.title}
            right={slide.right}
            key={slide.title}
            picture={slide.picture}
          />
        ))}
      </Animated.ScrollView>
    </Animated.View>
    <View style={styles.footer}>
      <Animated.View style={[styles.overlay, {backgroundColor}]} />
      <View style={styles.content}>
        <View style={styles.pagination}>
          {slidesConfig.map((_, i) => (
            <Animated.View
              key={i}
              style={[styles.paginationDot, paginationAnimation(i)]}
            />
          ))}
        </View>
        <Animated.View style={[subslideStyle]}>
          {slidesConfig.map((slide, i) => (
            <Subslide
              onPress={ctaPress(i)}
              subtitle={slide.subtitle}
              description={slide.description}
              key={slide.subtitle}
              last={i === slidesConfig.length - 1}
            />
          ))}
        </Animated.View>
      </View>
    </View>
  </View>
);

export default hooked(useOnboarding)(OnboardingScreen as any); // lib workaround

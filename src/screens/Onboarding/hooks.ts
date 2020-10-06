import {useCallback, useRef} from 'react';
import Animated, {
  divide,
  Extrapolate,
  interpolate,
  interpolateColors,
  multiply,
  useValue,
} from 'react-native-reanimated';
import layouts from '../../styles/layouts';
import {screenWidth} from '../../utils/dimensions';
import {onScrollEvent} from '../../utils/onScrollEvent';

const useOnboarding = () => {
  const x = useValue(0);
  const onScroll = onScrollEvent({x});
  const scrollRef = useRef<Animated.ScrollView>(null);

  const slidesConfig = [
    {
      title: 'Relaxed',
      subtitle: 'Find Your Outfits',
      description:
        "Confused about your outfits? Don't worry! Find the best of them",
      color: '#BFEAF5',
      right: false,
    },
    {
      title: 'Playful',
      subtitle: 'Hear it First, Wear it First',
      description:
        'Hating the clothes in your wardrobe? Explore hundreds of outfits ideas',
      color: '#BEECC4',
      right: true,
    },
    {
      title: 'Excentric',
      subtitle: 'Your Style, Your Way',
      description:
        'Create your individual & unique style and look amazing everyday',
      color: '#FFE4D9',
      right: false,
    },
    {
      title: 'Funky',
      subtitle: 'Look Good, Feel Good',
      description:
        'Discover the latest trends in fashion and explore your personality',
      color: '#FFDDDD',
      right: true,
    },
  ];

  const backgroundColor: Animated.Mapping = interpolateColors(x, {
    inputRange: slidesConfig.map((_, i) => screenWidth * i),
    outputColorRange: slidesConfig.map((slide) => slide.color),
  });

  const subslideStyle = {
    ...layouts.container,
    ...layouts.flexRow,
    width: screenWidth * slidesConfig.length,
    transform: [{translateX: multiply(x, -1)}],
  };

  const ctaPress = useCallback(
    (index: number) => () => {
      if (scrollRef.current) {
        scrollRef.current
          .getNode()
          .scrollTo({x: screenWidth * (index + 1), animated: true});
      }
    },
    [],
  );

  const paginationAnimation = (index: number) => {
    const currentIndex = divide(x, screenWidth);

    const opacity = interpolate(currentIndex, {
      inputRange: [index - 1, index, index + 1],
      outputRange: [0.5, 1, 0.5],
      extrapolate: Extrapolate.CLAMP,
    });

    const scale = interpolate(currentIndex, {
      inputRange: [index - 1, index, index + 1],
      outputRange: [1, 1.25, 1],
      extrapolate: Extrapolate.CLAMP,
    });

    return {
      opacity,
      transform: [{scale}],
    };
  };

  return {
    ctaPress,
    scrollRef,
    onScroll,
    backgroundColor,
    slidesConfig,
    subslideStyle,
    paginationAnimation,
  };
};

export type Hooked = ReturnType<typeof useOnboarding>;
export default useOnboarding;

import {useCallback, useRef} from 'react';
import Animated, {
  interpolateColors,
  multiply,
  useValue,
} from 'react-native-reanimated';
import {screenWidth} from '../../utils/dimensions';
import {onScrollEvent} from '../../utils/onScrollEvent';

const useOnboarding = () => {
  const x = useValue(0);
  // TODO: useScrollEvent?
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

  return {
    ctaPress,
    scrollRef,
    onScroll,
    backgroundColor,
    slidesConfig,
    subslideStyle,
  };
};

export type Hooked = ReturnType<typeof useOnboarding>;
export default useOnboarding;

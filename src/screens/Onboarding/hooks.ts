import {Dimensions} from 'react-native';
import Animated, {interpolateColors, useValue} from 'react-native-reanimated';
import {onScrollEvent} from '../../utils/onScrollEvent';

const useOnboarding = () => {
  const {width} = Dimensions.get('window');
  const x = useValue(0);
  // TODO: useScrollEvent?
  const onScroll = onScrollEvent({x});
  const backgroundColor: Animated.Mapping = interpolateColors(x, {
    inputRange: [0, width, width * 2, width * 3],
    outputColorRange: ['#BFEAF5', '#BEECC4', '#FFE4D9', '#FFDDDD'],
  });

  return {
    onScroll,
    backgroundColor,
  };
};

export type Hooked = ReturnType<typeof useOnboarding>;
export default useOnboarding;

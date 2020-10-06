import {StyleSheet} from 'react-native';
import FONTS from '../../styles/fonts';
import layouts from '../../styles/layouts';
import {screenHeight, screenWidth} from '../../utils/dimensions';

const titleContainerHeight = 100;

const styles = StyleSheet.create({
  container: {
    ...layouts.container,
    width: screenWidth,
  },
  titleContainer: (right: boolean) => ({
    justifyContent: 'center',
    height: titleContainerHeight,
    transform: [
      {translateY: (0.61 * screenHeight - 100) / 2},
      {translateX: right ? screenWidth / 2 - 50 : -screenWidth / 2 + 50},
      {rotate: right ? '-90deg' : '90deg'},
    ],
  }),
  title: {
    fontSize: 80,
    lineHeight: 80,
    fontFamily: FONTS.SFProText_BOLD,
    color: 'white',
    textAlign: 'center',
  },
});

export default styles;

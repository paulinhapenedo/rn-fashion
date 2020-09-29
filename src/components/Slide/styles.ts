import {Dimensions, StyleSheet} from 'react-native';
import layouts from '../../styles/layouts';

const {width, height} = Dimensions.get('window');
const titleContainerHeight = 100;

const styles = StyleSheet.create({
  container: {
    ...layouts.container,
    width,
  },
  titleContainer: (right: boolean) => ({
    justifyContent: 'center',
    height: titleContainerHeight,
    transform: [
      {translateY: (0.61 * height - 100) / 2},
      {translateX: right ? width / 2 - 50 : -width / 2 + 50},
      {rotate: right ? '-90deg' : '90deg'},
    ],
  }),
  title: {
    fontSize: 80,
    lineHeight: 80,
    fontFamily: 'SFProText-Bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default styles;

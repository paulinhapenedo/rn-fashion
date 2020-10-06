import {StyleSheet} from 'react-native';
import layouts from '../../styles/layouts';
import {screenHeight, screenWidth} from '../../utils/dimensions';

const styles = StyleSheet.create({
  container: {
    ...layouts.container,
    backgroundColor: 'white',
  },
  slider: {
    height: 0.61 * screenHeight,
    borderBottomRightRadius: 55,
  },
  footer: {
    ...layouts.container,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  content: {
    ...layouts.container,
    backgroundColor: 'white',
    borderTopLeftRadius: 75,
  },
  pagination: {
    ...layouts.over,
    ...layouts.centered,
    ...layouts.horizontalContainer,
    height: 45,
  },
  paginationDot: {
    width: 8,
    height: 8,
    backgroundColor: '#2cb9b0',
    borderRadius: 4,
    margin: 4,
  },
});

export default styles;

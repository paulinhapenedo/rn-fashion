import {StyleSheet} from 'react-native';
import layouts from '../../styles/layouts';
import {screenHeight} from '../../utils/dimensions';

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
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopLeftRadius: 75,
  },
});

export default styles;

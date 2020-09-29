import {Dimensions, StyleSheet} from 'react-native';
import layouts from '../../styles/layouts';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    ...layouts.container,
    backgroundColor: 'white',
  },
  slider: {
    height: 0.61 * height,
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
});

export default styles;

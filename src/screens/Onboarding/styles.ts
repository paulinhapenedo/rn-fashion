import {StyleSheet} from 'react-native';
import layouts from '../../styles/layouts';
import colors from '../../theme/colors';
import {screenHeight} from '../../utils/dimensions';

const styles = StyleSheet.create({
  container: {
    ...layouts.container,
    backgroundColor: colors.white,
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
    backgroundColor: colors.white,
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
    backgroundColor: colors.primary,
    borderRadius: 4,
    margin: 4,
  },
});

export default styles;

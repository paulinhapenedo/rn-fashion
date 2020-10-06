import {StyleSheet} from 'react-native';
import FONTS from '../../styles/fonts';
import layouts from '../../styles/layouts';

const styles = StyleSheet.create({
  container: {
    ...layouts.centered,
    borderRadius: 25,
    height: 50,
    width: 245,
  },
  label: {
    fontSize: 15,
    fontFamily: FONTS.SFProText_BOLD,
    textAlign: 'center',
  },
});

export default styles;

import {StyleSheet} from 'react-native';
import FONTS from '../../../styles/fonts';
import layouts from '../../../styles/layouts';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 44,
    ...layouts.container,
    ...layouts.centered,
  },
  subtitle: {
    fontFamily: FONTS.SFProText_SEMIBOLD,
    fontSize: 24,
    lineHeight: 30,
    marginBottom: 12,
    color: '#0c0d34',
    textAlign: 'center',
  },
  description: {
    fontFamily: FONTS.SFProText_REGULAR,
    fontSize: 16,
    lineHeight: 24,
    color: '#0c0d34',
    textAlign: 'center',
    marginBottom: 40,
  },
});

export default styles;

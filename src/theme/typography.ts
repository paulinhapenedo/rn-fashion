import {StyleProp, TextStyle} from 'react-native';
import FONTS from '../styles/fonts';
import colors from './colors';

interface typography {
  [key: string]: StyleProp<TextStyle>;
}

const typography: typography = {
  hero: {
    fontSize: 80,
    lineHeight: 80,
    fontFamily: FONTS.SFProText_BOLD,
    color: colors.white,
    textAlign: 'center',
  },
  title: {
    fontSize: 28,
    fontFamily: FONTS.SFProText_SEMIBOLD,
    color: colors.title,
  },
  title2: {
    fontSize: 24,
    lineHeight: 30,
    fontFamily: FONTS.SFProText_SEMIBOLD,
    color: colors.title,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: FONTS.SFProText_REGULAR,
    color: colors.body,
  },
};

export default typography;

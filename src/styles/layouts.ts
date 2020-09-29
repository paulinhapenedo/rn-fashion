import {StyleSheet} from 'react-native';

export const defaultHitSlop = {
  bottom: 25,
  left: 25,
  right: 25,
  top: 25,
};

const Constants = {
  defaultMargin: 24,
};

const layouts = StyleSheet.create({
  absolute: {
    position: 'absolute',
  },
  alignCenter: {
    alignItems: 'center',
  },
  centerHorizontal: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  centerVertical: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  defaultHorizontalMargin: {
    marginHorizontal: Constants.defaultMargin,
  },
  defaultHorizontalPadding: {
    paddingHorizontal: Constants.defaultMargin,
  },
  defaultPaddingTop: {
    paddingTop: Constants.defaultMargin,
  },
  flexRow: {
    flexDirection: 'row',
  },
  fullWidth: {
    width: '100%',
  },
  halfWidth: {
    width: '50%',
  },
  horizontalContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  over: {
    ...StyleSheet.absoluteFillObject,
  },
  wrapWidth: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  disabled: {
    opacity: 0.5,
  },
  absoluteWithMargin: {
    position: 'absolute',
    left: Constants.defaultMargin,
    right: Constants.defaultMargin,
  },
});

export default layouts;

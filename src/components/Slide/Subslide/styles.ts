import {StyleSheet} from 'react-native';
import layouts from '../../../styles/layouts';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 44,
    ...layouts.container,
    ...layouts.centered,
  },
  subtitle: {
    marginBottom: 12,
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    marginBottom: 40,
  },
});

export default styles;

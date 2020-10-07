import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {ThemeContext} from '../../../theme';

import Button from '../../Button';

import styles from './styles';

interface SubslideProps {
  subtitle: string;
  description: string;
  last?: boolean;
  onPress: () => void;
}

const Subslide = ({description, subtitle, last, onPress}: SubslideProps) => {
  const theme = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <Text style={[theme.typography.title2, styles.subtitle]}>{subtitle}</Text>
      <Text style={[theme.typography.body, styles.description]}>
        {description}
      </Text>

      <Button
        onPress={onPress}
        label={last ? "Let's get started" : 'Next'}
        variant={last ? 'primary' : 'default'}
      />
    </View>
  );
};

export default Subslide;

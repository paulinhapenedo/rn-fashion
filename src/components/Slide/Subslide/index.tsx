import React from 'react';
import {Text, View} from 'react-native';

import Button from '../../Button';

import styles from './styles';

interface SubslideProps {
  subtitle: string;
  description: string;
  last?: boolean;
  onPress: (i: number) => void;
}

const Subslide = ({description, subtitle, last, onPress}: SubslideProps) => (
  <View style={styles.container}>
    <Text style={styles.subtitle}>{subtitle}</Text>
    <Text style={styles.description}>{description}</Text>

    <Button
      onPress={onPress}
      label={last ? "Let's get started" : 'Next'}
      variant={last ? 'primary' : 'default'}
    />
  </View>
);

export default Subslide;

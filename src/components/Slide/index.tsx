import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

interface SlideProps {
  label: string;
  right?: boolean;
}

const Slide = ({label, right}: SlideProps) => (
  <View style={styles.container}>
    <View style={styles.titleContainer(right)}>
      <Text style={styles.title}>{label}</Text>
    </View>
  </View>
);

export default Slide;

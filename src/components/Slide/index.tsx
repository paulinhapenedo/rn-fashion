import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

interface SlideProps {
  title: string;
  right?: boolean;
}

const Slide = ({title, right}: SlideProps) => (
  <View style={styles.container}>
    <View style={styles.titleContainer(right)}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </View>
);

export default Slide;

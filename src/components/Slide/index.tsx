import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './styles';

interface SlideProps {
  title: string;
  right?: boolean;
  picture: number;
}

const Slide = ({title, right, picture}: SlideProps) => (
  <View style={styles.container}>
    <View style={styles.underlay}>
      <Image source={picture} style={styles.picture} />
    </View>
    <View style={styles.titleContainer(right)}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </View>
);

export default Slide;

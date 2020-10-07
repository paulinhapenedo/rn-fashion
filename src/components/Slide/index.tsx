import React, {useContext} from 'react';
import {View, Text, Image} from 'react-native';
import {ThemeContext} from '../../theme';

import styles from './styles';

interface SlideProps {
  title: string;
  right?: boolean;
  picture: number;
}

const Slide = ({title, right, picture}: SlideProps) => {
  const theme = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <View style={styles.underlay}>
        <Image source={picture} style={styles.picture} />
      </View>
      <View style={styles.titleContainer(right)}>
        <Text style={theme.typography.hero}>{title}</Text>
      </View>
    </View>
  );
};

export default Slide;

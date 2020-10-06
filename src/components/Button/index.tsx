import React from 'react';
import {Text} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

import styles from './styles';

interface ButtonProps {
  label: string;
  variant: 'primary' | 'default';
  onPress: () => void;
}

const Button = ({variant = 'default', label, onPress}: ButtonProps) => {
  const backgroundColor = variant === 'primary' ? '#2cb9b0' : '#0c0d3415';
  const color = variant === 'primary' ? 'white' : '#0c0d34';

  return (
    <RectButton style={[styles.container, {backgroundColor}]} onPress={onPress}>
      <Text style={[styles.label, {color}]}>{label}</Text>
    </RectButton>
  );
};

export default Button;

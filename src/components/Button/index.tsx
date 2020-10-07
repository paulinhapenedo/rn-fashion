import React, {useContext} from 'react';
import {Text} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {ThemeContext} from '../../theme';

import styles from './styles';

interface ButtonProps {
  label: string;
  variant: 'primary' | 'default';
  onPress: () => void;
}

const Button = ({variant = 'default', label, onPress}: ButtonProps) => {
  const theme = useContext(ThemeContext);
  const backgroundColor =
    variant === 'primary' ? theme.colors.primary : `${theme.colors.title}15`;
  const color = variant === 'primary' ? theme.colors.white : theme.colors.title;

  return (
    <RectButton style={[styles.container, {backgroundColor}]} onPress={onPress}>
      <Text style={[styles.label, {color}]}>{label}</Text>
    </RectButton>
  );
};

export default Button;

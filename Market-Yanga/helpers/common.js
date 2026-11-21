import { Dimensions } from 'react-native';

export const wp = (percentage) => {
  const { width } = Dimensions.get('window');
  return (percentage * width) / 100;
};

export const hp = (percentage) => {
  const { height } = Dimensions.get('window');
  return (percentage * height) / 100;
};
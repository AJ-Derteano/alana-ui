import { DimensionValue, StyleSheet, View } from 'react-native';
import React from 'react';
import { Colors } from '../theme/Colors';

interface DividerProps {
  width?: DimensionValue | undefined;
  color?: string;
}

const Divider = ({
  width = '100%',
  color = Colors.lightGray,
}: DividerProps) => {
  return (
    <View
      style={[
        styles.divider,
        {
          width,
          borderColor: color,
        },
      ]}
    />
  );
};

export default Divider;

const styles = StyleSheet.create({
  divider: {
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.lightGray,
    marginVertical: 10,
  },
});

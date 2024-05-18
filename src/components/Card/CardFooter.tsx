import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Colors } from '../../theme/Colors';

export interface CardFooterProps {
  children: React.ReactNode;
  light?: boolean;
}

const CardFooter = ({ children, light }: CardFooterProps) => {
  return (
    <View
      style={[styles.container, light ? { borderColor: Colors.lightGray } : {}]}
    >
      {children}
    </View>
  );
};

export default CardFooter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    gap: 10,
    paddingHorizontal: 10,
  },
  topBorder: { borderTopWidth: 1, borderColor: Colors.black },
});

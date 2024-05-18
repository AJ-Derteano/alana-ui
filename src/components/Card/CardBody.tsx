import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Colors } from '../../theme/Colors';

export interface CardBodyProps {
  children: React.ReactNode;
  bordered?: boolean;
  light?: boolean;
}

const CardBody = ({ children, bordered, light }: CardBodyProps) => {
  return (
    <View
      style={[
        styles.padding,
        bordered ? styles.bordered : {},
        light ? { borderColor: Colors.lightGray } : {},
      ]}
    >
      {children}
    </View>
  );
};

export default CardBody;

const styles = StyleSheet.create({
  padding: {
    padding: 10,
  },
  bordered: {
    borderBottomWidth: 1,
    borderColor: Colors.black,
  },
});

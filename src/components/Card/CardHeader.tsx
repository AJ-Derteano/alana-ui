import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Colors } from '../../theme/Colors';

export interface CardHeaderProps {
  children: React.ReactNode;
  bordered?: boolean;
  light?: boolean;
}

const CardHeader = ({ children, bordered, light }: CardHeaderProps) => {
  return (
    <View
      style={[
        styles.headerContainer,
        bordered ? styles.bordered : {},
        light ? { borderColor: Colors.lightGray } : {},
      ]}
    >
      {children}
    </View>
  );
};

export default CardHeader;

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  bordered: {
    borderBottomWidth: 1,
    borderColor: Colors.black,
  },
});

import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { Colors } from '../../lib/commonjs/theme/Colors';

interface CheckBoxProps {
  checked: boolean;
  label?: string;
}

const CheckBox = ({ checked, label }: CheckBoxProps) => {
  return (
    <View style={styles.checkboxContainer}>
      <View
        style={[
          styles.checkbox,

          {
            backgroundColor: checked ? Colors.primary : 'transparent',
            borderColor: checked ? Colors.primary : Colors.black,
          },
        ]}
      >
        {checked && <Entypo name='check' size={28} color={Colors.white} />}
      </View>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
  },
  checkbox: {
    height: 30,
    width: 30,
    borderWidth: 1.5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    verticalAlign: 'middle',
    marginLeft: 10,
  },
});

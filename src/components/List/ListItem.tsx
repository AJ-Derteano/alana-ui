import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '../../theme/Colors';

interface ListItemProps {
  icon?: React.ReactNode;
  label?: string;
  border?: boolean;
  onPress?: () => void;
}

const ListItem = ({ icon, label, border, onPress }: ListItemProps) => {
  return (
    <View
      style={[
        {
          borderBottomWidth: border ? 1 : 0,
          borderBottomColor: Colors.lightGray,
        },
      ]}
    >
      <Pressable
        onPress={onPress}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
        }}
      >
        {icon}
        <Text style={{ marginLeft: 20 }}>{label}</Text>
      </Pressable>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({});

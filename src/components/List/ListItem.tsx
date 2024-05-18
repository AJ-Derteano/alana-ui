import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '../../theme/Colors';

interface ListItemProps {
  icon?: React.ReactNode;
  label?: string;
  border?: boolean;
  children?: React.ReactNode;
  onPress?: () => void;
}

const ListItem = ({
  icon,
  label,
  border,
  children,
  onPress,
}: ListItemProps) => {
  return (
    <View
      style={[
        {
          borderBottomWidth: border ? 1 : 0,
          borderBottomColor: Colors.lightGray,
        },
      ]}
    >
      {children ? (
        <View
          style={{
            paddingLeft: 20,
            paddingVertical: 10,
          }}
        >
          {children}
        </View>
      ) : (
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
      )}
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({});

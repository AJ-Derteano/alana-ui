import { StyleSheet, Text, TextStyle, View } from 'react-native';
import React from 'react';

interface LabelProps {
  children?: React.ReactNode;
  type?: 'text' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  underline?: boolean;
  marginVertical?: number;
  textAlign?: TextStyle['textAlign'];
}

const Label = ({
  children,
  type = 'text',
  underline = false,
  marginVertical = 0,
  textAlign = 'left',
}: LabelProps) => {
  const getFontSize = () => {
    return styles[type ?? 'text'];
  };

  return (
    <View>
      <Text
        style={[
          getFontSize(),
          { marginVertical },
          { textAlign },
          {
            textDecorationLine: underline ? 'underline' : 'none',
          },
        ]}
      >
        {children}
      </Text>
    </View>
  );
};

export default Label;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
  h1: {
    fontSize: 32,
  },
  h2: {
    fontSize: 24,
  },
  h3: {
    fontSize: 20,
  },
  h4: {
    fontSize: 18,
  },
  h5: {
    fontSize: 16,
  },
  h6: {
    fontSize: 14,
  },
});

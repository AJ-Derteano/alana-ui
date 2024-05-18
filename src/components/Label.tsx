import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface LabelProps {
  children?: React.ReactNode;
  type?: 'text' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  underline?: boolean;
}

const Label = ({ children, type = 'text', underline = false }: LabelProps) => {
  const getFontSize = () => {
    return styles[type ?? 'text'];
  };

  return (
    <View>
      <Text
        style={[
          getFontSize(),
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
    marginBottom: 8,
  },
  h2: {
    fontSize: 24,
    marginBottom: 8,
  },
  h3: {
    fontSize: 20,
    marginBottom: 8,
  },
  h4: {
    fontSize: 18,
    marginBottom: 8,
  },
  h5: {
    fontSize: 16,
    marginBottom: 8,
  },
  h6: {
    fontSize: 14,
    marginBottom: 8,
  },
});

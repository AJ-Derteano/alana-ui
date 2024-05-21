import { StyleSheet, Text, TextStyle, View } from 'react-native';
import React from 'react';
import { Theme } from '../theme/Theme';

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
    fontSize: Theme.fontSizes.text,
  },
  h1: {
    fontSize: Theme.fontSizes.h1,
  },
  h2: {
    fontSize: Theme.fontSizes.h2,
  },
  h3: {
    fontSize: Theme.fontSizes.h3,
  },
  h4: {
    fontSize: Theme.fontSizes.h4,
  },
  h5: {
    fontSize: Theme.fontSizes.h5,
  },
  h6: {
    fontSize: Theme.fontSizes.h6,
  },
});

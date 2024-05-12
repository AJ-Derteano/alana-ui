import {
  StyleSheet,
  Text,
  TextInput as Input,
  View,
  Animated,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { Theme } from '../theme/Theme';
import { Colors } from '../theme/Colors';

interface TextInputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
}

const TextInput = ({
  label,
  placeholder,
  value,
  onChangeText,
}: TextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [valueLength, setValueLength] = useState(0);
  const [slideAnim] = useState(new Animated.Value(0));
  const inputRef = useRef(null);

  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(slideAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const handleBlur = () => {
    if (!value && valueLength === 0) {
      setIsFocused(false);
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  };

  useEffect(() => {
    if (value) {
      handleFocus();
    }
  }, []);

  const slideStyle = {
    transform: [
      {
        translateY: slideAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -18],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[slideStyle]}>
        {label && (
          <Text
            style={[
              styles.label,
              {
                color: isFocused ? Colors.primary : Colors.black,
                fontSize: isFocused ? 12 : 16,
              },
            ]}
          >
            {label}
          </Text>
        )}
      </Animated.View>
      <Input
        ref={inputRef}
        value={value}
        placeholder={placeholder}
        onChangeText={(text) => {
          if (onChangeText) {
            onChangeText(text);
          }
          setValueLength(text.length);
          inputRef.current.setNativeProps({ text });
        }}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.black,
    borderRadius: Theme.borderRadius,
    padding: Theme.padding,
    marginVertical: 10,
  },
  label: {
    position: 'absolute',
    top: 2,
    backgroundColor: Colors.white,
    paddingHorizontal: 5,
  },
});

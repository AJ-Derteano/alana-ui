import {
  StyleSheet,
  Text,
  TextInput as Input,
  View,
  Animated,
  KeyboardTypeOptions,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { Theme } from '../theme/Theme';
import { Colors } from '../theme/Colors';

interface TextInputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  icon?: React.JSX.Element | ((props: { color: string }) => React.JSX.Element);
  iconPosition?: 'left' | 'right';
  keyBoardType?: KeyboardTypeOptions;
  color?: string;
  colorFocus?: string;
  borderColor?: string;
  bgLabelColor?: string;
  isPassword?: boolean;
  marginVertical?: number;
  multiline?: boolean;
  onChangeText?: (text: string) => void;
}

const TextInput = ({
  label,
  placeholder,
  value,
  icon,
  iconPosition = 'left',
  keyBoardType = 'default',
  color = Colors.black,
  colorFocus = Colors.primary,
  borderColor = Colors.black,
  bgLabelColor = Colors.white,
  isPassword = false,
  marginVertical = 10,
  multiline = false,
  onChangeText,
}: TextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [valueLength, setValueLength] = useState(0);
  const [slideAnim] = useState(new Animated.Value(0));
  const inputRef = useRef<Input>(null);

  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(slideAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (!value && !placeholder && valueLength === 0) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  };

  useEffect(() => {
    if (value || placeholder) {
      handleFocus();
    }
  }, []);

  const slideStyle = {
    transform: [
      {
        translateY: slideAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -25],
        }),
      },
    ],
  };

  return (
    <View
      style={[
        styles.container,
        {
          borderColor: isFocused ? colorFocus : borderColor,
          flexDirection: iconPosition === 'right' ? 'row-reverse' : 'row',
        },
        {
          marginVertical,
        },
      ]}
    >
      {typeof icon === 'function'
        ? icon?.({ color: isFocused ? colorFocus : borderColor })
        : icon}

      <View style={{ flex: 1 }}>
        <Animated.View style={[slideStyle]}>
          {label && (
            <Text
              style={[
                styles.label,
                {
                  backgroundColor: bgLabelColor,
                  color: isFocused ? colorFocus : borderColor,
                  fontSize: valueLength > 0 || placeholder ? 12 : 16,
                },
              ]}
            >
              {label}
            </Text>
          )}
        </Animated.View>
        <Input
          keyboardType={keyBoardType}
          ref={inputRef}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={color}
          secureTextEntry={isPassword}
          style={[styles.input, { color }]}
          multiline={multiline}
          onChangeText={(text) => {
            if (
              keyBoardType === 'numeric' ||
              keyBoardType === 'phone-pad' ||
              keyBoardType === 'number-pad'
            ) {
              text = text.replace(/\D/g, '');
            }

            if (onChangeText) {
              onChangeText(text);
            }

            setValueLength(text.length);

            if (inputRef.current) {
              inputRef.current.setNativeProps({ text });
            }
          }}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </View>
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
    flexDirection: 'row',
    gap: 5,
    height: 50,
  },
  label: {
    position: 'absolute',
    top: 8,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  input: { minHeight: 40, flex: 1, fontSize: 16 },
});

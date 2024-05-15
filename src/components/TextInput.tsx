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
  onChangeText?: (text: string) => void;
}

const TextInput = ({
  label,
  placeholder,
  value,
  icon,
  iconPosition = 'left',
  keyBoardType = 'default',
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
          outputRange: [0, -18],
        }),
      },
    ],
  };

  return (
    <View
      style={[
        styles.container,
        {
          borderColor: isFocused ? Colors.primary : Colors.black,
          flexDirection: iconPosition === 'right' ? 'row-reverse' : 'row',
        },
      ]}
    >
      {typeof icon === 'function'
        ? icon?.({ color: isFocused ? Colors.primary : Colors.black })
        : icon}

      <View style={{ flex: 1 }}>
        <Animated.View style={[slideStyle]}>
          {label && (
            <Text
              style={[
                styles.label,
                {
                  color: isFocused ? Colors.primary : Colors.black,
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
          style={{ flex: 1 }}
          onChangeText={(text) => {
            if (
              keyBoardType === 'numeric' ||
              keyBoardType === 'phone-pad' ||
              keyBoardType === 'number-pad'
            ) {
              text = text.replace(/[^0-9]/g, '');
            }

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
    flexDirection: 'row',
    gap: 5,
  },
  label: {
    position: 'absolute',
    top: 2,
    backgroundColor: Colors.white,
    paddingHorizontal: 5,
  },
});

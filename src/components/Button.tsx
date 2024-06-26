import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { Colors } from '../theme/Colors';

interface ButtonProps {
  title?: string;
  type?: '' | 'primary' | 'error' | 'success' | 'warning';
  bordered?: boolean;
  borderTop?: boolean;
  borderBottom?: boolean;
  borderColor?: string;
  icon?: React.JSX.Element | ((props: { color: string }) => React.JSX.Element);
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  loadingColor?: string;
  block?: boolean;
  onPress?: () => void;
}

const Button = ({
  type,
  title,
  bordered = true,
  borderTop = false,
  borderBottom = false,
  borderColor = Colors.black,
  icon,
  iconPosition = 'left',
  loading = false,
  loadingColor = type ? Colors.white : Colors.black,
  block = false,
  onPress,
}: ButtonProps) => {
  const getButtonType = () => {
    if (type) {
      return {
        ...styles[type ?? ''],
        ...styles.noBorder,
      };
    }

    return {
      ...styles.default,
      ...(bordered ? {} : styles.noBorder),
      ...(borderTop ? styles.borderTop : {}),
      ...(borderBottom ? styles.borderBottom : {}),
      borderColor,
    };
  };

  const getTextColor = () => {
    const textColors = {
      primary: Colors.white,
      error: Colors.white,
      success: Colors.white,
      warning: Colors.white,
    };

    if (type) {
      return { color: textColors[type] };
    }

    return {
      color: Colors.black,
    };
  };

  return (
    <View
      style={{
        flex: block ? 1 : 0,
      }}
    >
      <TouchableOpacity
        style={{
          ...styles.button,
          ...getButtonType(),
          ...(iconPosition === 'right'
            ? { flexDirection: 'row-reverse' }
            : { flexDirection: 'row' }),
        }}
        onPress={onPress}
      >
        {typeof icon === 'function'
          ? icon?.({ color: type ? Colors.white : Colors.black })
          : icon}
        {loading && !icon && <ActivityIndicator color={loadingColor} />}
        {title && <Text style={[getTextColor()]}>{title}</Text>}
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 5,
  },
  noBorder: {
    borderWidth: 0,
  },
  borderTop: {
    borderTopWidth: 1,
    borderColor: Colors.black,
    borderRadius: 0,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderColor: Colors.black,
    borderRadius: 0,
  },
  default: {
    backgroundColor: Colors.white,
    borderColor: Colors.black,
  },
  primary: {
    backgroundColor: Colors.primary,
  },
  success: {
    backgroundColor: Colors.success,
  },
  error: {
    backgroundColor: Colors.error,
  },
  warning: {
    backgroundColor: Colors.warning,
  },
});

import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Colors } from '../../theme/Colors';
import ListItem from './ListItem';

export interface ListAccordionProps {
  children?: React.ReactNode;
  title?: string;
  icon?: React.JSX.Element;
  border?: boolean;
  expanded?: boolean;
}

const ListAccordion = ({
  children,
  title,
  icon,
  border = false,
  expanded = false,
}: ListAccordionProps) => {
  const [isOpen, setIsOpen] = useState(expanded);
  const [contentHeight, setContentHeight] = useState(0);
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (expanded) {
      Animated.timing(animation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  }, []);

  const toggleAccordion = () => {
    // const initialValue = isOpen ? 1 : 0;
    const finalValue = isOpen ? 0 : 1;
    setIsOpen(!isOpen);

    Animated.timing(animation, {
      toValue: finalValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const animatedHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, contentHeight],
  });

  const animatedOpacity = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return (
    <View>
      <View
        style={[
          styles.accordionHeader,
          {
            borderBottomWidth: border ? 1 : 0,
          },
        ]}
      >
        <View style={styles.titleContainer}>
          {icon}
          <Text style={styles.title}>{title}</Text>
        </View>
        <Pressable
          onPress={() => {
            toggleAccordion();
          }}
        >
          {!isOpen && <AntDesign name='down' size={24} color={Colors.black} />}
          {isOpen && <AntDesign name='up' size={24} color={Colors.black} />}
        </Pressable>
      </View>

      <Animated.View
        style={[
          styles.content,
          { height: animatedHeight, opacity: animatedOpacity },
        ]}
      >
        <View
          style={styles.hiddenContent}
          onLayout={(e) => {
            const { height } = e.nativeEvent.layout;
            setContentHeight(height); // Medir la altura del contenido
          }}
        >
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child) && child.type === ListItem) {
              return React.cloneElement(child, { border } as React.Attributes);
            }

            return child;
          })}
        </View>
      </Animated.View>
    </View>
  );
};

ListAccordion.Item = ListItem;

export default ListAccordion;

const styles = StyleSheet.create({
  accordionHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: Colors.white,
    borderBottomColor: Colors.lightGray,
    marginBottom: 10,
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: { fontSize: 16, color: Colors.black, marginLeft: 15 },
  content: {
    overflow: 'hidden',
  },
  hiddenContent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
  },
});

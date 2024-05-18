import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';
import { Colors } from '../../theme/Colors';

interface CardProps {
  children: React.ReactNode;
  bordered?: boolean;
  light?: boolean;
  shadow?: boolean;
}

const Card = ({ children, bordered, light, shadow }: CardProps) => {
  return (
    <View
      style={[
        styles.cardContainer,
        shadow ? styles.shadow : {},
        bordered ? styles.border : {},
        light ? { borderColor: Colors.lightGray } : {},
      ]}
    >
      {React.Children.map(children, (child) => {
        if (
          (React.isValidElement(child) && child.type === CardHeader) ||
          (React.isValidElement(child) && child.type === CardBody) ||
          (React.isValidElement(child) && child.type === CardFooter)
        ) {
          return React.cloneElement(child, {
            bordered,
            light,
          } as React.Attributes);
        }

        return child;
      })}
    </View>
  );
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 5,
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  border: {
    borderWidth: 1,
    borderColor: Colors.black,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

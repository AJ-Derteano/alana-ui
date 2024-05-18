import { StyleSheet, View } from 'react-native';
import React from 'react';
import ListAccordion from './ListAccordion';
import ListItem from './ListItem';
import Label from '../Label';

interface ListProps {
  children?: React.ReactNode;
  title?: string;
  // ListAccordionProps
  border?: boolean;
}

const List = ({ children, title, border }: ListProps) => {
  return (
    <View>
      {title && <Label type='h4'>{title}</Label>}
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === ListAccordion) {
          return React.cloneElement(child, { border } as React.Attributes);
        }

        return child;
      })}
    </View>
  );
};

List.Accordion = ListAccordion;
List.Item = ListItem;

export default List;

const styles = StyleSheet.create({});

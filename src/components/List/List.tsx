import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ListAccordion from './ListAccordion';
import ListSection from './ListSection';

interface ListProps {
  children?: React.ReactNode;
  title?: string;
  // ListAccordionProps
  border?: boolean;
}

const List = ({ children, title, border }: ListProps) => {
  return (
    <View>
      {title && <Text style={{ fontSize: 20, marginBottom: 15 }}>{title}</Text>}
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
List.Section = ListSection;

export default List;

const styles = StyleSheet.create({});

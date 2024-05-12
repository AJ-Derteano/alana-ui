import { Alert, StyleSheet, Text, View } from 'react-native';
import Button from './src/components/Button';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}>Welcome to Alana UI</Text>

      <Text style={{ fontSize: 20, textDecorationLine: 'underline' }}>
        Components
      </Text>
      <Text>Button:</Text>
      <Button
        title='Default button'
        onPress={() => Alert.alert('Default button pressed')}
        icon={<AntDesign name='unlock' size={24} color={'black'} />}
      />
      <Button
        type='primary'
        title='Primary button'
        onPress={() => Alert.alert('Primary button pressed')}
        icon={({ color }) => (
          <AntDesign name='unlock' size={24} color={color} />
        )}
        iconPosition='right'
      />
      <Button
        type='success'
        title='Success button'
        onPress={() => Alert.alert('Success button pressed')}
        icon={<AntDesign name='unlock' size={24} color={'white'} />}
      />
      <Button
        type='error'
        title='Error button'
        onPress={() => Alert.alert('Error button pressed')}
      />
      <Button
        type='warning'
        title='Warning button'
        onPress={() => Alert.alert('Warning button pressed')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

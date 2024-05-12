import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { Button } from './src';
import { SafeAreaView } from 'react-native-safe-area-context';
import TextInput from './src/components/TextInput';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 20, marginBottom: 15 }}>
        Welcome to Alana UI
      </Text>
      <ScrollView>
        <Text
          style={{
            fontSize: 20,
            textDecorationLine: 'underline',
            marginBottom: 10,
          }}
        >
          Components
        </Text>
        <Text>Buttons:</Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            gap: 10,
            marginBottom: 20,
          }}
        >
          <View
            style={{
              gap: 10,
            }}
          >
            <Button
              title='Default button'
              onPress={() => Alert.alert('Default button pressed')}
            />
            <Button
              type='primary'
              title='Primary button'
              onPress={() => Alert.alert('Primary button pressed')}
              iconPosition='right'
            />
          </View>
          <View
            style={{
              gap: 10,
            }}
          >
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
        </View>

        <Text>Icon Button:</Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            gap: 10,
            marginBottom: 20,
          }}
        >
          <View
            style={{
              gap: 10,
            }}
          >
            <Button
              title='Default button'
              onPress={() => Alert.alert('Default button pressed')}
              icon={<AntDesign name='unlock' size={24} color={'black'} />}
            />
          </View>
          <View
            style={{
              gap: 10,
            }}
          >
            <Button
              type='primary'
              title='Primary button'
              onPress={() => Alert.alert('Primary button pressed')}
              icon={({ color }) => (
                <AntDesign name='unlock' size={24} color={color} />
              )}
              iconPosition='right'
            />
          </View>
        </View>

        <Text>Input text:</Text>
        <View
          style={{
            marginBottom: 20,
          }}
        >
          <TextInput
            label='Label'
            onChangeText={(text) => {
              console.log(text);
            }}
          />
          <TextInput
            label='Label icon left'
            placeholder='Write here'
            onChangeText={(text) => {
              console.log(text);
            }}
            icon={<AntDesign name='search1' size={24} color='black' />}
          />
          <TextInput
            label='Label icon right'
            placeholder='Write here'
            onChangeText={(text) => {
              console.log(text);
            }}
            icon={({ color }) => (
              <AntDesign name='search1' size={24} color={color} />
            )}
            iconPosition='right'
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

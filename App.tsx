import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';

import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { Button } from './src';
import { SafeAreaView } from 'react-native-safe-area-context';
import TextInput from './src/components/TextInput';
import Label from './src/components/Label';

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

        <Text>Icon Buttons:</Text>
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

        <Text>Buttons with loading state</Text>
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
              loading
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
              iconPosition='right'
              loading
            />
          </View>
        </View>

        <Text>
          Buttons with loading state and custom loading color and size
        </Text>
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
              loading
              loadingColor='red'
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
              iconPosition='right'
              loading
              loadingColor='green'
            />
          </View>
        </View>

        <Text>Input text:</Text>
        <View
          style={{
            marginBottom: 20,
          }}
        >
          <TextInput label='Label' />
          <TextInput
            label='Label icon left'
            placeholder='Hello world 🌍'
            icon={<AntDesign name='search1' size={24} color='black' />}
          />
          <TextInput
            label='Label icon right'
            placeholder='Write here'
            icon={({ color }) => (
              <AntDesign name='search1' size={24} color={color} />
            )}
            iconPosition='right'
          />
        </View>

        <Text>Number input:</Text>
        <View
          style={{
            marginBottom: 20,
          }}
        >
          <TextInput label='Label' keyBoardType='numeric' />
          <TextInput
            label='Label icon left'
            placeholder='Write here'
            icon={<FontAwesome name='usd' size={24} color={'black'} />}
            keyBoardType='numeric'
          />
          <TextInput
            label='Label icon right'
            placeholder='Write here'
            icon={({ color }) => (
              <FontAwesome name='usd' size={24} color={color} />
            )}
            iconPosition='right'
            keyBoardType='decimal-pad'
          />

          <Label type='text'>Text label</Label>
          <Label type='h1'>Heading 1</Label>
          <Label type='h2'>Heading 2</Label>
          <Label type='h3'>Heading 3</Label>
          <Label type='h4'>Heading 4</Label>
          <Label type='h5'>Heading 5</Label>
          <Label type='h6'>Heading 6</Label>
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

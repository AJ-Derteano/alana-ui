import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';

import { AntDesign, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { Button, List } from './src';
import { SafeAreaView } from 'react-native-safe-area-context';
import TextInput from './src/components/TextInput';
import Label from './src/components/Label';
import Card from './src/components/Card/Card';
import { Colors } from './src/theme/Colors';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 20, marginBottom: 15 }}>
        Welcome to Alana UI
      </Text>

      <ScrollView>
        <List title='Components'>
          <List.Accordion title='Buttons'>
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
          </List.Accordion>

          <List.Accordion title='Icon buttons'>
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
          </List.Accordion>

          <List.Accordion title='Buttons with loading state'>
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
          </List.Accordion>

          <List.Accordion title='Buttons with loading state and custom loading color and size'>
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
          </List.Accordion>

          <List.Accordion title='Input text'>
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
          </List.Accordion>

          <List.Accordion title='Number input'>
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
            </View>
          </List.Accordion>

          <List.Accordion title='Text label'>
            <Label type='h1'>Heading 1</Label>
            <Label type='h2'>Heading 2</Label>
            <Label type='h3'>Heading 3</Label>
            <Label type='h4'>Heading 4</Label>
            <Label type='h5'>Heading 5</Label>
            <Label type='h6'>Heading 6</Label>
          </List.Accordion>

          <List.Accordion title='Listas'>
            <List title='Lista acordion' border>
              <List.Accordion
                title='Customer service'
                icon={
                  <AntDesign name='customerservice' size={24} color='black' />
                }
              >
                <Text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptates reiciendis quibusdam quae adipisci natus
                  distinctio, et eius a, quis harum sed perferendis ullam?
                  Minima, perferendis ut. Alias libero deserunt vero! Sed
                  tempore ad corrupti, deserunt ipsam et ut, quasi praesentium
                  minus illo cum doloremque quam eum, ab similique incidunt
                  necessitatibus quod repellendus magni? Voluptas quos eos
                  repellendus sunt pariatur soluta!
                </Text>
              </List.Accordion>
              <List.Accordion
                title='Menu options'
                icon={<AntDesign name='folder1' size={24} color='black' />}
              >
                <List.Accordion.Item
                  label='Option 1'
                  border
                  icon={<AntDesign name='reload1' size={24} color='black' />}
                  onPress={() => Alert.alert('Option 1 pressed')}
                />
                <List.Accordion.Item
                  label='Option 2'
                  icon={<AntDesign name='user' size={24} color='black' />}
                  onPress={() => Alert.alert('Option 2 pressed')}
                />
                <List.Accordion.Item
                  label='Option 3'
                  icon={<AntDesign name='setting' size={24} color='black' />}
                  onPress={() => Alert.alert('Option 3 pressed')}
                />
              </List.Accordion>
            </List>

            <List title='Lista simple'>
              <List.Item
                label='Item 1'
                icon={<AntDesign name='folder1' size={24} color='black' />}
                onPress={() => Alert.alert('Item 1 pressed')}
              />
              <List.Item
                label='Item 2'
                icon={<AntDesign name='folder1' size={24} color='black' />}
                onPress={() => Alert.alert('Item 2 pressed')}
              />
              <List.Item
                label='Item 3'
                icon={<AntDesign name='folder1' size={24} color='black' />}
                onPress={() => Alert.alert('Item 3 pressed')}
              />

              <List.Item>
                <Text>Item 4</Text>
              </List.Item>
            </List>
          </List.Accordion>

          <List.Accordion title='Card' expanded>
            <Card bordered light>
              <Card.Header>
                <Label type='h3' >Card header</Label>
              </Card.Header>

              <Card.Body>
                <Label type='text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                  nulla excepturi atque aspernatur quia inventore odio fuga
                  aliquid animi maxime! Ratione possimus aut repellat tempore,
                  nostrum vitae quasi et quis.
                </Label>
              </Card.Body>

              <Card.Footer>
                <Button
                  block
                  bordered={false}
                  borderTop
                  borderBottom
                  borderColor={Colors.lightGray}
                  icon={<AntDesign name='like2' size={24} color='black' />}
                  onPress={() => Alert.alert('I like it')}
                />
                <Button
                  block
                  bordered={false}
                  borderTop
                  borderBottom
                  borderColor={Colors.lightGray}
                  icon={<AntDesign name='hearto' size={24} color='black' />}
                  onPress={() => Alert.alert('I love it')}
                />
                <Button
                  block
                  bordered={false}
                  borderTop
                  borderBottom
                  borderColor={Colors.lightGray}
                  icon={
                    <FontAwesome5 name='surprise' size={24} color='black' />
                  }
                  onPress={() => Alert.alert('Surprised')}
                />
              </Card.Footer>
            </Card>
          </List.Accordion>
        </List>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
});

import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Text,
  View, // == div
  SafeAreaView,
  StatusBar as PhoneStatusBar,
  Platform,
  Image,
  TouchableWithoutFeedback, // for component that doesnt have onPress properties
  TouchableOpacity, // when tapped, opacity beome reduced (effect when the component pressed)
  TouchableHighlight,
  TouchableNativeFeedback, // only for android!
  Button,
  Alert, // to customize alert (not element)
} from 'react-native';

import logo from './assets/favicon.png'

export default function App() {

  const [count, setCount] = useState(0);
  
  const handlePress = (e) => {
    setCount(prev => prev + 1)
  }

  const handleButtonClick = () => {
    Alert.alert('from button', 'hello world', [
      {text: 'Yes', onPress: alert('kamu pintar')},
      {text: 'No'}
    ]);
  }



  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Gojek</Text>
      </View>

      <Text onPress={() => setCount(0)}>
        Open up App.js to start working on your app!
      </Text>

      <Text
        numberOfLines={2}
        onPress={e => handlePress(e)}
      >
        Hello askldlasm dsaldlsam slakmdmlas dslamdlaskm sdlamdlaksm sdlamdl
        asdjasldsajd lsdlsadls sajdlasjdls dlskadlsajdl dlsdjlasjdl dsldjls
      </Text>

      <Text>{count}</Text>

      <TouchableOpacity onPress={() => console.log('touchable opacity')}>
        <Image source={logo} />
      </TouchableOpacity>

      <TouchableHighlight onPress={() => console.log('touchable hilights')}>
        <Image source={logo} />
      </TouchableHighlight>

      <TouchableNativeFeedback onPress={() => console.log('touchable native feedback (only for android)')}>
        <View style={styles.test} />
      </TouchableNativeFeedback>

      <Button title='Button 1' onPress={handleButtonClick}/>
      
      <StatusBar style='auto' backgroundColor='rgb(0, 182, 0)' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    backgroundColor: 'rgb(0, 182, 0)',
    padding: 10
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: Platform.OS === 'android' ? PhoneStatusBar.currentHeight : 0
  },
  test: {
    width: 200,
    height: 200,
    backgroundColor: 'pink',
  },
});

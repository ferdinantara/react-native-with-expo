import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Nama Kukuh Adji Ferdinantara</Text>
        <Text>Kelas XI RPL 4</Text>
        <Text>NO. 20</Text>
        <Text>my first react native app</Text>

        <Image style={{width: 400, height: 400}} 
        source={require('./images/image1.android.jpg')} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});

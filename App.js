import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Content from './Components/Content';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header /> 
      </View>

      <View>
        <Content />
      </View>
      
      <View style={ styles.footer }>
        <Footer />
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  texto:{
    fontSize:24,
    marginTop: 35,
    marginLeft: 55,
    fontWeight:'bold',
    color:'#0F3F8A',
  },
  footer:{
    // position: 'absolute',
    // bottom:10,
    // left:-10
  }
})


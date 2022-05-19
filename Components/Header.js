// import React from 'react';
import { StyleSheet, Text, Pressable, Image, SafeAreaView, View } from 'react-native';


const Header = () => {
  return (
    <View>
        <Pressable>
            <Image source={require('../images/back.png')} style={ styles.backBtn } />
        </Pressable>

        <Pressable>
            <Image source={require('../images/Close.png')} style={ styles.closeBtn } />
        </Pressable>
        <Text style={styles.texto}>Enviando Dinero</Text>

        <Text style={styles.texto2}> ¿A dónde quieres enviar? </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    texto:{
      fontSize:24,
      marginTop: 37,
      marginLeft: 55,
      fontWeight:'bold',
      color:'#0F3F8A',
    },
    closeBtn:{  
      position:'absolute',
      right:20,
      top:40,
      width: 22,
      height: 22,
      resizeMode: 'contain',
    },
    backBtn:{  
      position:'absolute',
      left:12,
      top:40,
      width: 25,
      height: 25,
      resizeMode: 'contain',
    },
    texto2:{
        textAlign:'left',
        fontSize:24,
        fontWeight:'bold',
        color:'#0F3F8A',
        marginTop: 15,
        marginLeft: 10,
    }
  
  });

export default Header

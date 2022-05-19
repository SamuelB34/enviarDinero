import { StyleSheet, Text, Pressable, Image, SafeAreaView, View } from 'react-native';

const Footer = () => {
  return (
    <View>
        <View style={styles.images}>
            <Image source={require('../images/caribe-express.png')} style={ styles.img } />
            <Image source={require('../images/caribe-express.png')} style={ styles.img } />
            <Image source={require('../images/caribe-express.png')} style={ styles.img } />
        </View>
        <Text style={styles.tinyText}> y más </Text>

        <View style={styles.container}>
            <Image source={require('../images/i-icon.png')} style={ styles.icon }/>
            <Text style={styles.paragraph}>Ten en cuenta que la compañia de su tarjeta de credito podria cobrarte una tarifa adicional por retiro de efectivo</Text>

        </View>

        <View style={styles.btnContainer}>
            <Pressable>
                <Text style={styles.textBtn}> Siguiente </Text>
            </Pressable>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    texto:{
      fontSize:24,
      marginTop: 35,
      marginLeft: 55,
      fontWeight:'bold',
      color:'#0F3F8A',
    },
    images:{
      display:'flex',
      flexDirection: 'row',
      justifyContent:'center',
      marginBottom:15
    },
    img:{
      width: '25%',
      height: 25,
    },
    tinyText:{
        fontSize:15,
        fontWeight:'400',
        textAlign:'center',
        color:'#0F3F8A'
    },
    container:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginRight:70,
        marginLeft:15,
        marginTop:5,
         marginBottom:20
    },
    icon:{
        width: 20,
        height: 25,
        marginRight:15,
    },
    paragraph:{
        textAlign:'justify',
        fontWeight:'500',
        color:'#0F3F8A'
    },
    btnContainer:{
        alignItems:'center',
        backgroundColor:'#0F3F8A',
        marginHorizontal:30,
        padding:2,
        borderRadius:35,
    },
    textBtn:{
        fontWeight:'600',
        fontSize:17 ,
        color:'#fff',
        marginHorizontal:50,
        padding:15,
    }
  
  });

export default Footer
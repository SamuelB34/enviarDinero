import React,{ useState } from 'react';
import { StyleSheet, Text, Pressable, Image, ScrollView, View, TextInput, } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

const countries = [
    {title: 'USA', image: require('../images/USA.png'), currency:'USD'},
    {title: 'MEX', image: require('../images/Mexico.png'), currency:'MXN'},
    {title: 'R. DOM', image: require('../images/RD.png'), currency:'DOP'},
  ];

const Content = () => {
    
const [tarifas, setTarifas ] = useState(false);
const [value, setValue ] = useState({})
const [y, setY ] = useState({})
const [importeEnviar, setImporteEnviar ] = useState()

const cotizacion = () =>{
    if( value.title === 'MEX'){
        
    }
}

  return (
      <View>
      <ScrollView>
        <View style={styles.contenedor}>
            <View style={styles.contenedor2}>
                <SelectDropdown
                    data={countries}
                    defaultValue={{
                        title: 'USA',
                        image: require('../images/USA.png'),
                    }}
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index);
                        {selectedItem ?
                                setValue(selectedItem):
                            <></>
                        }
                    }}
                    buttonStyle={styles.dropdownBtnStyle}
                        renderCustomizedButtonChild={(selectedItem, index) => {
                            console.log(selectedItem)

                            return (
                                    <View style={styles.dropdownBtn}>
                                        <Text style={styles.sending}> Enviando de </Text>
                                        {selectedItem ? (
                                            <>
                                                <Image source={selectedItem.image} style={styles.dropdownBtnImage} /> 
                                                <Text style={styles.dropdownBtnTxt}> { selectedItem.title }</Text> 
                                                
                                            </>
                                        ) : (
                                            <>
                                                <Image source={require('../images/world.png')} style={styles.dropdownBtnImage2} />
                                                <Text style={styles.dropdownBtnTxt}> Pais </Text> 
                                            </>
                                        )}
                                        <Image source={require('../images/dropDownIcon.png')} style={styles.dropdownBtnIcon} />

                                    </View>

                            );
                            
                        }}

                    dropdownStyle={styles.dropdownBG}
                    rowStyle={styles.dropdown3RowStyle}
                    renderCustomizedRowChild={(item, index) => {
                    return (
                        <View>
                            <View style={styles.dropdownStyle}>
                                <Image source={item.image} style={styles.dropdownRowImage} />
                                <Text style={styles.dropdownTxt}>{item.title}</Text>
                            </View>
                        </View>
                    );
                    }}
                />
                <View>

                </View>
                <TextInput 
                    placeholder='100.00'
                    style={styles.input}
                    keyboardType='numeric'
                    onChangeText={setImporteEnviar}
                />
                <Text style={styles.currency}> {value.currency}</Text>

            </View>

            <View style={styles.contenedor3}>
                <SelectDropdown
                        data={countries}
                        defaultValue={{
                            title: 'USA',
                            image: require('../images/USA.png'),
                        }}
                        onSelect={(selectedItem, index) => {
                            {selectedItem ?
                                setY(selectedItem):
                            <></>
                        }
                        }}
                        buttonStyle={styles.dropdownBtnStyle2}
                            renderCustomizedButtonChild={(selectedItem, index) => {
                                return (
                                        <View style={styles.dropdownBtn}>
                                            <Text style={styles.sending}> Enviando a:  </Text>
                                            {selectedItem ? (
                                            <>
                                                <Image source={selectedItem.image} style={styles.dropdownBtnImage} /> 
                                                <Text style={styles.dropdownBtnTxt}> { selectedItem.title }</Text> 
                                                
                                            </>
                                            ) : (
                                                <>
                                                    <Image source={require('../images/world.png')} style={styles.dropdownBtnImage2} />
                                                    <Text style={styles.dropdownBtnTxt}> Pais </Text> 
                                                </>
                                            )}
                                            <Image source={require('../images/dropDownIcon.png')} style={styles.dropdownBtnIcon} />
                                        </View>
                                );
                            }}

                        dropdownStyle={styles.dropdownBG}
                        rowStyle={styles.dropdown3RowStyle}
                        renderCustomizedRowChild={(item, index) => {
                        return (
                                <View style={styles.dropdownStyle}>
                                    <Image source={item.image} style={styles.dropdownRowImage} />
                                    <Text style={styles.dropdownTxt}>{item.title}</Text>
                                </View>
                        );
                        }}
                    />
                    {/* <TextInput 
                        placeholder='5,700.00'
                        style={styles.input}

                    /> */}
                    <Text style={[styles.input, styles.input2]}> 5,700.00</Text>

                    <Text style={styles.currency}> {y.currency}</Text>
            </View>
            <View>
                <Pressable
                    onPress={() => setTarifas(!tarifas)}
                >
                    { tarifas ? <Text style={styles.show}> Ocultar tarifas </Text> : 

                    <Text style={styles.show2}> Mostrar tarifas </Text>
                    }
                </Pressable>
            </View>
            {tarifas ? 
                <View style={styles.contTarifas}>
                    <Text style={styles.tipoCambio}> Tipo de cambio: 1 {value.currency} = 50 {y.currency}</Text>


                    <Text style={styles.tarifasTxt}> Pagando en <Text style={styles.tarifasData}> {value.currency} </Text> </Text>
                    <Text style={styles.tarifasTxt}> Importe a enviar <Text style={styles.tarifasData}> {importeEnviar}{value.currency} </Text></Text>
                    <Text style={styles.tarifasTxt}> Tarifa <Text style={styles.tarifasData}> {value.currency} </Text></Text>
                    <Text style={styles.tarifasTxt}> Total <Text style={styles.tarifasData}> {value.currency} </Text></Text>
                    <Text style={styles.tarifasTxt}> Importe a recibir <Text style={styles.tarifasData}> {y.currency} </Text></Text>
                </View>:
                <></>
            }

        </View>
            
    </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
    contenedor:{
        height:'50%',
        alignItems:'center',
    },
    contenedor2:{
        marginTop:20,
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    contenedor3:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginTop:40,
        marginBottom:25
    },
    currency:{
        position:'absolute',
        right:13,
        top:25,
        fontWeight:'600',
        color:'#7d7d7d'
    },
    contTarifas:{
        marginTop:20,
        alignSelf:'baseline',
        width:'90%'
    },
    tarifasData:{
        display:'flex',
        textAlign:'right',
        justifyContent:'space-evenly'
        
    },
    tipoCambio:{
        marginLeft:20,
        fontWeight:'bold',
        fontSize:15, 
        marginBottom:12
    },  
    tarifasTxt:{
        fontWeight:'bold',
        fontSize:14, 
        marginLeft:25,
        paddingBottom:8,
        marginBottom:5,
        borderBottomWidth:.5,
        borderColor:'#d6d6d6'
    },
    input:{
        height:60,
        width:190,
        borderColor:'#054ab5',
        borderWidth:1,
        marginLeft:-5,
        borderBottomRightRadius:7,
        borderTopRightRadius:7,
        textAlign:'right',
        paddingRight:45,
        fontSize:30,
    },
    input2:{
        paddingTop:10,
        color:'#9c9c9c'
    },  
    dropdownBtnStyle: {
        height: '100%',
        width:'42%',
        backgroundColor: '#054ab5',
        // paddingHorizontal: 0,
        borderRadius: 7,
      },
      dropdownBtnStyle2: {
        height: '100%',
        width:'42%',
        backgroundColor: '#054ab5',
        // paddingHorizontal: 0,
        borderRadius: 7,
      },
      dropdownBtn: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
      },
      sending:{
        position:'absolute',
        color:'#fff',
        top:2
      },
    dropdownBtnImage: {
        width: 35, 
        height: 25, 
        resizeMode: 'cover',
        marginRight:5,
        marginTop: 10,
        // paddingVertical:30
    },
    dropdownBtnImage2:{
        width: 25, 
        height: 20, 
        resizeMode: 'cover',
        marginRight:5,
        marginTop: 10,
    },
    dropdownBtnTxt: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 15,
      marginTop: 10,
    //   paddingVertical:30
    },
    dropdown3RowStyle: {
      backgroundColor: '#003382',//
      borderBottomColor: '#444',
      height: 60,
    },
    dropdownBG:{
        backgroundColor: '#003382'
    },
    dropdownStyle: {
      flexDirection: 'row',
      paddingHorizontal: 20,
    },
    dropdownRowImage: {
        width: 35, 
        height: 25, 
        resizeMode: 'cover'
    },
    dropdownTxt: {
      color: '#F1F1F1',
      textAlign: 'center',
      fontWeight: '500',
      fontSize: 15,
      marginHorizontal: 12,
    },
    dropdownBtnIcon:{
        position:'absolute',
        height:10,
        width:15,
        resizeMode: 'cover',
        right:10,
        top: 30
    },
    show:{
        fontSize:15,
        color:'#3988C6',
        fontWeight:'600'
    },
    show2:{
        marginBottom: 185,
        fontSize:15,
        color:'#3988C6',
        fontWeight:'600'
    },
    tarifas:{
        textAlign:'left'
    }
  
  });

export default Content

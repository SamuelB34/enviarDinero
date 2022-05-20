import React,{ useState, useEffect } from 'react';
import { StyleSheet, Text, Pressable, Image, ScrollView, View, TextInput, } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {Picker} from '@react-native-picker/picker';

const countries = [
    {title: 'USA', image: require('../images/USA.png'), currency:'USD'},
    {title: 'MEX', image: require('../images/Mexico.png'), currency:'MXN'},
    {title: 'R. DOM', image: require('../images/RD.png'), currency:'DOP'},
  ];

const Content = () => {
    
const [tarifas, setTarifas ] = useState(false);
const [value, setValue ] = useState({})
const [value2, setValue2 ] = useState({})
const [importeEnviar, setImporteEnviar ] = useState()
const [ tipo, setTipo] = useState ('')

const [ conversion, setConversion ] = useState('')
const [ tipoCambio, seTipoCambio ] = useState('')
const [ tarifa, setTarifa ] = useState('')
const [ total, setTotal ] = useState('')

useEffect(() => {
    if( value.title === 'MEX' && value2.title === 'USA'){
        const cotizacion = ( importeEnviar *.05 )
        seTipoCambio('0.5')
        setConversion(cotizacion)

    } else if ( value.title === 'MEX' && value2.title === 'R. DOM' ){
        const cotizacion = ( importeEnviar * 2.77 )
        seTipoCambio('2.77')
        setConversion(cotizacion)

    } else if ( value.title === 'USA' && value2.title === 'R. DOM' ){
        const cotizacion = ( importeEnviar * 55.3 )
        seTipoCambio('55.3')
        setConversion(cotizacion)

    }else if ( value.title === 'USA' && value2.title === 'MEX' ){
        const cotizacion = ( importeEnviar / .05 )
        seTipoCambio('20')
        setConversion(cotizacion)

    }else if ( value.title === 'R. DOM' && value2.title === 'MEX' ){
        const cotizacion = ( importeEnviar * 0.36 )
        seTipoCambio('0.36')
        setConversion(cotizacion)

    }else if ( value.title === 'R. DOM' && value2.title === 'USA' ){
        const cotizacion = ( importeEnviar * 0.018 )
        seTipoCambio('0.018')
        setConversion(cotizacion)

    }else if ( value.title === 'USA' && value2.title === 'USA' ){
        const cotizacion = ( importeEnviar )
        seTipoCambio('1')
        setConversion(cotizacion)

    }else if ( value.title === 'MEX' && value2.title === 'MEX' ){
        const cotizacion = ( importeEnviar )
        seTipoCambio('1')
        setConversion(cotizacion)

    }else if ( value.title === 'R. DOM' && value2.title === 'R. DOM' ){
        const cotizacion = ( importeEnviar )
        seTipoCambio('1')
        setConversion(cotizacion)

    }else{
        const cotizacion = ( '5700.00' )
        seTipoCambio('1')
        setConversion(cotizacion)

    }

    const porcentaje = (conversion*0.0025 )
    setTarifa(porcentaje)

    setTotal(importeEnviar+porcentaje)

    

},[importeEnviar, value, value2 ])

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
                                setValue2(selectedItem):
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
                    <View>
                        {conversion ?<Text style={[styles.input, styles.input2]}> {conversion}</Text>
                        :<Text style={[styles.input, styles.input2]}> 5700.00</Text>}
                        <Picker 
                            style={styles.picker}
                            selectedValue= {tipo}
                            onValueChange= {(itemValue)=>{setTipo (itemValue)}}
                        >
                            <Picker.Item label='--Seleccionar--' value=""/>
                            <Picker.Item label="USD" value="USD"/>
                            <Picker.Item label="MXN" value="MXN"/>
                            <Picker.Item label="DOP" value="DOP"/>
                        </Picker>
                    </View>



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
                    <Text style={styles.tipoCambio}> Tipo de cambio: 1 {value.currency} = {tipoCambio}{''}{value2.currency}</Text>

                    <View style={styles.cont1}>
                        <Text style={styles.tarifasTxt}> Pagando en </Text>
                        <Text style={styles.tarifasData}> {value.currency} </Text>
                    </View>
                    <View style={styles.cont1}>
                        <Text style={styles.tarifasTxt}> Importe a enviar </Text>
                        <Text style={styles.tarifasData}> {importeEnviar}{' '}{value.currency} </Text>
                    </View>
                    <View style={styles.cont1}>
                        <Text style={styles.tarifasTxt}> Tarifa </Text>
                        <Text style={styles.tarifasData}> {tarifa}{' '}{value.currency} </Text>
                    </View>
                    <View style={styles.cont1}>
                        <Text style={styles.tarifasTxt}> Total </Text>
                        <Text style={styles.tarifasData}> {total} {value.currency} </Text>
                    </View>
                    <View style={styles.cont1}>
                        <Text style={styles.tarifasTxt}> Importe a recibir </Text>
                        <Text style={styles.tarifasData}>{conversion} {value2.currency} </Text>
                    </View>
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
    cont1:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomWidth:.5,
        borderColor:'#d6d6d6',
        marginLeft:25,
        marginBottom:10
    },
    currency:{
        position:'absolute',
        right:13,
        top:25,
        fontWeight:'600',
        color:'#7d7d7d'
    },
    picker:{
        // marginHorizontal:20,
        backgroundColor:'#ebebeb',
        borderRadius:10,
        // paddingLeft:15,
        color: '#404040',
        width:40,
        height:1,
        position:'absolute',
        right:5,
        top:3
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
        // marginLeft:25,
        paddingBottom:8,
        // marginBottom:5,
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

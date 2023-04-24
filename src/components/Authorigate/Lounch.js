import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { IMAGE } from '../../../assets/index'
import { StatusBar } from 'expo-status-bar';

const {LOGO} = IMAGE




function Lounch({navigation}) {

function Loading (){
  setTimeout(()=>{
    navigation.navigate('Authorigate')
  },500)
  
}
  return (
    <View 
    style={{
      backgroundColor: 'black',

      flex: 1,
      justifyContent: 'center',
      textAlign: 'center',
      padding: 30,
      fontSize: 35,
      color: 'black',
      fontWeight: '500',
      height: '100%',
    }}
    >
   <TouchableOpacity onLayout={Loading} >

 <Image style={{
  width: '75%', 
  height: '45%',
  alignSelf: 'center',
  marginTop: '35%',
  
  }} source={LOGO} />
 </TouchableOpacity>

    </View>
  )
}

export {Lounch}

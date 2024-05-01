import React, { useEffect } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { IMAGE } from '../../../assets/index'
import { StatusBar } from 'expo-status-bar';

const {LOGO} = IMAGE




function Lounch({navigation}) {

  useEffect(()=>{
    setTimeout(()=>{
      navigation.reset({
        index: 0,
        routes: [{ name: 'Authorigate' }],
      })
   },1000)
  })

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
      <View>
      <Image style={{
        width: '75%', 
        height: '45%',
        alignSelf: 'center',
        marginTop: '35%',
        
        }} source={LOGO} />
      </View>

    </View>
  )
}

export {Lounch}

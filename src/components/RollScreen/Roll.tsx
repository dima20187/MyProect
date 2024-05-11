import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Image, View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { shavuha } from '../../constants/Tovar/Shavuha'
import { add } from '../../store/slice/CounterSlice'
import { RollItems } from './components/RollItems'

 export const Roll = ()=> {
  return (
<>
   <ScrollView style={{backgroundColor: 'black'}} >
    <View style={{width: '100%', height: '100%'}}>
    <Text style={{color:'gold' , textAlign: 'center', fontSize: 30, marginBottom:'3%'}}>Роллы</Text>
    <View style={{flex:1, justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap', padding: '2%',}} >
      {shavuha.map(shava => (
          <RollItems items={shava} />
       ))}
    </View>
   </View>
  </ScrollView>
 </>   
  )  

}

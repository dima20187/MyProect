import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../../store/slice/CounterSlice'
import { View, Text,Image,TouchableOpacity, ScrollView } from 'react-native'
import { ColdWater }  from '../../constants/Tovar/ColdWater'
import { WaterItems } from './components/WaterItems'



 export const Water = () => {
  
  return (
  <>
   <ScrollView style={{backgroundColor: 'black'}}>
      <View style={{width: '100%', height: '100%'}}>
        <Text style={{color:'gold', textAlign: 'center', fontSize: 30, marginBottom:'3%'}}>Напитки</Text>
        <View style={{ justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap',flex:1, padding: '2%',}} >
        {ColdWater.map(water => (
            <WaterItems items={water} key={water.name} />
            ))}
        </View>
      </View>
    </ScrollView>
  </>
  )
}

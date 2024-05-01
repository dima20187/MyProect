import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Image, View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { shavuha } from '../../Tovar/Shavuha'
import { add } from '../../Counterslice/CounterSlice'

 function Roll({day}) {

  const dispatch = useDispatch()
  return (

<>
   <ScrollView style={{backgroundColor: 'black'}} >
    <View style={{width: '100%',header: '100%'}}>
    <Text style={{color:'gold' , textAlign: 'center', fontSize: 30, marginBottom:'3%'}}>Роллы</Text>
    <View style={{flex:1, justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap', padding: '2%',}} >
      {shavuha.map(({ id, name, price, image,quantity},index) => (
 
        <TouchableOpacity style={{backgroundColor: day? '#b0b0b0':'#2E6038', marginBottom: '4%', borderRadius: 45, width: '48%'}} key={index} onPress={
        ()=> {dispatch(add({image,id,name,price,quantity}))}}   > 
                <>
                <Image style={{width: '100%',height: 150, padding: '24%'}} source={image} />
                <Text style={{textAlign: 'center', color:day ? '#8b4513': 'gold', fontWeight: 'bold',fontSize: 18}} >{name}  </Text>
                <Text style={{textAlign: 'center', color:day ? '#8b4513': 'gold', fontWeight: 'bold',fontSize: 16,marginTop: '3%',marginBottom: '3%' }}>Цена: {price} руб  </Text>
              </>
            </TouchableOpacity>   
       ))}
    </View>
   </View>
  </ScrollView>
 </>   
  )  

}
export {Roll}
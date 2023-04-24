import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Image, View, Text, TouchableOpacity } from 'react-native'
import { shavuha } from '../../Tovar/Shavuha'
import { add } from '../../Counterslice/CounterSlice'

 function Roll({day}) {

  const dispatch = useDispatch()
  return (


    <View style={{flex:1, justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap', padding: '2%',bottom: '5%'}} >
      {shavuha.map(({ id, name, price, image,quantity}) => (
 
        <TouchableOpacity style={{backgroundColor: day? '#b0b0b0':'#2E6038', marginBottom: '3%', borderRadius: 45, width: '48%'}} key={id} onPress={
        ()=> {dispatch(add({image,id,name,price,quantity}))}}   > 
                <>
                <Image style={{width: '100%',height: 150, padding: '24%'}} source={{uri: image}} />
                <Text style={{textAlign: 'center', color:day ? '#8b4513': 'gold', fontWeight: 'bold',fontSize: 18}} >{name}  </Text>
                <Text style={{textAlign: 'center', color:day ? '#8b4513': 'gold', fontWeight: 'bold',fontSize: 16,marginTop: '3%',marginBottom: '3%' }}>Цена: {price} руб  </Text>
              </>
            </TouchableOpacity>   
       ))}
    </View> 
    
  )  

}
export {Roll}
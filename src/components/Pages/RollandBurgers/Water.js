import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../../Counterslice/CounterSlice'
import { View, Text,Image,TouchableOpacity, ScrollView } from 'react-native'
import { ColdWater }  from '../../Tovar/ColdWater'




 function Water({day}) {

const [modal, setModal]=useState(false)
const dispatch = useDispatch()

  return (
  <>
   <ScrollView style={{backgroundColor: 'black'}}>
      <View style={{width: '100%',header: '100%'}}>
        <Text style={{color:'gold' , textAlign: 'center', fontSize: 30, marginBottom:'3%'}}>Напитки</Text>
        <View style={{ justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap',flex:1, padding: '2%',}} >
        {ColdWater.map( ({water, id,name,price,image,quantity}) => (
            <TouchableOpacity style={{backgroundColor: day? '#b0b0b0': '#2E3860', borderRadius: 55, marginBottom: '3%',width: '47%', padding: '3%'}} key={id} onPress={()=>{ dispatch(add(({name,price, image,id,quantity})))}}>
                <>
                <Image source={{uri: image}} style={{width: '100%' ,height: 150, padding: '23%', }} />
               <Text style={{textAlign: 'center' ,color: day ? '#8b4513': 'gold', fontWeight: 'bold',  width: '100%',fontSize: 17 }} >{name}</Text>
               <Text style={{alignSelf: 'center', color: day ? '#8b4513':'gold', fontWeight: 'bold',fontSize: 16, marginTop: '5%'  }} >Цена: {price} руб</Text>
               </>
            </TouchableOpacity>
            ))}
        </View>
      </View>
    </ScrollView>
  </>
  )
}
export {Water}
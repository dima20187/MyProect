import React, { useState } from 'react'
import { View, Text, TouchableHighlight, Image, TouchableOpacity, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../../Counterslice/CounterSlice'
import { Items }  from '../../Tovar/Items'




 function Categories({day}) {

  const [modal, setModal]=useState(false)
  const tele = useSelector(state=> state.telefon.telefon.autorigate)
console.log(tele);
const dispatch = useDispatch()



  return (
<>
  <ScrollView style={{ backgroundColor: 'black'}}>
    <View style={{width: '100%',header: '100%'}} >
     <Text style={{color:'gold' , textAlign: 'center', fontSize: 30, marginBottom:'3%'}} >Бургеры</Text>
      <View style={{ justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap', flex:1,marginTop: '3%', padding: '2%',bottom: '5%'}} >
        {Items.map( ({item,name,price,image,id,  quantity}) => (
            <TouchableOpacity style={{backgroundColor: day? '#b0b0b0' :'#811D1F', borderRadius:25, marginBottom: '2%', width: '31%',}} key={id} onPress={()=>{ dispatch(add(({name,price, image,id, quantity})))
           }}>
                <>
                <Image source={{uri: image}} style={{width: '100%',height: 100, padding: '15%', alignSelf: 'center', margin: 2}} />
               <Text style={{textAlign: 'center' , color: day ? '#8b4513':'gold', fontWeight: 'bold',  width: '100%',fontSize: 18 }} >{name}</Text>
               <Text style={{textAlign: 'center' , color: day ? '#8b4513':'gold', fontWeight: 'bold',fontSize: 15,marginBottom: '3%', marginTop: '5%', padding: '3%' }} >Цена: {price} руб</Text>
            
      
               </>
            </TouchableOpacity>
            ))}
      </View>
    </View>
  </ScrollView>
</> )
}
export {Categories}
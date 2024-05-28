import { useDispatch, useSelector } from 'react-redux'
import React, { FC } from 'react'
import { View, Text, TouchableHighlight, Image, TouchableOpacity, ScrollView } from 'react-native'
import { IItems } from '../../../types/UserType'
import { add } from '../../../store/slice/CounterSlice'
interface ITover{
    items: IItems
}

export const BurgerItems: FC<ITover> = ({items}) => {
    const dispatch = useDispatch()

  return (

<TouchableOpacity key={items.id} style={{backgroundColor: '#811D1F', borderRadius:25,margin: 4, marginBottom: '2%', width: '31%',}} onPress={()=>{ dispatch(add((items)))}} >
   <>
     <Image source={items.image} style={{width: '100%',height: 100, padding: '15%', alignSelf: 'center', margin: 2}} />
     <Text style={{textAlign: 'center' , color:'gold', fontWeight: 'bold',  width: '100%', fontSize: 18 }} >{items.name}</Text>
     <Text style={{textAlign: 'center' , color: 'gold', fontWeight: 'bold',fontSize: 15,marginBottom: '3%', marginTop: '5%', padding: '3%' }} >Цена: {items.price} руб</Text>
   </>
 </TouchableOpacity>
  )
}


import { useDispatch, useSelector } from 'react-redux'
import React, { FC } from 'react'
import { View, Text, TouchableHighlight, Image, TouchableOpacity, ScrollView } from 'react-native'
import { IItems } from '../../../types/UserType'
import { add } from '../../../store/slice/CounterSlice'

interface ITover{
    items: IItems
}

export const WaterItems: FC<ITover> = ({items}) => {
    const dispatch = useDispatch()

  return (
    <TouchableOpacity style={{backgroundColor:  '#2E3860', borderRadius: 55, marginBottom: '3%', width: '47%', padding: '2%'}} 
        key={items.name} onPress={()=>{ dispatch(add((items)))}}>
        <>
        <Image source={items.image} style={{width: '100%' ,height: 150, padding: '23%', }} />
        <Text style={{textAlign: 'center' ,color: 'gold', fontWeight: 'bold',  width: '100%',fontSize: 17 }} >{items.name}</Text>
        <Text style={{alignSelf: 'center', color: 'gold', fontWeight: 'bold',fontSize: 16, marginTop: '5%'  }} >Цена: {items.price} руб</Text>
        </>
    </TouchableOpacity>
  )
}


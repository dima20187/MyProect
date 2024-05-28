
import { IItems } from '../../../types/UserType'
import React, { FC, useState } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView , StyleSheet} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import { add, remove,plusItem, minusItem } from '../../../store/slice/CounterSlice'
import {IMAGE} from '../../../../assets/index'

const { DELETE, ITEMMINUS, ITEMPLUS}=IMAGE

interface ITover{
    items: IItems
}

export const KorzinaItems: FC <ITover> = ({items}) => {
    const dispatch = useDispatch()

  return (
    <View 
        style={{ 
        margin: '2%', 
        width:'45%',
        backgroundColor: '#60482E',
        borderRadius: 45,
        }}
        key={items.name}
    >
        <>
        <Text style={{width: '100%',height: 40, textAlign: 'right'}} 
         onPress={()=>dispatch(remove(items.id))}>
            <Image source={DELETE}/>
            </Text>
            <Image style={{width: '100%' ,
            height: 'auto',
            padding: '45%', 
            justifyContent: 'center' }}  
            source={items.image} 
            />
            <Text style={{ color: 'gold', fontWeight: 'bold',  textAlign: 'center',fontSize: 18,height: 40}} >
            {items.name} 
            </Text>
            <Text style={{color: 'gold', fontWeight: 'bold', textAlign: 'center', fontSize: 16, marginBottom: '5%', alignItems: 'flex-start'}} >
            Цена: {items.price} руб
            </Text> 
            <Text  style={{ color: 'gold', fontWeight: 'bold', textAlign: 'center', fontSize: 26}} > 
            <Text onPress={()=>dispatch(minusItem(items))} >
            <Image source={ITEMMINUS} />
            </Text> {items.quantity}
            <Text onPress={()=>dispatch(plusItem(items))} >
            <Image source={ITEMPLUS} />
            </Text>
            </Text>    
        </> 
       </View>
  )
};


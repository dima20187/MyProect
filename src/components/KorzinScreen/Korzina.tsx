import React, { useState } from 'react'
import { View, Text, Image, TouchableHighlight, ScrollView , StyleSheet} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import { add, remove,plusItem, minusItem } from '../../store/slice/CounterSlice'
import {IMAGE} from '../../../assets/index'
import { KorzinaItems } from './components/KorzinaItems'
import { RootState } from '../../store'


const {KORZINAP} = IMAGE

export const Korzina = ({navigation}) => {
    const count = useSelector((state: RootState) => state.count.count)
    const  sumBy =(arr) =>arr.reduce((previousValue, currentValue)=>  previousValue + currentValue)

  return (
    <ScrollView style={{
      flex: 1,
      padding: '1%',
      height: '100%',
      width: '100%',
      backgroundColor: 'black',
    }} >
      {!count.length ? (
      <View style={{width: '100%', height:'100%' , alignContent: 'center', alignItems: 'center', backgroundColor: 'black'}} >
      <Text style={{color: 'gold', fontWeight: 'bold', 
        fontSize: 30, textAlign: 'center'}} >Корзина пуста</Text>
      <View style={{
        height: '100%',
        width: '100%',
        display:'flex',
        alignContent:'center',
        alignItems: 'center',
        marginBottom: '20%'
        }} >
       <Image source={KORZINAP} />
        </View>
        </View>
      ):(
    <>
    <View style={{height: '100%', width: '100%', marginBottom:'5%'}} >
      <Text style={{ color: 'gold', fontWeight: 'bold',  textAlign: 'center', fontSize: 30,
       marginBottom: '10%', borderBottomColor: 'gold', 
       borderBottomWidth: 1, borderRadius: 5}}>Ваши товары:</Text>
      
        <View style={{flexWrap: 'wrap', flexDirection: 'row',}} >
        {count.map(item => (
       <KorzinaItems items={item}/>
    ))}
    </View>
    {!count.length? null:(
  <View>
    <Text style={{ color: 'gold', fontWeight: 'bold', textAlign: 'center', fontSize: 20, marginTop: '3%',}}>
      Общая стоимость: {sumBy(count.map(({price,quantity})=>(Math.round(price * quantity))))} руб.
    </Text>
  </View>)}
  </View>
  </>
)}
    </ScrollView>
  )
}


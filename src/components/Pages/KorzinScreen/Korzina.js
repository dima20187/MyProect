import React, { useState } from 'react'
import { View, Text, Image, TouchableHighlight, ScrollView , StyleSheet} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import { add, remove,plusItem, minusItem } from '../../Counterslice/CounterSlice'
import {IMAGE} from '../../../../assets/index'


const {KORZINAP, RETURN, DELETE, ITEMMINUS, ITEMPLUS, DELETEDARK}=IMAGE



function Korzina ({navigation,day,kor})  {
    function Nav (korzina){
      //  navigation.navigate('Screen')
      kor(false)
    }
    const count = useSelector(state => state.count.count)
    const dispatch = useDispatch()
     const  sumBy =(arr) =>arr.reduce((previousValue, currentValue)=>  previousValue + currentValue)

  return (
    <ScrollView style={{
      flex: 1,
      padding: '1%',
      fontSize: 35,
      color: 'black',
      fontWeight: '500',
      height: '100%',
    }} >
      {!count.length ? (
        <Text/>
        // <Text style={{color: 'gold', fontWeight: 'bold', display: 'flex',textAlign: 'left' ,height: '30%'}} onPress={Nav}><Image source={RETURN} /></Text>
      ): (<Text style={{ color:day ? '#8b4513':'gold', fontWeight: 'bold',  textAlign: 'center', fontSize: 30,
       marginBottom: '10%', borderBottomColor: day ? '#8b4513':'gold', 
       borderBottomWidth: 1, borderRadius: 5}}>Ваши товары:</Text>)}
      
<View style={{flexWrap: 'wrap', flexDirection: 'row',}} >
        {count.map(({coun,id,quantity,image,name,price}) => (
        <View style={{
        fontWeight: 'bold', 
        margin: '2%', 
        width:'45%',
        backgroundColor: day? '#b0b0b0':'#60482E',
        borderRadius: 45,
        
        }}  key={id}>
          <>
          <Text style={{width: '100%',height: 40, textAlign: 'right'}} onPress={()=>dispatch(remove(id))} ><Image source={day? DELETEDARK :DELETE}/></Text>
        <Image style={{width: '100%' ,
          padding: '45%', 
        justifyContent: 'center' }}  
          source={{uri: image}} 
          />
         <Text style={{ color:day ? '#8b4513': 'gold', fontWeight: 'bold',  textAlign: 'center',fontSize: 18}} >
          {name} 
         </Text>
         <Text style={{ color: day ? '#8b4513':'gold', fontWeight: 'bold', textAlign: 'center', fontSize: 16, marginBottom: '5%', alignItems: 'flex-start'}} >
          Цена: {price} руб
          </Text> 
          <Text  style={{ color:day ? '#8b4513': 'gold', fontWeight: 'bold', textAlign: 'center', fontSize: 26}} > 
          <Text onPress={()=>dispatch(minusItem({name,quantity}))} >
            <Image source={ITEMMINUS} />
            </Text> {quantity} <Text onPress={()=>dispatch(plusItem({name,quantity}))} >
              <Image source={ITEMPLUS} />
              </Text></Text>
      </> 
       </View>
    ))}
    </View>
    <View  >
    {!count.length ? (
      <View style={{width: '100%', height:'100%' , backgroundColor: day? '#fdf5e6': 'black'}} >
      <Text style={{color: 'gold',color: day? '#8b4513' : 'gold', fontWeight: 'bold', 
        fontSize: 30, textAlign: 'center'}} >Корзина пуста</Text>
      <Text  style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        textAlign:'center',
        color: 'gold', fontWeight: 'bold', 
        fontSize: 30,
        marginBottom: '20%'
        }} >
       <Image source={KORZINAP} />
        </Text>
        </View>
    ) : (
  <View>
    <Text style={{ color: day ? '#8b4513':'gold', fontWeight: 'bold', textAlign: 'center', fontSize: 20, marginTop: '10%',}} >
      Общая стоимость:  {sumBy(count.map(( {price,quantity})=> price * quantity))} руб.
      </Text>

    <Text style={{
      display: 'flex',
      alignSelf: 'center',
      color:day ? '#8b4513': 'gold', fontWeight: 'bold', 
      fontSize: 30,
      }}  onPress={Nav} >Закрыть</Text>
      </View>
) }</View>
    </ScrollView>
  )
}

export{ Korzina}
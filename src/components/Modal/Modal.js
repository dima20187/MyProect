import React, { useState } from 'react'
import { View, Text ,StyleSheet, Image, TouchableOpacity,} from 'react-native'
import {IMAGE} from '../../../assets/index'





const {CATEGORIES, SHAWA, KOLA, CONTACT, ACTION, CATEGORIESWHITE , SHAWAWHITE,CONTACTWHITE,KOLAWHITE,ACTIONWHITE}=IMAGE
const Modal = ({About,modale, Burger, Roll, Water,Free,day, korzina}) => {


  const Us = (about)=>{
     About(true)
     modale(false)
     Burger(false)
     Roll(false)
     Water(false)
     korzina(false)
      
  }

const Gamburger = (burger)=>{
  Burger(true)
  modale(false)
  About(false)
  Roll(false)
  Water(false)
  korzina(false)

}
const Rol = (roll)=>{
  Roll(true)
  About(false)
  Burger(false)
  modale(false)
  Water(false)
  korzina(false)
}

const Watere= (water)=>{
  Water(true)
  modale(false)
  Roll(false)
  About(false)
  Burger(false)
  korzina(false)
}

const Stock=(free)=>{
  Free(true)
  Water(false)
  modale(false)
  Roll(false)
  About(false)
  Burger(false)
  korzina(false)
}

const Close =()=>{
modale(false)
}

  return (
    <TouchableOpacity style={{width: '100%', alignItems: 'flex-start'}}  onPress={Close}  >
    <View style={{
      
      width: '100%',
      height: '100%',
      alignItems: 'flex-start'
      
    }} >
      <View    >
        <Text style={{color: day? '#8b4513' :'gold', fontSize: 25,marginBottom: '3%',fontWeight: 'bold' }} onPress={Gamburger} ><Image source={day? CATEGORIESWHITE :CATEGORIES}/> Бургеры </Text>
        <Text style={{color: day? '#8b4513' : 'gold', fontSize: 25,marginBottom: '3%',fontWeight: 'bold' }} onPress={Rol}><Image source={ day? SHAWAWHITE:SHAWA}/> Роллы </Text>
        <Text style={{color: day? '#8b4513' :'gold', fontSize: 25, marginBottom: '3%',fontWeight: 'bold'}} onPress={Watere}><Image source={ day? KOLAWHITE:KOLA}/> Напитки </Text>
        <Text style={{color: day? '#8b4513' :'gold',fontSize: 25,marginBottom: '3%',fontWeight: 'bold'}} onPress={Stock} ><Image source={ day? ACTIONWHITE:ACTION} /> Акции </Text>
        <Text style={{color: day? '#8b4513' : 'gold', fontSize: 25,marginBottom: '3%',fontWeight: 'bold'}}  onPress={Us}><Image source={ day? CONTACTWHITE:CONTACT}/> Контакты </Text>
        </View>
    </View></TouchableOpacity>
  )
}


export {Modal}

import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity,TextInput } from 'react-native'
import { IMAGE } from '../../../assets/index'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { addTelefon } from '../Counterslice/CounterSlice'
import { Screen } from '../Pages/Screen'

const {BURGER} = IMAGE

function Authorigate  ({navigation})  {
  const dispatch = useDispatch()
  const tele = useSelector(state => state.telefon.telefon.autorigate)
  console.log(tele);
    const [phone,setPhone]=useState('')
   
    if (phone.length === 13 && Number(phone)){
        dispatch(addTelefon(phone))
        setPhone('+375')
        setTimeout(()=>{
        navigation.navigate('Screen')
        },50000)
       
        
    }
    if(phone.length <4){
      setPhone('+375')
    }if(!Number(phone)){
      setPhone('+375')
    }if(phone === '+375 '){
      setPhone(phone.trim())
    }
    
  return (
    <View   style={{
        height: '100%',
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'black',    
    }} >  
     {tele !=true ? (
    <>
    <Image source={BURGER} 
    style={{  width: '45%', height: '20%',  justifyContent: 'center', position: 'absolute'}}
    /> 
      <Text style={{color: 'gold',top: '26%', fontSize: 23}} >Введите номер телефона</Text>

     
      <View style={{
               alignItems: 'center',
                borderBottom: 'white',
                borderBottomColor: 'white',
                top: '35%',
                borderBottomColor: 'gold',
                borderBottomWidth: 1,
                width: '50%',  
           }} >
          
              <TextInput 
        style={{color: 'gold',fontSize: 22,
        width: '100%',}}
          value={phone}
          onChangeText={setPhone}
          keyboardType="numeric" 
        defaultValue='+375'
        maxLength={13}
        />
        </View>
        </>
      ): (
          <Screen/>
      )}
    </View>
  )
}

export {Authorigate}
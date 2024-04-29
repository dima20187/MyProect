import React, { useState } from 'react'
import { Text, View, Image, ScrollView, TouchableHighlight, Linking, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { IMAGE } from '../../../assets/index'
import { logOut } from '../Counterslice/CounterSlice'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistor } from './store/store'



const {KORZINA} = IMAGE
const {BURGER, MYPHONE, KORZINAWHITE, BURGERWHITE, MYPHONEWHITE, DAY, NIGHT} = IMAGE

 function Header({navigation,day, korzina,state,  About,modale, Burger, Roll, Water,Free, setDay}) {
  const [rid, setRid] = useState(false)
  const dispatch = useDispatch()

const telefo = useSelector(state=> state.telefon.telefon)

function ride (){
  // setTimeout(()=>{
  //   navigation.navigate('Korzina')
  // },)
    korzina(!state)
    Burger(false)
    modale(false)
    About(false)
    Roll(false)
    Water(false)
    Free(false) 
}



  return (
    <View style={{justifyContent: 'space-between',flexDirection: 'row', alignItems: 'center' ,  marginBottom: '1%', paddingBottom: '1%',  borderRadius: 5, borderBottomColor: day? '#8b4513':'gold', borderBottomWidth: 1 }} >
   
  <View >
    <TouchableOpacity   onPress={()=>{dispatch(logOut())}} > 
   
      <Image
       source={ day? BURGERWHITE:BURGER}
       style={{
        width: day? 35:40,
        height:35,
       }}
       />
    </TouchableOpacity>
  </View>
 <TouchableOpacity>
  <View style={{color: 'gold',justifyContent: 'space-between'}} >
    {
      telefo.map((tele)=>(
        <Text style={{color: day? 'black' :'gold', fontSize: 23 }}  ><Image  source={day? MYPHONEWHITE :MYPHONE}  /> {tele.phone}</Text>
      ))
    }
  </View></TouchableOpacity>
  <Text style={{ height: day?'80%':'100%',verticalAlign: 'top', fontSize: day?  0:20 }} onPress={()=>setDay(!day)} ><Image source={ day? NIGHT :DAY} /></Text>
  <View >
    <TouchableOpacity  onPress={ride} >
       <Image
       source={ day? KORZINAWHITE :KORZINA}
       style={{
        height: 35,
        width: 35
       }}
       />


    </TouchableOpacity >

  </View>

</View>
  )
}
export {Header}
import React, { useState } from 'react'
import { Text, View, Image, ScrollView, TouchableHighlight, Linking, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { IMAGE } from '../../../../assets/index'
import { logOut } from '../../../store/slice/CounterSlice'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistor } from '../../../store/store'



const {KORZINA, DELETEUSER} = IMAGE
const {BURGER, MYPHONE, KORZINAWHITE, BURGERWHITE, MYPHONEWHITE, DAY, NIGHT} = IMAGE

 function Header() {
  const [rid, setRid] = useState(false)
  const dispatch = useDispatch()

const telefo = useSelector(state=> state.telefon.telefon)

// function ride (){
//   // setTimeout(()=>{
//   //   navigation.navigate('Korzina')
//   // },)
//     korzina(!state)
//     Burger(false)
//     modale(false)
//     About(false)
//     Roll(false)
//     Water(false)
//     Free(false) 
// }



  return (
    <View style={{justifyContent: 'space-between',flexDirection: 'row', 
    alignItems: 'center' ,marginBottom: '1%', paddingBottom: '1%',  
    borderRadius: 5, borderBottomColor: 'gold', borderBottomWidth: 1 }} >
   
  <View >
    <TouchableOpacity  onPress={()=>Linking.openURL('https://burger-king.by')} > 
      <Image
       source={ BURGER}
       style={{
        width: 40,
        height:35,
       }}
       />
    </TouchableOpacity>
  </View>
 <TouchableOpacity>
  <View style={{color: 'gold',justifyContent: 'space-between'}} >
    {
      telefo.map((tele)=>(
        <Text style={{color: 'gold', fontSize: 23 }}  ><Image  source={MYPHONE}  /> {tele.phone}</Text>
      ))
    }
  </View></TouchableOpacity>
  <View >
    <TouchableOpacity onPress={()=>{dispatch(logOut())}}  >
       <Image
       source={DELETEUSER}
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
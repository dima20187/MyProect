import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Text, View, Image, ScrollView, TouchableHighlight, Linking, StatusBar, TouchableOpacity } from 'react-native'
import { Header } from './components/Header'
import {IMAGE} from '../../../assets/index'
import { Stocke } from './components/Stocke'
import { Korzina } from '../KorzinScreen/Korzina'
import { RootState } from '../../store';

const {MENU, CLOSEMENU, MENUWHITE}= IMAGE
const Screen=({navigation})=> {

  const tele = useSelector((state:RootState)=> state.telefon.telefon)

// const [burger, setBurger]=useState(false)
// const [roll, setRoll]=useState(false)
// const [water,setWater]=useState(false)
// const [about,setAbout]=useState(false)
// const [modale,setModale]=useState(false)
// const [stock, setStock]=useState(false)

// const [day,setDay]=useState(false)
// const[korzina,setKorzina]=useState(false)

// const [product, setProduct]= useState(false)

// const tovar = (e)=>{
//   setBurger(true)
//   setRoll(true)
//   setWater(true)
//   setAbout(false)
//   setStock(false)
//   setKorzina(false)
// }

// const Buregr = (e)=>{
//   setBurger(true)
//   setRoll(false)
//   setWater(false)
//   setAbout(false)
//   setStock(false)
//   setKorzina(false)
// } 

// const Rolla =(e)=>{
//   setRoll(true)
//   setBurger(false)
//   setWater(false)
//   setAbout(false)
//   setStock(false)
//   setKorzina(false)
// }

// const Waater = (e)=>{
//   setWater(true)
//   setRoll(false)
//   setBurger(false)
//   setAbout(false)
//   setStock(false)
//   setKorzina(false)
// }

// const CloseAll=(e)=>{
//   setWater(false)
//   setRoll(false)
//   setBurger(false)
//   setAbout(false)
//   setStock(false)
//   setKorzina(false)
// }

// const AboutUse = (e)=>{
//   setAbout(true)
//   setWater(false)
//   setRoll(false)
//   setBurger(false)
//   setStock(false)
//   setKorzina(false)
// }

// const Modale = (e)=>{
//   setModale(!modale)
//   setAbout(false)
//   setWater(false)
//   setRoll(false)
//   setBurger(false)
//   setStock(false)
//   setKorzina(false)
//   // setProduct(true)
//   }
  
// const Stock = (e)=>{
//   setStock(true)
//   setModale(false)
//   setAbout(false)
//   setWater(false)
//   setRoll(false)
//   setBurger(false)
//   setKorzina(false)
// }
// const Kola=()=>{
//   setKorzina(true)
// }




// const chek = tele.length
// if(chek === 0){
//   navigation.navigate('Authorigate')
// }

// if(product === true){
//   return <View style={{width: '30%', height: '50%'}} ><Text style={{color: 'gold', width: '100%', height: '50%'}} >123</Text></View>
// }


return(
<>
<ScrollView style={{ height: '100%', backgroundColor:  'black', padding:'1%', width: '100%',}}>
   <Header />
  <View style={{marginTop:'5%'}}>
  <Stocke/>
  </View>
  <StatusBar hidden={true} />
</ScrollView >
</>
)
}
export {Screen}

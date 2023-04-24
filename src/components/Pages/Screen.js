import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Text, View, Image, ScrollView, TouchableHighlight, Linking, StatusBar, TouchableOpacity } from 'react-native'
import { Modal } from '../Modal/Modal'
import { Header } from './Header'
import { AboutUs } from './RollandBurgers/AboutUs'
import { Categories } from './RollandBurgers/Categories'
import { Roll } from './RollandBurgers/Roll'
import { Water } from './RollandBurgers/Water'
import {IMAGE} from '../../../assets/index'
import { Stocke } from './RollandBurgers/Stocke'
import { Korzina } from './KorzinScreen/Korzina'


const {MENU, CLOSEMENU, MENUWHITE}= IMAGE
const Screen=({navigation})=> {

  const tele = useSelector(state=> state.telefon.telefon)

const [burger, setBurger]=useState(false)
const [roll, setRoll]=useState(false)
const [water,setWater]=useState(false)
const [about,setAbout]=useState(false)
const [modale,setModale]=useState(false)
const [stock, setStock]=useState(false)

const [day,setDay]=useState(false)
const[korzina,setKorzina]=useState(false)

// const [product, setProduct]= useState(false)

const tovar = (e)=>{
  setBurger(true)
  setRoll(true)
  setWater(true)
  setAbout(false)
  setStock(false)
  setKorzina(false)
}

const Buregr = (e)=>{
  setBurger(true)
  setRoll(false)
  setWater(false)
  setAbout(false)
  setStock(false)
  setKorzina(false)
} 

const Rolla =(e)=>{
  setRoll(true)
  setBurger(false)
  setWater(false)
  setAbout(false)
  setStock(false)
  setKorzina(false)
}

const Waater = (e)=>{
  setWater(true)
  setRoll(false)
  setBurger(false)
  setAbout(false)
  setStock(false)
  setKorzina(false)
}

const CloseAll=(e)=>{
  setWater(false)
  setRoll(false)
  setBurger(false)
  setAbout(false)
  setStock(false)
  setKorzina(false)
}

const AboutUse = (e)=>{
  setAbout(true)
  setWater(false)
  setRoll(false)
  setBurger(false)
  setStock(false)
  setKorzina(false)
}

const Modale = (e)=>{
  setModale(!modale)
  setAbout(false)
  setWater(false)
  setRoll(false)
  setBurger(false)
  setStock(false)
  setKorzina(false)
  // setProduct(true)
  }
  
const Stock = (e)=>{
  setStock(true)
  setModale(false)
  setAbout(false)
  setWater(false)
  setRoll(false)
  setBurger(false)
  setKorzina(false)
}
const Kola=()=>{
  setKorzina(true)
}




const chek = tele.length
if(chek === 0){
  navigation.navigate('Authorigate')
}

// if(product === true){
//   return <View style={{width: '30%', height: '50%'}} ><Text style={{color: 'gold', width: '100%', height: '50%'}} >123</Text></View>
// }


return(

<ScrollView style={{ height: '100%', backgroundColor: day ? '#fdf5e6' : 'black', padding:'1%', width: '100%',}}  onPress={Modale} >
   <Header state={korzina} korzina={setKorzina} day={day} setDay={setDay} navigation={navigation}  About={setAbout} modale={setModale} 
    Burger={setBurger} Roll={setRoll} 
    Water={setWater}
    Free={setStock} />

  {modale === true  ? (
    <TouchableOpacity style={{height: '100%', width: '100%', marginBottom: '100%'}} >

    <Text style={{width: '10%', height: '5%',fontSize: 30}} 
    onPress={Modale}><Image  source={day? MENUWHITE: CLOSEMENU} />
    </Text><Modal day={day} About={setAbout} modale={setModale} 
    Burger={setBurger} Roll={setRoll} 
    Water={setWater}
    Free={setStock}
    korzina={setKorzina}
    /></TouchableOpacity>
  ): (
    <TouchableOpacity style={{width: '5%', marginTop: '1.8%'}} onPress={Modale}>
 <Image source={day? MENUWHITE:MENU}  />
 </TouchableOpacity>)}

 <View  style={{backgroundColor: day? '#fdf5e6':'black'}}>

  
 {korzina === true ? 
 (
 
    <Korzina day={day}  kor={setKorzina}/>
  ): (<Text/>)}
 </View>

 <View >
    {burger === false && roll === false && water === false && about === false && stock === false && korzina === false ? (
      <Text style={{textAlign: 'center', color: day? '#8b4513' :'gold', fontSize: 20, marginTop: '10%'}} >Выберите категорию</Text>
    ):(
      <Text/>
    )}
    {burger === true ? (
  <Categories day={day} />
    ):(
      <Text/>
    )}

    {roll === true ? (
       <Roll  day={day} />
    ):(
      <Text/>
    )}
    {water === true ? (
      <Water day={day}/>
    ):(<Text/>
    )}
{about ===true ? (
    <AboutUs  day={day} />
  ):(<Text/>)}
  {stock === true ? (
    <Stocke day={day}  />
  ):(<Text/>)}
 
 </View>
  
  <StatusBar hidden={false} />
</ScrollView >


)
}
export {Screen}

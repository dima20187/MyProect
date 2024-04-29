import React from 'react'
import { Image, TouchableOpacity, View, Text, Linking } from 'react-native'

import {IMAGE} from './../../../../assets/index'

const {FIRST, SECOND, THREE, FORE, BUMAGA, GOLD, NEWITEM, LIMIT, ANGUS, VOPER, KOMBO, KREVETKA} = IMAGE

const Stocke = ({day}) => {

  return (
    <View style={{padding:'1%',bottom: '1%'}} >
      <Text style={{color: day? '#8b4513':'gold', textAlign: 'center', fontSize: 30, bottom: 15}} >Наши акции и новинки!</Text>
        <View style={{flex: 1 , flexWrap: 'nowrap',flexDirection: 'row', marginBottom: '2%', borderBottomColor:day? '#8b4513': 'red', borderBottomWidth: 1, borderRadius: 10}} >
        <TouchableOpacity style={{flexDirection: 'row',width: '50%',marginRight: '1%', }} onPress={()=>Linking.openURL('https://burger-king.by/menu/vsye_po_2_3_4_rub/')} >
          <Image style={{width: '100%', height: 60, padding: '40%',borderRadius: 20}} source={FIRST} />

        </TouchableOpacity >
        <TouchableOpacity style={{flexDirection: 'row',width: '50%' }} onPress={()=>Linking.openURL('https://burger-king.by/menu/new/')}>
          <Image style={{width: '100%', height: 60, padding: '40%',borderRadius: 20}} source={SECOND}  />

        </TouchableOpacity>
        
</View>
    <View style={{flex: 1 , flexWrap: 'nowrap',flexDirection: 'row',marginBottom: '2%', borderBottomColor:day? '#8b4513': 'red', borderBottomWidth: 1, borderRadius: 10 }} >
          <TouchableOpacity style={{flexDirection: 'row',width: '50%',marginRight: '1%' }} onPress={()=>Linking.openURL('https://burger-king.by/menu/king_kombo/king_top_kombo/')}>
          <Image style={{width: '100%', height: 60, padding: '40%',borderRadius: 20}} source={THREE}  />
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection: 'row',width: '50%' }} onPress={()=>Linking.openURL('https://burger-king.by/novinki-i-aktsii/stud.php')} >
          <Image style={{width: '100%', height: 60, padding: '40%',borderRadius: 20}} source={FORE} />

        </TouchableOpacity>
      </View>
      <View style={{flex: 1 , flexWrap: 'nowrap',flexDirection: 'row', marginBottom: '2%', borderBottomColor:day? '#8b4513': 'red', borderBottomWidth: 1, borderRadius: 10 }} >
          <TouchableOpacity style={{flexDirection: 'row',width: '50%',marginRight: '1%' }} onPress={()=>Linking.openURL('https://burger-king.by/about/novosti-burgerkinga/kingserdtse-pomozhem-vmeste/')}>
          <Image style={{width: '100%', height: 60, padding: '40%',borderRadius: 20}} source={GOLD}  />
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection: 'row',width: '50%' }} onPress={()=>Linking.openURL('https://burger-king.by/menu/dzhunior_kombo/')}>
          <Image style={{width: '100%', height: 60, padding: '40%',borderRadius: 20}} source={BUMAGA}  />

        </TouchableOpacity>
      </View>
      <View style={{flex: 1 , flexWrap: 'nowrap',flexDirection: 'row',marginBottom: '2%', borderBottomColor:day? '#8b4513': 'red', borderBottomWidth: 1, borderRadius: 10  }} >
          <TouchableOpacity style={{flexDirection: 'row',width: '50%',marginRight: '1%' }} onPress={()=>Linking.openURL('https://burger-king.by/menu/burgery/')}>
          <Image style={{width: '100%', height: 60, padding: '40%',borderRadius: 20}} source={NEWITEM}  />
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection: 'row',width: '50%' }} onPress={()=>Linking.openURL('https://burger-king.by/novinki-i-aktsii/pepsi.php')}>
          <Image style={{width: '100%', height: 60, padding: '40%',borderRadius: 20}} source={LIMIT}  />

        </TouchableOpacity>
      </View>


      <View style={{flex: 1 , flexWrap: 'nowrap',flexDirection: 'row', marginBottom: '2%', borderBottomColor:day? '#8b4513': 'red', borderBottomWidth: 1, borderRadius: 10 }} >
          <TouchableOpacity style={{flexDirection: 'row',width: '50%',marginRight: '1%' }}  onPress={()=>Linking.openURL('https://burger-king.by/menu/burgery/')}>
          <Image style={{width: '100%', height: 60, padding:'40%',borderRadius: 20}} source={ANGUS} />
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection: 'row',width: '50%' }} onPress={()=>Linking.openURL('https://burger-king.by/menu/burgery/vopper/')}>
          <Image style={{width: '100%', height: 60, padding: '40%',borderRadius: 20}} source={VOPER}  />

        </TouchableOpacity>
      </View>
      <View style={{flex: 1 , flexWrap: 'nowrap',flexDirection: 'row', }} >
          <TouchableOpacity style={{flexDirection: 'row',width: '50%',marginRight: '1%' }} onPress={()=>Linking.openURL('https://burger-king.by/menu/king_kombo/')}>
          <Image style={{width: '100%', height: 60, padding: '40%',borderRadius: 20}} source={KOMBO}  />
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection: 'row',width: '50%' }} onPress={()=>Linking.openURL('https://burger-king.by/menu/krevetki/')} >
          <Image style={{width: '100%', height: 60, padding: '40%',borderRadius: 20}} source={KREVETKA} />

        </TouchableOpacity>
      </View>
    </View>
  ) 
}

export { Stocke}
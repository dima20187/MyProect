import React, { FC, useState } from 'react'
import { View, Text, TouchableHighlight, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Items} from '../../constants/Tovar/Items'
import { BurgerItems }from './components/BurgerItems'



 export const Burger = () => {

return (
<>
  <ScrollView style={{display:'flex', flexDirection:'column', backgroundColor: 'black'}}>
    <View style={{width: '100%', height: '100%', justifyContent: 'center'}} >
     <Text style={{color:'gold', textAlign: 'center', fontSize: 30, marginBottom:'3%'}} >Бургеры</Text>
      <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', flex:1,marginTop: '3%', padding: '2%',bottom: '5%'}} >
        {Items.map(item=>
          <BurgerItems items={item} key={item.name}/>
        )}
      </View>
    </View>
  </ScrollView>
</> 
);
}

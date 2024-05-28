import React from 'react'
import { View, Text } from 'react-native'

function AboutUs() {
  return (
<View style={{height: '100%',width: '100%'}}>
        <View style={{ width: '100%', }}>
            <Text style={{color: 'gold', textAlign: 'center', fontSize: 25,}} >КОНТАКТЫ</Text>
            <Text style={{color: 'gold', textAlign: 'center',fontSize: 25}} > ТЕЛЕФОН ДЛЯ СПРАВОК: </Text>
            <Text style={{color: 'gold', textAlign: 'center',fontSize: 25, textDecorationLine: 'underline'}} > +375 17 389-06-84 </Text>
        </View>
</View>
  )
}

export  {AboutUs}
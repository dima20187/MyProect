import React, { useEffect } from 'react'
import { View, Image} from 'react-native'
import { IMAGE } from '../../../assets/index'


const {LOGO} = IMAGE




export const Lounch =({navigation}) => {

  useEffect(()=>{
    setTimeout(()=>{
      navigation.reset({
        index: 0,
        routes: [{ name: 'Authorigate' }],
      })
   },1000);
  })

  return (
    <View 
    style={{
      backgroundColor: 'black',
      flex: 1,
      justifyContent: 'center',
      padding: 30,
      height: '100%',
    }}
    >
      <View>
      <Image style={{
        width: '75%', 
        height: '45%',
        alignSelf: 'center',
        marginTop: '35%',
        
        }} source={LOGO} />
      </View>
    </View>
  )
}


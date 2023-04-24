import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer} from '@react-navigation/native';
import { Lounch } from '../Authorigate/Lounch'
import { Screen } from '../Pages/Screen'
import { Korzina } from '../Pages/KorzinScreen/Korzina'
import { Authorigate } from '../Authorigate/Authorigate'






const Stack = createNativeStackNavigator()

function Navigation({navigation}) {
  return (

    <NavigationContainer>
    <Stack.Navigator>       
        <Stack.Screen name='Lounch' component={Lounch} options={{headerShown: false}} />
        <Stack.Screen name='Authorigate' component={Authorigate} options={{headerShown: false}} />
        <Stack.Screen name='Screen' component={Screen} options={{headerShown: false}} />
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export {Navigation}
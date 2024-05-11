import React from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/AntDesign';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer} from '@react-navigation/native';
import { Lounch } from '../components/LounchScreen/Lounch'
import { Screen } from '../components/HomeScreen/Screen'
import { Korzina } from '../components/KorzinScreen/Korzina'
import { Authorigate } from '../components/AuthorigateScreen/Authorigate'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Burger} from '../components/BurgerScreen/Burger';
import { Roll } from '../components/RollScreen/Roll';
import { Water } from '../components/WaterScreen/Water';
import { RootStackParams } from './types/@types';
import { RootState } from '../store';


export function Navigation({navigation}) {
  const Stack = createNativeStackNavigator<RootStackParams>();
  const Tab = createBottomTabNavigator<RootStackParams>();
  const tele = useSelector((state: RootState)=> state.telefon.autorigate)
  console.log(tele);

  return (
    <NavigationContainer>
      {!tele ?  (
      <Stack.Navigator>
      <Tab.Screen name='Lounch' component={Lounch} options={{headerShown: false,}} />
      <Stack.Screen name='Authorigate' component={Authorigate} options={{headerShown: false,}} />
      </Stack.Navigator>) 
      :(
      <Tab.Navigator
       screenOptions={{
        tabBarStyle:{ 
         backgroundColor: "black",
         borderColor:'gold' }, 
         tabBarActiveTintColor: "red",
         tabBarInactiveTintColor: "gold",
         }}> 
        <Tab.Screen name='Burger' component={Burger} options={{headerShown: false, tabBarIcon: ({color,size})=>(<Icon name="hamburger" color='gold' size={23}/>)}}/>
        <Tab.Screen name='Roll' component={Roll} options={{headerShown: false, tabBarIcon: ({color,size})=>(<Icons name='disconnect' color='gold' size={23}/>)}}/>
        <Tab.Screen name='Screen' component={Screen} options={{headerShown: false, tabBarIcon: ({color,size})=>(<Icon name="home" color='gold' size={23}/>)}}/>
        <Tab.Screen name='Water' component={Water} options={{headerShown: false, tabBarIcon: ({color,size,focused})=>(<Icon name="beer" color='gold' size={23}/>)}}/>
        <Tab.Screen name='Korzina' component={Korzina} options={{headerShown: false, tabBarIcon: ({color,size,focused})=>(<Icon name="shopping-basket" color='gold' size={23}/>)}}   />
    </Tab.Navigator>
    )}
    </NavigationContainer>
  )
}


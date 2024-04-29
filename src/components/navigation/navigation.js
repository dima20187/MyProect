import React from 'react'
import { useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/AntDesign';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer} from '@react-navigation/native';
import { Lounch } from '../Authorigate/Lounch'
import { Screen } from '../Pages/Screen'
import { Korzina } from '../Pages/KorzinScreen/Korzina'
import { Authorigate } from '../Authorigate/Authorigate'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Categories } from '../Pages/RollandBurgers/Categories';
import { Roll } from '../Pages/RollandBurgers/Roll';
import { Water } from '../Pages/RollandBurgers/Water';
import { Header } from '../Pages/Header';
import { ICONBAR } from '../../../assets/iconBar';
import { Image } from 'react-native';


const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
const  {BURGER} = ICONBAR

function Navigation({navigation}) {

  const tele = useSelector(state=> state.telefon.autorigate)
console.log(tele);
  return (

    <NavigationContainer >
      {!tele ?  (
      <Stack.Navigator>
      <Tab.Screen name='Lounch' component={Lounch} options={{headerShown: false,}} />
      <Stack.Screen name='Authorigate' component={Authorigate} options={{headerShown: false}} />
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
        <Tab.Screen name='Burger' component={Categories} options={{headerShown: false, tabBarIcon: ({color,size, tintColor})=>(<Icon name='hamburger' color='gold' size={23}/>)}}/>
        <Tab.Screen name='Roll' component={Roll} options={{headerShown: false, tabBarIcon: ({color,size})=>(<Icons name='disconnect' color='gold' size={23}/>)}}/>
        <Tab.Screen name='Home' component={Screen} options={{headerShown: false, tabBarIcon: ({color,size})=>(<Icon name='home' color='gold' size={23}/>)}}/>
        <Tab.Screen name='Water' component={Water} options={{headerShown: false, tabBarIcon: ({color,size,focused,tintColor})=>(<Icon name='beer' color='gold'  size={23}/>)}}/>
        <Tab.Screen name='Korzina' component={Korzina} options={{headerShown: false, tabBarIcon: ({color,size,focused,tintColor})=>(<Icon name='shopping-basket' color='gold'  size={23}  />)}}   />
    </Tab.Navigator>
    )}
    </NavigationContainer>
  )
}

export {Navigation}
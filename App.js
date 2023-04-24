import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/components/Pages/store/store';
import { Navigation } from './src/components/navigation/navigation';



export default function App() {
  return(  
<Provider store={store} >
 <Navigation /> 
<StatusBar 
animated={true}
hidden={true} 
backgroundColor='black'
/>
</Provider>
  )}
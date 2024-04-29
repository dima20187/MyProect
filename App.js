import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store, { persistor } from './src/components/Pages/store/store';
import { Navigation } from './src/components/navigation/navigation';
import { PersistGate } from 'redux-persist/integration/react';


export default function App() {
  return(  
<Provider store={store} >
  <PersistGate loading={null} persistor={persistor}>
 <Navigation />
 </PersistGate> 
<StatusBar 
animated={true}
hidden={true} 
backgroundColor='black'
/>
</Provider>
  )}
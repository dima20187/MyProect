
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import CounerReducer from './slice/CounterSlice'
import AsyncStorage from '@react-native-async-storage/async-storage';

const rootReducer = combineReducers({
    count: CounerReducer,
    telefon: CounerReducer,
})

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

 const store = configureStore({
    reducer: persistedReducer,
    middleware: []
})

export const persistor = persistStore(store)
export default store;
export type RootState = ReturnType<typeof store.getState>
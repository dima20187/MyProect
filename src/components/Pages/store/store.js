
import { configureStore } from "@reduxjs/toolkit";
import CounerReducer from '../../Counterslice/CounterSlice'

export const store = configureStore({
    reducer:{
        count: CounerReducer,
        telefon: CounerReducer,


    }
})
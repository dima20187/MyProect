import { createSlice } from "@reduxjs/toolkit";


  export const counterSlice  = createSlice({
    name: 'count',
    initialState: {
        count: [],
        telefon: [{
            id: '',
            phone: '',
            autorigate: false,
       }],
        autorigate: false
    },
    
    reducers:{
        add: (state,{payload})=>{
            let newCart = [...state.count]
            const found = newCart.find(({name})=> name === payload.name)
            if(found){
                state.count.forEach((post)=>post.name===payload.name ?post.quantity=post.quantity + 1:post.quantity)
           return
        }else {   
            state.count.push({
                id: new Date().toISOString(),
                image: payload.image,
                name:payload.name,
                price: payload.price,
                quantity: payload.quantity   
            } )
    
            console.log(state.count)
        }
            
           
        },
        remove: (state, {payload})=>{
           
            state.count = state.count.filter(({id})=> id !== payload)
           
        },

        plusItem: (state, {payload})=>{
            let newCart = [...state.count]
            const found = newCart.find(({name})=> name === payload.name)
            if(found){
                state.count.forEach((post)=>post.name===payload.name ?post.quantity=post.quantity + 1:post.quantity)
                
           return
        }},
    minusItem: (state, {payload})=>{
        let newCart = [...state.count]
        const found = newCart.find(({name})=> name === payload.name)
        if(found){
            state.count.forEach((post)=>post.name===payload.name ?post.quantity=post.quantity - 1:post.quantity )
            state.count.forEach((post)=>post.quantity ===0  ?post.quantity= 1:post.quantity )    
       return
    }},
        addTelefon: (state,{payload})=>{
            state.telefon.push({
                id: new Date().toISOString(),
                phone: payload,
                autorigate: true
            })
           
            console.log(state)
        },
        logOut: ()=>{
            return initialState
        }
    }
   })

   export const {add, remove,addTelefon,plusItem,minusItem, logOut} = counterSlice.actions

   export default counterSlice.reducer
 
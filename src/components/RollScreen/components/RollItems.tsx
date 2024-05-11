import { useDispatch, useSelector } from 'react-redux'
import React, { FC } from 'react'
import { View, Text, TouchableHighlight, Image, TouchableOpacity, ScrollView } from 'react-native'
import { IItems } from '../../../types/UserType'
import { add } from '../../../store/slice/CounterSlice'

interface ITover{
    items: IItems
}

export const RollItems: FC<ITover> = ({items}) => {
    const dispatch = useDispatch()

  return (
    <TouchableOpacity style={{backgroundColor: '#2E6038', marginBottom: '4%', borderRadius: 45, width: '48%'}} 
    key={items.name} onPress={()=> {dispatch(add(items))}}> 
                <>
                <Image style={{width: '100%',height: 150, padding: '24%'}} source={items.image} />
                <Text style={{textAlign: 'center', color: 'gold', fontWeight: 'bold',fontSize: 18}} >{items.name}  </Text>
                <Text style={{textAlign: 'center', color: 'gold', fontWeight: 'bold',fontSize: 16,marginTop: '3%',marginBottom: '3%' }}>Цена: {items.price} руб  </Text>
              </>
    </TouchableOpacity>   
  )
}


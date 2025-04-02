import React, { useState } from 'react'
import { MenuProvider } from 'react-native-popup-menu';
import {ListaCompras} from '../components/ListaCompras'

export default function App(){
    return(
        <MenuProvider>
            <ListaCompras/>
        </MenuProvider>
    ) 
}
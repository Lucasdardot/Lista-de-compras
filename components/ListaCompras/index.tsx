

import React,{ useState } from "react"
import {styles} from './styles'
import { Header } from "../Header"
import { Input } from "../Input"
import { ItemCompra } from "../ItemCompra.tsx"
import { Item } from "@/Types/Item"
import {View,FlatList} from "react-native"



export function ListaCompras(){

     const [item, setItem] = useState('')
        console.log(item)
        const[lista, setLista] = useState<Item[]>([])
        console.log(lista)

        const adicionarItem = ()=>{
            if (item.trim() === '') return;
            const novoItem: Item =  {
                id: Date.now().toString(),
                nome: item,
                comprado: false
            }
            setLista([...lista, novoItem])
            setItem('') //limpa o input
        }
        const remover = (id: string)=>{
           setLista(lista.filter((item)=> item.id !== id))
            
        }
        const toggleComprado = (id: string) =>{
            setLista(
                lista.map((item) =>
                    item.id === id? {
                        ...item, comprado: !item.comprado
                    }
                    : item           
                )
            )
        }
        const limparLista = () =>{
            setLista([])
        }

        const updateItem = (id:string, updates: Partial<Item>) =>{
            setLista(
                lista.map((item) =>
                    item.id === id ? {...item, ...updates} : item
                )
            )
        }






    return(
    <View style = {styles.container}>
        <Header limparLista={limparLista}/>
        <Input
        item={item}
        setItem = {setItem}
        adicionarItem = {adicionarItem}
            />
            <FlatList 
            data={lista}
            renderItem=
            {({item}) =>
                <ItemCompra 
                item={item}
                toggleComprado={toggleComprado}
                deleteItem={remover}
                updateItem={updateItem}
                />
            }
            keyExtractor={(item)=> item.id}
            />                                               
        </View>
    )
}




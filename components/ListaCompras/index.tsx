

import React,{ useEffect, useState } from "react"
import {styles} from './styles'
import { Header } from "../Header"
import { Input } from "../Input"
import { ItemCompra } from "../ItemCompra.tsx"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Item } from "@/Types/Item"
import {View,FlatList, Text} from "react-native"

export function ListaCompras(){

     const [item, setItem] = useState('')
        console.log(item)
        const[lista, setLista] = useState<Item[]>([])
        console.log(lista)

    //função para salvar a lista (execução do savelista())
    const saveLista = async (listaCompra: Item[])=>{
        try{
            await AsyncStorage.setItem('listaCompras', JSON.stringify(listaCompra))
        }catch(error){
            console.error ('Erro ao salvar a lista', error)
        }
    }

    const loadLista = async ()=>{
        try{
            const listaAtualizada = await AsyncStorage.getItem('listaCompras')
            if(listaAtualizada){
                setLista(JSON.parse(listaAtualizada))
            }
        }catch(error){
            console.error('Erro ao carregar a lista', error)
        }
    }

    useEffect(() =>{
        loadLista()
    },[])//executa ao abrir o app

    useEffect(()=>{
        saveLista(lista) //executa a função
    }, [lista]) //toda vez que o estado atualizar

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


        const totalPrice = () =>{
          return  lista.reduce((total, item)=>{
                if(item.preco){
                    const quantidadeTotal = item.quantidade || 1
                    return total + item.preco * quantidadeTotal
                }
                    return total

            },0)
            
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

            <View style={styles.totalBottom}>
                <Text style={styles.textTotal}>Total: R${totalPrice()}</Text>
            </View>

        </View>
    )
}




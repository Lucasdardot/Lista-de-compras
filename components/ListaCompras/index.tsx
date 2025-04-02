

import React,{ useState } from "react"

import {View,Text,StyleSheet, TextInput, Pressable, FlatList} from "react-native"
import { Colors } from "react-native/Libraries/NewAppScreen";



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

        

    return(
    <View style = {styles.container}>
        
            
            

            <FlatList 
            data={lista}
            renderItem=
            {({item}) =>

            <
            
        }

            keyExtractor={(item)=> item.id}
            style={styles.listcontainer}
            />
                                                
                    
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:"Black",
        padding:20,
       
    },
    
    
  
   
    listcontainer:{
        
    },
    textlist:{
        color:"white",
        display:'flex',
        flex:1
    },
    
    
    
    itemContainer:{
        display:"flex",
        flexDirection:"row",
        padding:10
    },

    btnCheck:{
        borderWidth:2,
        borderColor:"white",
        marginRight:10,
        borderRadius:4,
        width:30,
        height:30
    },
    check:{
        marginTop:1,
        color:"white",
        fontSize:20,
        textAlign:"center"
    },
    remove:{
        color:"white",
        marginTop:8,
        marginLeft:200
    }
})


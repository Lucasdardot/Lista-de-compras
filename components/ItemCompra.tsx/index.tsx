import React, { useState } from "react"
import{View, Pressable, Text, TextInput, Modal, TouchableOpacity} from 'react-native'
import{styles} from './styles'

interface Item{
    id: string
    nome: string
    comprado: boolean
    preco?: number
    quantidade?: number
    
}

interface ItemCompraProps{
    item: Item
    toggleComprado: (id:string)=> void
    deleteItem: (id: string) =>void
    updateItem: (id: string, updates: Partial<Item>) => void
}



export function ItemCompra({item,toggleComprado,deleteItem,updateItem}:ItemCompraProps) {

    const[modalVisible, setModalVisible] = useState(false)
    const[preco, setPreco] = useState(item.preco?.toString() || '')
    const[quantidade, setQuantidade] = useState(item.quantidade?.toString() || '')

    console.log(item.quantidade)

    const handleSave = ()=>{
        updateItem(item.id,
            {
                preco: preco ? parseFloat(preco) : undefined,
                quantidade: quantidade ? parseInt(quantidade) : undefined
            }  
        )
        setModalVisible(false)

    }

    const formartPreco = (value: string) =>{
        const cleanValue = value.replace(/[^0-9]/g, '') // [^0-9] apaga tudo que NÃO(^) é algo de 0-9, g = GLOBAL
        if(!cleanValue){ // se value está vazio, sai da função
            setPreco('')
            return
        }       

        //se tem um valor válido (0-9), a função é executada

        //converte de string para número e divide por 100 para transformar em reais

        const numberValue = parseInt(cleanValue, 10) /100 // transforma de '5'(string) para 5 (número)
        const formatValue = numberValue.toFixed(2).replace(".",",")
        setPreco(formatValue)
    }
    return (
        <View style = { styles.itemContainer } >
            <Pressable style={styles.btnCheck} onPress={ ()=> toggleComprado(item.id)}>
                <Text style={styles.check}>
                   {item.comprado ? '✓' : ''}
                </Text>
            </Pressable>
            <Text style={styles.textlist}>{item.nome || "Nome não disponível"}</Text>
            
            
            {(item.preco || item.quantidade) &&
                (
                    <Text style={styles.textPreco}>
                        {item.preco?`R$${item.preco.toFixed(2).replace(".",",")}`:""}
                        {item.quantidade? ` x${item.quantidade}`:""}
                    </Text>
                )
            }
                    
            

            <Pressable onPress={()=>deleteItem(item.id)}>
                <Text style={styles.remove}>Remover</Text>
            </Pressable>
               
            

            <TouchableOpacity style={styles.pressablePreco} onPress={()=>setModalVisible(true)}>
                <Text style = {styles.btnPreco}>$</Text>
            </TouchableOpacity>

            <Modal
             visible={modalVisible}
             transparent={true}
             animationType='slide'
             onRequestClose={()=>setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Text>Editar {item.nome}</Text>
                          <TextInput
                          style={styles.inputModal}
                          placeholder = "insira o preço"
                          value={preco}
                          onChangeText={formartPreco}
                          keyboardType = "numeric"
                            />
                            <TextInput
                          style={styles.inputModal}
                          placeholder = "insira a quantidade do item"
                          value={quantidade}
                          onChangeText={setQuantidade}
                          keyboardType = "numeric"
                            />

                        <View style={styles.modalButtons}>

                        <Pressable onPress={()=>setModalVisible(false)}>
                            <Text style = {styles.btnCancelar}>Cancelar</Text>
                        </Pressable>

                        <Pressable onPress={handleSave}>
                            <Text style = {styles.btnSave}>Salvar</Text>
                        </Pressable>
                        </View>
                        

                    </View>
                </View>
            </Modal>

            
        
        </View >
    )
}
import React from "react"
import{View, Pressable, Text} from 'react-native'
import{styles} from './styles'

export function ItemCompra() {
    return (
        <View style = { styles.itemContainer } >
            <Pressable style={styles.btnCheck} onPress={ ()=> toggleComprado(item.id)}>
                <Text style={styles.check}>
                   {item.comprado ? '✓' : ''}
                </Text>
            </Pressable>

            <Text style = {styles.textlist}>{item.nome}</Text>

            <Pressable onPress={()=>remover(item.id)}>
                <Text style={styles.remove}>Remover</Text>
            </Pressable>
        
        </View >
    )
}
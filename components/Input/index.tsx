import React from "react"
import {View,Text,TextInput, Pressable} from "react-native"
import {styles} from './styles'


interface InputProps {
    item: string
    setItem: (text: string) => void
    adicionarItem: ()=> void
}

export function Input({item,setItem,adicionarItem}: InputProps) {
    return (
        <View>
            <TextInput
                placeholder={'Escreva aqui'}
                style={styles.input}
                value={item}
                onChangeText={setItem}
            />

            <Pressable
                style={styles.btn} onPress={adicionarItem}>
                <Text style={styles.btntext}>Enviar</Text>
            </Pressable>
        </View>
    )
}
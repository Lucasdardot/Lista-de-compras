import React from "react"
import {styles, menuOpitionsStyles} from './styles'
import {View,Text } from "react-native"
    import {
        Menu,
        MenuOptions,
        MenuOption,
        MenuTrigger,
      } from 'react-native-popup-menu';

export function Header(){
    
    return(
        <View style = {styles.header}>
            <Text style = {styles.text}>LISTA DE MERCADO</Text>
                <Menu>
                    <MenuTrigger>
                        <Text style = {styles.optionsbtn}>•••</Text>
                    </MenuTrigger>
                    <MenuOptions customStyles={menuOpitionsStyles}>
                        <MenuOption onSelect={limparLista}>
                            <Text style={styles.limparText}>Limpar Lista</Text>
                        </MenuOption>
                </MenuOptions>
            </Menu>
        </View>
    )
}
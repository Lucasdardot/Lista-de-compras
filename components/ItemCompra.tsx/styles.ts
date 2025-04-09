import {StyleSheet} from "react-native"

export const styles = StyleSheet.create({
    itemContainer:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
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
    textlist:{
        color:"white",
        display:'flex',
        flex:1,
       backgroundColor:"gray"
    },
    remove:{
        color:"white",
        marginTop:8,
        marginLeft:200,
        borderColor:"red",
        borderWidth:1,
        
    },
    btnPreco:{
        color:"white",
        borderColor:"red",
        borderWidth:1,
        margin:0,
       
       
    },
    modalOverlay:{
        backgroundColor:'rgba(0,0,0,0.5)',
        flex :1,
        justifyContent:"center",
        alignItems:"center"
    },
    modalContainer:{
        backgroundColor:"white",
        width:'80%',
        borderRadius:10,
        alignItems:'center',
        padding:20
    },
    inputModal:{
        backgroundColor:'rgb(166, 166, 166)',
        padding:10,
        width:'100%',
        marginBottom:15
    },
    modalButtons:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:'100%'

    },
    btnSave:{
        color:'black'
    },
    btnCancelar:{
        color:'black'
    },
    pressablePreco:{
        alignItems:"center",
        justifyContent:"center",
        height:40,
        width:40
    },textPreco:{
        color:"white",
        flex:1,
        backgroundColor:"gray"
    }
})
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    topSearchBarContainer:{

    },
    topSearchBar: {
        elevation:4,
        shadowOffset: { width: 5, height: 5 },
        shadowColor: "grey",
        shadowOpacity: 0.5,
        shadowRadius: 10,
        alignItems:'center',
        flexDirection:'row',
        width:'95%',
        backgroundColor:'white',
        borderRadius:10,
        alignSelf:'center',
        margin:2,
        padding:6,
        position:'relative',
        top:-20,
        zIndex:3
    },
    textTopSearchBar:{
        margin:6
    },
    rightIconSearch:{
        flexDirection:'row',
        alignItems:'center'
    },
    type:{
        alignItems:'center',
        justifyContent:'center',
        height:120,
        width:'46%',
        elevation:4,
        shadowOffset: { width: 5, height: 5 },
        shadowColor: "grey",
        shadowOpacity: 0.5,
        shadowRadius: 10,
        backgroundColor:'white',
        margin:8,
        borderRadius:17
    },
    typeContainer:{
        flexDirection:'row',
        width:'100%',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    buttonConfirm:{
        width:'40%',
        borderRadius:50,
        alignSelf:'center',
        backgroundColor:'lightgray',
        fontFamily:'Raleway-Regular'
    }
    })
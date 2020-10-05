import { StyleSheet } from 'react-native';

export default  StyleSheet.create({
    formLogin:{
        width:'100%'
    },
    inputLogin:{
        backgroundColor:'white',
        padding:6,
        paddingLeft:15,
        borderRadius:30,
        borderColor:'transparent',
        fontFamily:"Raleway-Light",
        fontSize:18
    }
    ,
    inputContainer:{
        marginBottom:25,
        borderWidth: 0,
        borderColor:'transparent',
    },

    loginButton:{
        backgroundColor:'#f6d147',
        borderRadius:30,
        height:'100%',
        padding:6,
    },
    loginContainerButton:{
        height:45,
        marginBottom:25,
    },
    loginLogo:{
        marginBottom:20,
        width:400
    },
    headelogoin:{
        marginBottom:20,
        textTransform:'uppercase',
        color:'white'
    },
    copyright:{
        fontSize:11,color:'white',alignSelf:'center',position:'relative',top:'10%'
    },
    signUp:{
        backgroundColor:'red'
    },
    forgotenPassword:
    { fontSize: 14, color: '#ddd', alignContent: 'center', textAlign: 'center',marginTop:15 },
    titlelogin:{
        fontSize:17,
        fontFamily:"Raleway-Bold",
    },
    titlesignup:{
        fontFamily:"Raleway-Bold",
    }
})
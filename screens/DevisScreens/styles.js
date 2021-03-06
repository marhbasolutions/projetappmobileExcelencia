
import { StyleSheet } from 'react-native';

export default  StyleSheet.create({     
containerView: {
    flex: 1,
    backgroundColor:'#30336b'
  },
  loginScreenContainer: {
    flex: 1,
  },
  logoText: {
    fontSize: 40,
    fontWeight: "800",
    marginTop: 150,
    marginBottom: 30,
    textAlign: 'center',
  },
  loginFormView: {
    flex: 1
  },
  loginFormTextInputItem:{
      backgroundColor: '#fafafa',
  
  },

  loginButton: {
        height: 53,
  
    backgroundColor: '#f9db4d',
    borderRadius: 25,
    marginTop: 10,
      paddingLeft: 10,
      marginLeft: 15,
      marginRight: 15,
  },
  fbLoginButton: {
    height: 45,
    marginTop: 10,
    fontSize:39,
    backgroundColor: 'transparent',
  },
  
  ForgetPasszord: {
      height: 45,
      marginTop: 2,
      backgroundColor: 'transparent',
    },
    titleFirst: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff',
      paddingLeft: 10,
      marginBottom: 6,
      marginTop:8,
  
    },
    title1: {
  
      fontSize: 25,
      fontWeight: 'bold',
      color: '#fff',
      // opacity: 1,
      textShadowOffset: { width: 1, height: 2 },
      textShadowRadius: 10,
      textShadowColor: 'black'
    },
    divForm: {
      elevation: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.4,
      shadowRadius: 15,
      flex: 1,backgroundColor:'#fff',borderRadius:8,marginTop:-220 
    },
    genderContainer:{
      flexDirection: 'row', justifyContent: 'space-between',padding:10,alignItems:'center'},
      listItemForm:{height:50},
      innerInputForm:{height:50,width:'100%'},
      dropDownItem:{color:'black'},
      dropDown:{color:'black'}
})

import { StyleSheet } from 'react-native';

export default  StyleSheet.create({ 
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
      listItemForm:{height:50,marginTop:20},
      innerInputForm:{height:50,width:'100%'},
      dropDownItem:{color:'black'},
      dropDown:{color:'black'},
})
import React  from 'react';
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  section:{
    paddingHorizontal:6,
    marginTop:10,
    alignItems:'center',
    justifyContent:'center'
  },
  backGroundHalf:{
    position:'absolute',
    height:'45%',
    backgroundColor:'#242c62',
    flex:1,
    alignItems:'center',
    width:'100%',
    zIndex:0
},
servicesHome:{
    marginTop:6,
    paddingLeft:8,
    paddingRight:8,
},
rowServices:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:10
},
homeBigButton:{
    backgroundColor:'#f6d147',
    borderRadius:10,
    padding:10,
    flexDirection:'row',
    alignSelf:'center',
    width:'100%',
    height:60,
},
titleServiceHome:{
    fontSize:16,
    color:'white',
    alignItems:'center',
    alignSelf:'center',
    width:'80%',
    
},
counterIconHome:
{backgroundColor:'black',
borderRadius:100,
padding:8,
justifyContent:'flex-end',
alignItems:'flex-end',
alignSelf:'flex-end'
},
servicestitle:{
textTransform:'uppercase',
textAlign:'center',
textDecorationLine:'underline',
fontSize:20,
marginBottom:6
},
label:{
    fontFamily:'Raleway-Bold'
},
button:{width:'100%',marginTop:15,borderColor:'#fff',backgroundColor:'#242c62',alignItems:'center',justifyContent:'center',borderRadius:30},

})



import { StyleSheet } from 'react-native';

export default  StyleSheet.create({
    ServiceContainerBackground:{
        width:'100%',height:200,marginTop:10
    },
    backgroundGradient:{ padding: 15, alignItems: 'center', borderRadius: 5,height:'100%' },
    textContainerService :{ position:'absolute',bottom:10,left:10,width:'90%',justifyContent:'center'},
    serviceText:{fontSize:17,padding:7,paddingLeft:14,color:'white',marginTop:3,textTransform: 'uppercase'},
    subServiceBackground:{width:'100%',height:200,marginTop:10},
    subServiceNameContainer:{ position:'absolute',bottom:10,left:10,width:'80%',justifyContent:'center'},
    subServiceName:{fontSize:17,padding:7,paddingLeft:14,color:'#30336b',marginTop:3,textTransform: 'uppercase'},
    detailsHeaderBackground:{ padding: 10,  alignItems: 'flex-start',justifyContent:'flex-start',width:'100%'},
    detailsHeaderInner:{ alignSelf:'flex-start', alignItems:'center',flexDirection:'row', justifyContent:'center'},
    detailsHeaderName:{fontSize:17,padding:7,paddingLeft:14,color:'#242c62',marginTop:3,textTransform: 'uppercase'},
    optionsButton:{position:'absolute',right:10,bottom:10}

})
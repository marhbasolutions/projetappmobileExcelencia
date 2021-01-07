import React, { useEffect, useState } from 'react';
import {  ActivityIndicator,View ,Text,Image,StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard,TouchableOpacity, Alert  } from 'react-native';
import { Form, Grid, Col, Container, Content, Footer, FooterTab, Icon, Input, Item,Button, Segment, Body, Radio, Picker, ListItem, Left, Right, Toast,} from 'native-base';
import global from '../globalSytle';
import { WebView } from 'react-native-webview';

export default function CotisationsPayementScreen({route,navigation}) {

  const [saving, setsaving] = useState(true);
  const [ approvalUrl, setApprovalUrl] = useState('');
  const [ payerId, setPayerId] = useState('');

  useEffect(()=>{
      setApprovalUrl(route.params != null  && route.params.approvalUrl != null ? route.params.approvalUrl:'');
      setPayerId(route.params != null  && route.params.payerId != null ? route.params.payerId:'');
      setTimeout(()=>setsaving(false),1000);
  },[]);

  onNavigationStateChange = (webViewState) => {
    console.log('web view chnaged ',webViewState.url);
    console.log(' payer id  ',payerId)
    }

    return (
        <View flex={1}>
           { !saving ? (
              <WebView
                source={{
                  uri: String(approvalUrl)
                }}
                onNavigationStateChange={onNavigationStateChange.bind(this)}
                javaScriptEnabled = {true}
                domStorageEnabled = {true}
                startInLoadingState={false}
              />
           ):(
            <ActivityIndicator
            style={{justifyContent: 'center', alignSelf: 'center', flex: 1}}
            color="#f6d147"
            size={50}
          />
           )}
       </View>
        
    );
}

const  styles =   StyleSheet.create({ 
  title1: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
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




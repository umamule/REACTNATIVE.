import React, { Component } from 'react'
import { Text, View,SafeAreaView,StyleSheet } from 'react-native'

export default function App(){
  
    return (

      <View style={styles.container}>
        <Text> Hello world!! </Text>
      </View>
    )
  }
  const styles=StyleSheet.create(
    {
      container:{
        //backgroundColor:'#000000',
        color:'#FFFFFF',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      }
    }
  )




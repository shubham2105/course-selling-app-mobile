import { StyleSheet, Text, View } from 'react-native'
import {PORT} from "@env"
import React from 'react'
import RootNavigator from './src/navigation/RootNavigator'

const App = () => {
  return (
   <RootNavigator/>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }
})
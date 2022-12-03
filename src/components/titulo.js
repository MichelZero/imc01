import { StyleSheet, Text, View } from 'react-native' 
import React from 'react'

const Titulo = () => {
  return (
    <View>
      <Text style={styles.fonteBlue}>IMC</Text>
    </View>
  )
}

export default Titulo 

const styles = StyleSheet.create({
  fonteBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
})
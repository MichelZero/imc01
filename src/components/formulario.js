import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const Formulario = () => {
  return (
    <View>
      {/* criando uma div para os labels e input */}
      <View>
        <Text>Altura (cm)</Text>
        <TextInput
        placeholder="Ex: 172"
        keyboardType="numeric"
        ></TextInput>
        <Text>Peso (kg)</Text>
        <TextInput
        placeholder="Ex: 80.5"
        keyboardType="numeric"
        ></TextInput>
      </View>
    </View>
  )
}

export default Formulario

const styles = StyleSheet.create({})
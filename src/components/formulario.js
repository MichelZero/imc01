import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import Resultado from './resultado'

const Formulario = () => {
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [menssagemIMC, setMenssagemIMC] = useState('Informe os dados')
  const [IMC, setIMC] = useState(0)
  const [textoBotao, setTextoBotao] = useState('Calcular')

  function calcularIMC() {
    const imc = peso / (altura * altura)
    setIMC(imc).toFixed(2)
    if (imc < 18.5) {
      setMenssagemIMC('Abaixo do peso')
    } else if (imc >= 18.5 && imc < 24.9) {
      setMenssagemIMC('Peso normal')
    } else if (imc >= 25 && imc < 29.9) {
      setMenssagemIMC('Sobrepeso')
    } else if (imc >= 30 && imc < 34.9) {
      setMenssagemIMC('Obesidade grau 1')
    } else if (imc >= 35 && imc < 39.9) {
      setMenssagemIMC('Obesidade grau 2')
    } else if (imc >= 40) {
      setMenssagemIMC('Obesidade grau 3')
    }
  }

  return (
    <View>
      {/* criando uma div para os labels e input */}
      <View>
        <Text>Altura (cm)</Text>
        <TextInput
        placeholder="Ex: 172"
        keyboardType="numeric"
        />
        <Text>Peso (kg)</Text>
        <TextInput
        placeholder="Ex: 80.5"
        keyboardType="numeric"
        />
        <Button title="Calcular" onPress={() => {}}/>
      </View>
      Resultado menssagemResultadoIMC={menssagemIMC} resultadoIMC={IMC}/>
    </View>
  )
}

export default Formulario

const styles = StyleSheet.create({})
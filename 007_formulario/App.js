import React, { Component } from 'react';
import { View, Text, TextInput, Switch, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider'

import { styles } from './styles'
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      nome: "",
      idade: "",
      sexOpcao: [
        { cod: 0, value: 'M', label: 'Masculino' },
        { cod: 1, value: 'F', label: 'Feminino' },
      ],
      sex: 'M',
      escolaridadeOpicoes: [
        { cod: 0, value: 'EBI', label: 'Ensino Básico Incompleto' },
        { cod: 1, value: 'EBC', label: 'Ensino Básico Completo' },
        { cod: 2, value: 'EMI', label: 'Ensino Médio Incompleto' },
        { cod: 3, value: 'EMC', label: 'Ensino Médio Completo' },
        { cod: 4, value: 'ESI', label: 'Ensino Superior Incompleto' },
        { cod: 5, value: 'ISC', label: 'Ensino Superior Completo' },
      ],
      escolaridade: 'EBI',
      limitValue: 500,
      isBrazilian: true,
      hasResult: false
    };
    
    this.setNome = this.setNome.bind(this);
    this.setIdade = this.setIdade.bind(this);
  }
 
  setNome(text){
    this.setState({ nome: text });
  }

  setIdade(text){
    this.setState({ idade: text });
  }

  setSexo(value) {
    this.setState({ sexo: value })
  }

  setEscolaridade(value) {
    this.setState({ escolaridade: value })
  }

  setLimitValue(value) {
    this.setState({ limitValue: value })
  }

  setIsBrazilian(state) {
    this.setState({ isBrazilian: state })
  }

  setHasResult(state) {
    this.setState({ hasResult: state })
  }

  render(){
    
    const sexItems = this.state.sexOpcao.map(({ cod, value, label }) => {
      return <Picker.Item key={cod} value={value} label={label} />
    })

    const scholarshipItems = this.state.escolaridade.map(({ cod, value, label }) => {
      return <Picker.Item key={cod} value={value} label={label} />
    })

    const returnLabelFromValue = (value, origin) => {
      const arr = origin == 'sex' ? this.state.sexOpcao : this.state.escolaridadeOpicoes
      let text = ''
      arr.forEach(item => {
        if(item.value == value) text = item.label
      })
      return text ? text : value
    }

    return(
      <View style={styles.container}>

        <Text style={styles.title}> Abertura de Conta </Text>
        
        <View style={styles.containerInput}>
          <Text style={styles.label}>Nome: </Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            onChangeText={this.setNome}
          />
        </View>

        <View style={styles.containerInput}>
          <Text style={styles.label}>Idade: </Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua idade"
            onChangeText={this.setIdade}
          />
        </View>

        <View style={styles.containerInput}>
          <Text style={styles.label}>Sexo: </Text>
          <Picker 
            style={styles.input}
            selectedValue={this.state.sex}
            onValueChange={(itemValue, itemIndex) => this.setSex(itemValue)}
          >
            { sexItems }
          </Picker>
        </View>

        <View style={styles.containerInput}>
          <Text style={styles.label}>Escolaridade: </Text>
          <Picker 
            style={styles.input}
            selectedValue={this.state.escolaridade}
            onValueChange={(itemValue, itemIndex) => this.setEscolaridade(itemValue)}
          >
            { scholarshipItems }
          </Picker>
        </View>

        <View style={styles.containerInput}>
          <Text style={styles.label}>Limite: </Text>
          <Slider 
            style={styles.input}
            minimumValue={100}
            maximumValue={1000}
            step={10}
            onValueChange={value => this.setLimitValue(value)}
            value={this.state.limitValue}
          />
        </View>

        <View style={styles.containerInput}>
          <Text style={styles.label}>Brasileiro: </Text>
          <Switch 
            value={this.state.isBrazilian}
            onValueChange={state => this.setIsBrazilian(state)}
          />
        </View>
  
        <View style={styles.containerButton}>
          <Pressable 
            onPress={() => this.setHasResult(true)} 
            style={[styles.button, styles.buttonBlue]}
          >
            <Text style={styles.buttonText}> Confirmar </Text>
          </Pressable>
        </View>

        {
          this.state.hasResult && 
          <View>
            <Text> Nome: { this.state.nome } </Text>
            <Text> Idade: { this.state.idade } </Text>
            <Text> Sexo: { returnLabelFromValue(this.state.sex, 'sex') } </Text>
            <Text> Escolaridade: { returnLabelFromValue(this.state.escolaridade, 'scholarship') } </Text>
            <Text> Limite: { this.state.limitValue } </Text>
            <Text> Brasileiro: { this.state.isBrazilian ? 'Sim' : 'Não' } </Text>
          </View>
        }

      </View>
    );
  }
}
 
export default App;tr
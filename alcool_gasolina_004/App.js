import React, { Component } from 'react';
import {Image, View, Text, StyleSheet, Button, Pressable,  TextInput, TouchableHighlight} from 'react-native';
 
class App extends Component{

  constructor(props) {
    super(props);
  
    this.state = {
      gasolina: '',
      alcool: '',
      result:''
    };
    this.calcular.bind(this);
  }

  calcular  = () => {
    const { gasolina, alcool } = this.state;
    let condicao = gasolina / alcool > 0.7;
    let resposta;
    if(condicao){
      resposta =  'O valor do Alcool está mais vantajoso'
    }else{
      resposta = 'O valor da Gasolina está mais vantajoso'
    }
    this.setState({
      result: resposta
    });
  }

  render(){
 
 
    return(
      <View style={styles.container}>
        <Text style={{color: '#000000', fontSize: 25, margin: 15}}>
         Alcool ou Gasolina?
        </Text>
 
        <Imagem />
 
        <TextInput
        style={styles.input}
        placeholder="Valor do Alcool"
          value={this.state.alcool}
          onChangeText={(alcool) => this.setState({alcool})}
        />
  
        <TextInput style={styles.input}
        placeholder="Valor da Gasolina"
          value={this.state.gasolina}
          onChangeText={(gasolina) => this.setState({gasolina})}
        />

        <Pressable style={styles.botao} onPress={ this.calcular}>
        <Text style={styles.textoBotao}>Verificar</Text>
        </Pressable>
        <Text style={styles.texto}>{this.state.result}</Text>
 
      </View>
    )
  }
}
 
class Imagem extends Component {
  render(){
    
    let img = 'https://i.ibb.co/P5TdWrD/ilustra-flex.jpg';
 
    return(
        <Image
        source={{ uri: img }}
        style={{ width: 350, height: 300, borderRadius: 10, marginBottom: 10}}
      />
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
  },
  input:{
    width: 350,
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
    borderRadius: 6
  },
  botao:{
    width: 350,
    height: 50,
    marginTop : 10,
    backgroundColor: '#3D8FA4',
    borderRadius: 6
  },
  textoBotao:{
    textAlign: 'center',
    marginTop: 8,
    height: 45,
    fontSize: 24,
    color: '#FFF'
  },
})
 
export default App;
import React, { cloneElement, Component } from 'react';
import { View, Text, StyleSheet, Button, Pressable,  TextInput, TouchableHighlight} from 'react-native';
 
class App extends Component{

  constructor(props) {
    super(props);
  
    this.state = {
      firstValue: '',
      secondValue: '',
      result:0
    };
  }
  
  calcular  = () => {
    const { firstValue, secondValue } = this.state;
  
    this.setState({
      result: Number(firstValue) * Number(secondValue)
    });
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Multiplicador de Números</Text>
        <TextInput
        style={styles.input}
        placeholder="Digite o 1º numero"
          value={this.state.firstValue}
          onChangeText={(firstValue) => this.setState({firstValue})}
        />
  
        <TextInput style={styles.input}
        placeholder="Digite o 2º numero"
          value={this.state.secondValue}
          onChangeText={(secondValue) => this.setState({secondValue})}
        />

        <Pressable style={styles.botao} onPress={ this.calcular}>
        <Text style={styles.textoBotao}>Calcular</Text>
      </Pressable>
        <Text style={styles.texto}>{this.state.result}</Text>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#FAF7EC'
  },
  input:{
    height: 45,
    borderWidth: 1,
    borderColor: '#56ACC1',
    margin: 10,
    fontSize: 16,
    color: '#000000',
    padding: 10,
    borderRadius: 4
  },
  texto:{
    textAlign: 'center',
    fontSize: 50,
    color: '#000000'
  },
  titulo:{
    color:'#000000',
    marginTop:50,
    textAlign: 'center',
    fontSize:20
  },
  botao:{
    width: 200,
    height: 50,
    marginTop : 10,
    marginLeft:110,
    backgroundColor: '#3D8FA4',
    borderRadius: 6
  },
  textoBotao:{
    textAlign: 'center',
    marginTop: 10,
    height: 45,
    fontSize: 20,
    color: '#FFFFFF',
    
  }
})
 
export default App;
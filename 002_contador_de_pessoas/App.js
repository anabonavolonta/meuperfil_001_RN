import React, { cloneElement, Component } from 'react';
import { View, Text, StyleSheet, Button, Pressable} from 'react-native';
 
class App extends Component{

  state = {
    counter: 0,
    };

  adicao(){
    this.setState({counter: this.state.counter + 1});

  }
  subtracao(){
    this.setState({counter: this.state.counter -1});      
    }

  
 
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.titulo}>Contador de Pessoas</Text>
        <Text style={styles.texto}> {this.state.counter} </Text>
      <Pressable style={[styles.botao,styles.corBotaoMais]} onPress={() => this.adicao()}><Text style={styles.textoBotao}>+</Text></Pressable>
      <Pressable style={[styles.botao,styles.corBotaoMenos]} onPress={() => this.subtracao()}><Text style={styles.textoBotao}>-</Text></Pressable>

 
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 10,
    backgroundColor: '#FAF7EC'
  },
  input:{
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 10,
    padding: 10,
  },
  texto:{
    textAlign: 'center',
    fontSize: 80,
  },
  titulo:{
    color:'#000000',
    marginTop:70,
    textAlign: 'center',
    fontSize:30
  },
  botao:{
    width: 300,
    height: 60,
    marginTop : 15,
    marginLeft:100,
    backgroundColor: '#0A99A2',
    borderRadius: 6
  },
  textoBotao:{
    textAlign: 'center',
    margin: -2,
    height: 45,
    fontSize: 40,
    color: '#FFF'
  },
  corBotaoMais:{
    backgroundColor: '#0A99A2'
  },
  corBotaoMenos:{
    backgroundColor: '#8FDADF'
  }
})
 
export default App;
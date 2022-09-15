import React, { Component } from 'react';
import {Image, View, Text, StyleSheet, Button, Pressable,  TextInput, TouchableHighlight} from 'react-native';
 
class App extends Component{

  constructor(props) {
    super(props);
  
    this.state = {
      result:''
    };
    this.calcular.bind(this);
  }

  calcular  = () => {
    let aleatorio = Math.random();
    aleatorio = Math.floor(aleatorio *10);
    this.setState({
      result:aleatorio
    });
  }

  render(){
 
 
    return(
      <View style={styles.container}>
        <Text style={{color: '#000000', fontSize: 24, margin: 15, textAlign: 'center'}}>
         Você se acha uma rocha, mas eu consigo saber os seus pensamentos
        </Text>
 
        <Imagem />
        <Text style={styles.texto}>Clique no botão abaixo e te mostrarei o número que esta pensando </Text>
        
        
        <Pressable style={styles.botao} onPress={ this.calcular}>
        <Text style={styles.textoBotao}>Ver se ele acertou</Text>
        </Pressable>
        <Text style={{fontSize: 36, marginTop: 20}}>{this.state.result}</Text>
 
      </View>
    )
  }
}
 
class Imagem extends Component {
  render(){
    
    let img = 'https://wegotthiscovered.com/wp-content/uploads/2022/04/doctor-strange-2-1.jpg';
 
    return(
        <Image
        source={{ uri: img }}
        style={{ width: 450, height: 300, borderRadius: 6, marginBottom: 10}}
      />
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
  },
  input:{
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  botao:{
    width: 400,
    height: 50,
    marginTop : 10,
    backgroundColor: '#366D98',
    borderRadius: 6
  },
  textoBotao:{
    textAlign: 'center',
    marginTop: 5,
    height: 45,
    fontSize: 24,
    color: '#FFF'
  },
})
 
export default App;
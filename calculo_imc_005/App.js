import React, { Component } from 'react';
import {
 StyleSheet,
 Text,
 TextInput,
 TouchableOpacity,
 View,
 Image
} from 'react-native';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {altura:0,massa:0,resultado:0,resultadoText:""}
    this.calcular = this.calcular.bind(this)
  }
  calcular(){
   let imc = this.state.massa / (this.state.altura * this.state.altura)
   let s = this.state
   s.resultado = imc
   if(s.resultado < 16){
     s.resultadoText ='Muito abaixo do peso'
   }
    else if (s.resultado < 17){
     s.resultadoText ='Moderadamente abaixo do peso'
    }
    else if (s.resultado < 18.5){
     s.resultadoText ='Abaixo do peso'
    }
    else if (s.resultado < 25) {
     s.resultadoText ='Saudavel'
    }
    else if (s.resultado < 30) {
     s.resultadoText ='Sobrepeso'
    }
    else if (s.resultado < 35) {
     s.resultadoText ='Obesidade Grau 1°'
    }
    else if (s.resultado < 40) {
      s.resultadoText ='Obesidade Grau 2°'
    }
    else{
      s.resultadoText ='Obesidade Grau 3°'
    }
   this.setState(s)



  }

  render() {
    return (
      <View style={styles.container}>
        <Imagem />
        <Text style={{color: '#000000', fontSize: 25, marginTop: 25}}>
         Calculador IMC
        </Text>
        <View style={styles.entrada}>
          <TextInput autoCapitalize="none" placeholder="Altura"  style={styles.input} onChangeText={(altura)=>{this.setState({altura})}}/>
          <TextInput autoCapitalize="none" placeholder="Peso atual"  style={styles.input} onChangeText={(massa)=>{this.setState({massa})}}/>
        </View>
        <TouchableOpacity style={styles.button} onPress={this.calcular}><Text style={styles.buttontext}>Calcular</Text></TouchableOpacity>
        <Text style={styles.resultado}>{this.state.resultado.toFixed(2)}</Text>
        <Text style={[styles.resultado,{fontSize:20}]}>{this.state.resultadoText}</Text>

    </View>
    );
  }
}

class Imagem extends Component {
  render(){
    
    let img = 'https://www.plasticadosonho.com.br/wp-content/uploads/2017/12/blog-06-como-calcular-o-imc.jpg';
 
    return(
        <Image
        source={{ uri: img }}
        style={{ width: 500, height: 300, borderRadius: 6}}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 80,
    
  },
  entrada:{
    flexDirection:'row',
  },
  input:{
    height:50,
    textAlign:"center",
    width:"50%",
    fontSize:24,
    marginTop:15,
  },
  button:{
    width: 200,
    height: 50,
    margin:10,
    borderRadius: 6,
   backgroundColor:"#3D8FA4",
  },
  buttontext:{
    textAlign:"center",
    marginBottom: 15,
    marginTop: 9,
    fontSize:24,
    
    color:"#FFFFFF",
  },
  resultado:{
    alignSelf:"center",
    color:"lightgray",
    fontSize:24,
    fontWeight:'bold',
    padding: 6,
  },
})
export default App;
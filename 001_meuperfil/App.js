import React, { Component } from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';
 
class App extends Component{
  render(){
 
    let nome = 'Ana Carolina';
    let img = 'https://i.ibb.co/1G6YHKZ/foto.jpg';
 
    return(
      <View style={styles.centered}>
        <Text style={{color: '#FFFFFF', fontSize: 30, marginTop: 20, marginRight: 140, padding: 0}}><b>Meu Pefil ♡</b></Text>
 
 <Image
   source={{ uri: img }}
   style={{ width: 300, height: 300, borderColor:'#FFFFFF', borderRadius: 5, borderWidth: 10}}
 />

 <Text style={{color: '#000000', fontSize: 25, marginBottom: 0, marginTop: 50}}><b>Ana Carolina Ronqui Bonavolontá</b></Text>
 <Text style={{color: '#000000', fontSize: 16, marginBottom: 0, marginTop: 10}}>Profissão: UX/UI Designer</Text>
 <Text style={{color: '#000000', fontSize: 16, marginBottom: 0, marginTop: 10}}>Idade: 30 anos</Text>
 <Text style={{color: '#000000', fontSize: 16, marginBottom: 0, marginTop: 10}}>Curso: Sistemas para Internet</Text>
</View>
)
}


}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d1bea8",
  }
});

export default App;
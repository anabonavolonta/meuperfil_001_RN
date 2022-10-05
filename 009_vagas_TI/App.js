import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import Pessoa from './src/Pessoa';
class App extends Component{
 
  constructor(props) {
    super(props);
    this.state = {
      feed:[
        {id: 1, nome: 'UX/UI Design', salario: 5.600, descricao:"O objetivo do UX Design é auxiliar o seu usuário a realizar ações em seu site ou produto.", email: 'ana.ronqui@gmail.com'},
        {id: 2, nome: 'Engenheiro de Software I', salario: 4.000, descricao:"Trabalhar no desenvolvimento de programas de computador, buscando a inovação e a ciência para garantir maior desempenho", email: 'j.victor@gmail.com'},
        {id: 3, nome: 'Líder de Tecnologia', salario: 18.000, descricao:"Experiências com desenvolvimento em Java 11 e superiores;",email: 'giovanna@gmail.com'},
        {id: 4, nome: 'Analista de QA Senior', salario: 9.000, descricao:"Profissional responsável por gerenciar o processo de qualidade;",email: 'v.zaki@gmail.com'},
        {id: 5, nome: 'Product Owner Jr.', salario: 6.000, descricao:"Incentivar e praticar as rotinas ágeis entre os squads;", email: 'alan_k@gmail.com'},
      ]
    }
  }
 
  render(){
    return(
      <View style={styles.container}>
           <Text style={styles.titulo}>Vagas</Text>
        <FlatList 
        data={this.state.feed}
        keyExtractor={(item) => item.id}
        renderItem={ ({item}) => <Pessoa data={item}/>}
        />
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  titulo:{
    color: '#F0F',
    fontSize: 35,
    marginTop:45,
    textAlign: 'center',
  },
})
 
export default App;
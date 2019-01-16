/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Nav from './src/Nav/nav'
import Generate from './src/Generate/generate';
import ListItem from './src/ListItem/ListItem'


export default class App extends Component {

  state = {
    nameOfApp:"My app u.u",
    random:[20,13,]
  }

  onAddRandom = () => {
   const random = Math.floor(Math.random() *100) + 1;
   this.setState(prevState => {
     return{

      random:[...prevState.random,random]

     }
   })
  }
  onItemDelete = (i) => {
   const newArray = this.state.random.filter((item, index) =>{
     return i != index

   });
   this.setState({
    random:newArray
  })
   
    
  }
  render() {
    return (
      <View style={styles.container}>
      <Nav nameOfApp={this.state.nameOfApp} />
      <Generate  add={this.onAddRandom}/>
      <ListItem items={this.state.random} delete={this.onItemDelete} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

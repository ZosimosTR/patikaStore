import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, TextInput, FlatList, ScrollView} from 'react-native';
import Card from './companents/Card';
import json_data from './item_data.json';


const App=() =>{

return (
  <SafeAreaView style={Style.container}>
    <View>
      <Text style={Style.logo}>PATIKASTORE</Text>
      <TextInput style={Style.search} placeholder="Ara..."/>
    </View>
    <ScrollView style={Style.scrollView}>
      <FlatList
        numColumns={2}
        data={json_data}
        renderItem={({item}) => <Card inf={item}/>}/>
    </ScrollView>
  </SafeAreaView>
)};

const Style=StyleSheet.create({
  container:{
    margin:5,
  },
  logo:{
    fontSize:26,
    color:"purple",
    fontWeight:"bold",
    fontFamily:"fantasy",
  },
  scrollView:{
    marginHorizontal: 0,
  },
  search:{

    backgroundColor:"#eceff1",
    borderRadius:10,
    marginTop:10,
    marginBottom:10,
  },
});

export default App;

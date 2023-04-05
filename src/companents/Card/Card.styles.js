import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
container:{
  backgroundColor:"#eceff1",
  margin:10,
  marginLeft:0,
  width: 180,
},
  body:{
  marginTop:10,
    marginBottom:10,
    alignItems:"center",
  },
  image:{
  width: 150,
    height:200,
    backgroundColor: "grey",
  },
  bottom: {
    marginTop: 3,
    marginBotom: 3,
  },
  title: {
    width: 150,
    fontWeight: "bold",
    color:"black",
  },
  price: {
    color: "#9C9C9C",
  },
  inStock: {
    color: "red",
    fontWeight: "bold",
    fontSize: 15,
  },
});

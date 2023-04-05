import React from 'react';
import {View, Text, Image,} from 'react-native';
import styles from './Card.styles';

const Card=({inf})=>{
return(
  <View style={styles.container}>
    <View style={styles.body}>
      <View style={styles.top}>
        <Image style={styles.image} source={{uri: inf.imgURL}} />
      </View>
      <View style={styles.bottom}>
        <Text style={styles.title}>{inf.title}</Text>
        <Text style={styles.price}>{inf.price}</Text>
        <Text style={styles.inStock}>{inf.inStock ? "" : "STOKTA YOK"}</Text>

      </View>
    </View>
  </View>

);
};

export default Card;

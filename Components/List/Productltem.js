import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const Productltem = ({product}) => {
  return (
    <View>
      <Image source={{uri: product.image}} style={styles.image}/>
      <Text>{product.description}</Text>
    </View>
    
  )
}

export default Productltem;

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 300,
  }
})
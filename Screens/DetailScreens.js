import { StyleSheet, Text, View, Image, Button, Dimensions, useWindowDimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import Header from '../Components/Header'

const DetailScreens = ({ product= 
    {
    id: 6,
        category: 2,
        description: "Product 6",
        price: 110.25,
        image: "https://picsum.photos/200/300"
    },
    navigation
 }) => {

  const {width, height} = useWindowDimensions();
  const [orientation, setOrientation] = useState("portrait");

  useEffect(() => {
      setOrientation( height > width ? "portrait" : "landscape" )
  }, [height, width])

  //console.log(orientation);

  const handleBack = () => {
    navigation.goBack()
}


  return (
 
    <>

    <Header title={product.description}/>
    <View style={orientation === 'portrait' ? styles.containerVertical : styles.containertHorizontal}>  
        <Image
            source={{uri: product.image}}
            style={styles.image}
            resizeMode="cover"
        >
        </Image>
      <Text>{product.description}</Text>
      <Text>$ {product.price}</Text>
      <Button title='Go Back' onPress={handleBack}/>
    </View>


    </>
  )
}

export default DetailScreens

const styles = StyleSheet.create({
    containerVertical: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containertHorizontal: {
        flex: 1,
        flexDirection: 'row'
    },
    image:{
        width: 0.8 * Dimensions.get('window').width,
        height: 300,
        marginTop: 30
    }
})
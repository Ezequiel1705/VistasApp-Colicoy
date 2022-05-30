import React from 'react'
import { View, Text, StyleSheet, } from 'react-native'
import { Colors } from '../../Styles/Colors'
import { Dimensions, useWindowDimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CategoryItem = ({category}) => {

  const {width, height} = useWindowDimensions();

  //console.log(windowWidth, windowHeight);
  console.log(width, height);

  return (
    <View style={{...styles.container,
      maxWidth: 0.4 * width,
      maxHeight: 0.25 * height,
     }}>  
      <Text style={styles.text}>{category.category}</Text>       
    </View>
  )
}

export default CategoryItem;

const styles = {
    container: {
        width: 150,
        height: 150,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 15,
        backgroundColor: Colors.regularBlue,
        
        margin: 15,
        borderRadius: 10,
        shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 6,
      },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,
      elevation: 12,
      borderRadius: 12,
    },
    text:{
        fontSize:18,
        color: 'black',
        fontFamily: 'Koulen',
        
    },
}
import React from 'react'
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import CategoryItem from './CategoryItem'
import Productltem from './Productltem'

const List = ({ itemType = "category", data, onPress }) => {

    const fnRender = ({item}) => {
        return (
            <TouchableOpacity onPress={() => onPress(item)}>
                {itemType === "category" ?
                <CategoryItem category={item}/>
                :
                <Productltem product={item}/>}    
            </TouchableOpacity>
        )
    }

    return (
        <FlatList  
            numColumns={itemType === "category" ? 2: 1}
            data = {data}
            renderItem = {fnRender}
            keyExtractor={item => item.id}
              
        />
    )

  
}

export default List;
const styles = StyleSheet.create ({})
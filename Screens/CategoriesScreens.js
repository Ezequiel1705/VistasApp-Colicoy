import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import Searcher from '../Components/Searcher'
import Header from '../Components/Header'
import { Colors } from '../Styles/Colors'
import List from '../Components/List'
import { CATEGORIES } from '../Data/categories'
import { Entypo } from '@expo/vector-icons'; 
import { bounceIn } from 'react-animations'



const CategoriesScreens = ({navigation}) => {

    const [input, setInput] = useState("")
    const [categoriesFilter, setCategoriesFilter] = useState(CATEGORIES)
  

    useEffect(() => {
        if (input === "") setCategoriesFilter(CATEGORIES)
            else {
                console.log("Se ejecuta el efecto");
                const categoriasFiltradas = CATEGORIES.filter(category => category.category.toLowerCase().includes(input.toLocaleLowerCase()));
                setCategoriesFilter(categoriasFiltradas)
            }
    }, [input])

    const handleErase = () => {
        setInput("");
    }

    const handleSelectedCategory = (category) => {
        //console.log(category);
        //handleCategory(category)
        navigation.navigate("Product")
    }


  return (
    <> 
        <Header />
            <View style={styles.container}>
                <Searcher additionalStyles={{
                    backgroundColor: Colors.lightBlue
                }}>
                    <TextInput
                        value={input}
                        onChangeText={setInput}
                        keyboardType="default"
                        style={styles.input}
                        placeholder = "Ingrese categoria deseada"
                    />
                    <TouchableOpacity onPress={handleErase}>
                        <Entypo name="erase" size={35} color="black" />
                    </TouchableOpacity>
                </Searcher>
                
                <View style={styles.listContainer}>  
                    <List data={categoriesFilter} onPress={handleSelectedCategory}/>                                         
                </View>
                
            </View>
    </>
  )
}

export default CategoriesScreens;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'column',
    },
    input: {
        width: '80%',
        padding: 10,
        margin: 10,
        backgroundColor: Colors.darkBlue,
        borderRadius: 10,
        color: 'white',
        height: 50,
    },
})
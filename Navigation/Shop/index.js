import { StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import CategoriesScreens from '../../Screens/CategoriesScreens';
import ProductsScreen from '../../Screens/ProductsScreen';
import DetailScreens from '../../Screens/DetailScreens';



  const Stack = createNativeStackNavigator();
  
  function MainNavigator() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Categories"
              screenOptions={{
                headerShown: false,
              }}
        >
          <Stack.Screen name="Categories" component={CategoriesScreens} />
          <Stack.Screen name="Product" component={ProductsScreen} />
          <Stack.Screen name = "Detail" component={DetailScreens} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

export default MainNavigator;

const styles = StyleSheet.create({})
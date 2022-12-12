import { View, Text } from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import Home from './src/screens/Home'
import RestaurantDetails from './src/screens/RestaurantDetails'
import {Provider as ReduxProvider} from 'react-redux';
import configureStore from './redux/store'
import OrderCompleted from './src/screens/OrderCompleted'


const store = configureStore()

const Navigation = () => {
    const Stack = createStackNavigator()

    const screenOptions = {
      headerShown: false
    }
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={screenOptions} >
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='RestaurantDetails' component={RestaurantDetails} />
            <Stack.Screen name='OrderCompleted' component={OrderCompleted} />
        </Stack.Navigator>
    </NavigationContainer>
    </ReduxProvider>
  )
}

export default Navigation
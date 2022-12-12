import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import HeaderTab from '../components/Home/HeaderTab'
import SearchBar from '../components/Home/SearchBar'
import Categories from '../components/Home/Categories'
import RestaurentItem, {localRestaurants} from '../components/Home/RestaurentItem'
import BottomTabs from '../components/Home/BottomTabs'

const Home = ({navigation}) => {

  const [restaurantData, setRestaurantData] = useState(localRestaurants)
  return (
    <SafeAreaView style={{backgroundColor:'#eee', flex:1}}>
      <View style={{backgroundColor:'white', padding:15}}>
      <HeaderTab/>
      <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={true} >
      <Categories />
      <RestaurentItem restaurantData ={restaurantData} navigation={navigation} />
      </ScrollView>  
      <BottomTabs/>
    </SafeAreaView>
  )
}

export default Home
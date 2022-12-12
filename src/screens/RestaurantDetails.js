import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import About from '../components/resturantDetails/About'
import MenuItems from '../components/resturantDetails/MenuItems'
import ViewCart from '../components/resturantDetails/ViewCart'


const food = [
  {
      id:1,
      title: 'Lasagna',
      description: "with butter lettuce, tamato and sauce bechamel",
      price: '$13.50',
      image: "https://i.postimg.cc/RCcdhbyt/th.jpg"
  },
  {
      id:2,
      title: 'Tandoori chicken',
      description: "Amazing tandoori dish with tenderloin chicken off the sizeles",
      price: '$19.20',
      image: "https://i.postimg.cc/FRKfvzMG/th-1.jpg"
  },
  {
      id:3,
      title: 'Chilaquiles',
      description: "Chilaquiles with cheese and sauce. A delicious maxican sizeles",
      price: '$23.20',
      image: "https://i.postimg.cc/0NNx2Bfd/th-2.jpg"
  },
  {
      id:4,
      title: 'Chicken caesar salad',
      description: "One can never go wrong a chicken caesar salad. A delicious indian sizeles",
      price: '$39.20',
      image: "https://i.postimg.cc/44PDn5YW/caesar-salad-with-grilled-chicken-121664016-5bd22cbc46e0fb00519577c3.jpg"
  },
  {
      id:5,
      title: 'Chilaquiles',
      description: "Chilaquiles with cheese and sauce. A delicious maxican sizeles",
      price: '$32.20',
      image: "https://i.postimg.cc/0NNx2Bfd/th-2.jpg"
  },
  {
      id:6,
      title: 'Chicken caesar salad',
      description: "One can never go wrong a chicken caesar salad. A delicious indian sizeles",
      price: '$41.20',
      image: "https://i.postimg.cc/44PDn5YW/caesar-salad-with-grilled-chicken-121664016-5bd22cbc46e0fb00519577c3.jpg"
  },
  {
      id:7,
      title: 'Chilaquiles',
      description: "Chilaquiles with cheese and sauce. A delicious maxican sizeles",
      price: '$27.20',
      image: "https://i.postimg.cc/0NNx2Bfd/th-2.jpg"
  },
]

const RestaurantDetails = ({ route, navigation }) => {
  return (
    <View>

      
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <View style={{ height: 500 }}>
        <MenuItems restaurantName={route.params.name} food={food} />
      </View>
      <ViewCart navigation={navigation} />


    </View>
  )
}

export default RestaurantDetails
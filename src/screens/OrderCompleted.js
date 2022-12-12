import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import LottieView from 'lottie-react-native'
import firebase from '../../firbase'
import MenuItems from '../components/resturantDetails/MenuItems'

const OrderCompleted = () => {
  const [lastOrder, setLastOrder] = useState({
    items:[
      {
        id:1,
        title: 'Lasagna',
        description: "with butter lettuce, tamato and sauce bechamel",
        price: '$13.50',
        image: "https://i.postimg.cc/RCcdhbyt/th.jpg"
    }
    ]
  })
    const { items, restaurantName } = useSelector((state) => state.cartReducer.selectedItems)
   
    const total = items.map((item => Number(item.price.replace('$', '')))).reduce((prev, curr) => prev + curr, 0)

    const totalUSD = total.toLocaleString('en', {
        style: 'currency',
        currency: "USD",
    })
    useEffect(() => {
      const db = firebase.firestore()
      const unsubscribe =  db.collection('orders').orderBy('createdAt', 'desc').limit(1).onSnapshot((snapshot) =>{
        snapshot.docs.map((doc)=>{
          setLastOrder(doc.data())
          console.log(doc.data())
        })
      })
      // console.log(unsubscribe)
      return () => unsubscribe();
      
    }, [])
    
  return (
    <SafeAreaView style={{ flex:1, backgroundColor:"#fff" }}>
      <View style={{margin:15, alignItems:'center', height:"100%"}}>
        <LottieView 
            style={{height:100, alignSelf:'center', marginBottom:30}}
            source={require('../assets/animations/check-mark.json')}
            autoPlay
            speed={0.5}
            loop={false}
        />
      <Text style={{fontSize:20, fontWeight:'bold'}}>Your order at {restaurantName} has been placed for {totalUSD} </Text>
      <ScrollView>
      <MenuItems food={lastOrder.items} hideCheckbox={true} />
      </ScrollView>
      <LottieView
            style={{height:200, alignSelf:'center'}}
            source={require('../assets/animations/cooking.json')}
            autoPlay
            speed={0.5}
            />
        </View>
    </SafeAreaView>
  )
}

export default OrderCompleted
import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export const localRestaurants = [
    {
        name:'Beachside Bar',
        image_url:'https://i.postimg.cc/DzsXvJGN/wp1874184.jpg',
        categories:['Cafe',"Bar"],
        price:'$$',
        reviews:1244,
        rating:4.5
    },
    {
        name:'Beachside Bar',
        image_url:'https://i.postimg.cc/bNQh01ng/pexels-fox-6063229.jpg',
        categories:['Cafe',"Bar"],
        price:'$$',
        reviews:1244,
        rating:4.5
    },
    {
        name:'Benihana',
        image_url:'https://i.postimg.cc/fRmJ93WQ/Image.jpg',
        categories:['Cafe',"Bar"],
        price:'$$',
        reviews:1244,
        rating:3.7
    },
    {
        name:"India's Grill",
        image_url:'https://i.postimg.cc/tJfSxvqk/Stella-Barra-Wine-Bar-Santa-Monica-09.jpg',
        categories:['indian',"Bar"],
        price:'$$',
        reviews:700,
        rating:4.9
    },
]

const RestaurentItem = ({navigation ,...props}) => {
   
    console.log(localRestaurants.map((data, i) => (
        data.categories.map((item, index) => (
            item

        ))
    )))
    
   
    return (
        <>
            {props.restaurantData.map((restaurants, index) => (
                <TouchableOpacity key={index} activeOpacity={0.5} style={{marginBottom:30}} onPress={
                    ()=> navigation.navigate('RestaurantDetails',{
                        name: restaurants.name,
                        image:restaurants.image_url,
                        price: restaurants.price,
                        reviews: restaurants.reviews,
                        rating: restaurants.rating,
                        categories: restaurants.categories
                    })
                } >
                <View  style={{marginTop:10, padding:15, backgroundColor:"white"}}>
                <Restaurantimage image={restaurants.image_url} />
                <RestaurantInfo name={restaurants.name} rating={restaurants.rating} />
            </View>
        </TouchableOpacity>
            ))}
            </>
    )
}



// const Restaurantimage = () => (
//     <Image source={ require('../assets/images/categories.jpg')}
//         style={{width: '100%', height: 180}}/>
// )

const Restaurantimage = (props) => (
    <>
        <Image source={{
            uri: props.image
        }}
            style={{ width: '100%', height: 180 }}
        />
         <TouchableOpacity style={{position:'absolute', right:20, top:20}}>
            <MaterialCommunityIcons name='heart-outline' size={25} color='#fff' />
         </TouchableOpacity>
    </>
)

const RestaurantInfo = (props) => (
   <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center',marginTop:10}}>
    <View>
     <Text style={{fontSize:15, fontWeight:'bold', color:"#000"}}>{props.name}</Text>
    <Text style={{fontSize: 13, color:'gray'}}>30-40 . min</Text>
    </View>
    <View style={{backgroundColor:"#eee", height:30, width:30, alignItems:'center', borderRadius:15, justifyContent:'center'}}>
    <Text>{props.rating}</Text>
    </View>
   </View>
)

export default RestaurentItem
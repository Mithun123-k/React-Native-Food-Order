import { View, Text, Image } from 'react-native'
import React from 'react'
import { patchWebProps } from 'react-native-elements/dist/helpers'


const image = 'https://i.postimg.cc/fRmJ93WQ/Image.jpg'
const title = 'Formhouse Kitchen Thai Cuisine'

const About = (props) => {
  const {image, name, price, reviews, rating, categories} = props.route.params


  // const description = 'Thai . Comfort Food . $$ . (2913+)'
  const description = `${name} ${price ? "." + price : ""} . ${rating} . (${reviews}+)`
  return (
    <View>
      <RestaurentImage  image ={image}/>
      <RestaurentTitle title={name} />
      <RestaurentDescription description={description} />
    </View>
  )
}
const RestaurentImage = (props) => (
    <Image source={{uri:props.image}} style={{width:'100%', height:180}}
    />
)
const RestaurentTitle = (props) => (
    <Text style={{
        fontSize:25,
        fontWeight:'600',
        marginHorizontal:15,
        color:"#000"
    }}>{props.title}</Text>
)
const RestaurentDescription =(props) =>(
    <Text style={{
        marginTop:10,
        marginHorizontal:15,
        fontWeight:'400',
        fontSize:15.5,
        color:'#000'
    }}>{props.description}</Text>
)

export default About
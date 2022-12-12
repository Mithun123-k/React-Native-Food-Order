import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { useDispatch, useSelector } from 'react-redux'




const styles = StyleSheet.create({
    menuItemsStyle: {
        flexDirection: 'row',
        justifyContent: "space-between",
        margin: 20,
        color: '#000',
    },
    titleStyle: {
        fontSize: 19,
        fontWeight: '600',
        color: '#000'
    }
})



const MenuItems = ({restaurantName, food, hideCheckbox, marginLeft}) => {

    const dispatch = useDispatch();
    const selectItem = (item, checkboxValue) => 
        // console.log(item)
        dispatch({
            type: "ADD_TO_CART",
            payload: { ...item,
                 restaurantName:restaurantName,
                checkboxValue:checkboxValue
                }
        })

        


        const cartItems = useSelector((state) => state.cartReducer.selectedItems.items)

        const isFoodInCart = (food, cartItems) =>
            Boolean(cartItems.find((item) => item.id === food.id))
        

    return (
        <ScrollView showsVerticalScrollIndicator={false} >
            {food.map((item, index) => (
                <View key={index} style={{ marginBottom: 1}}>
                    <View style={styles.menuItemsStyle}>
                        { hideCheckbox ? (<></>) : <BouncyCheckbox iconStyle={{ borderColor: "gray", borderRadius: 0 }} fillColor='green' onPress={(checkboxValue) =>  selectItem(item, checkboxValue) }
                         isChecked={isFoodInCart(item, cartItems)} /> }

                        <FoodInfo food={item} />
                        <FoodImage food={item} marginLeft = {marginLeft ? marginLeft:0 } />
                    </View>
                    <Divider width={0.5} orientation='vertical' style={{ marginHorizontal: 20 }} />
                </View>
            ))}
        </ScrollView>
    )
}
const FoodInfo = (props) => (
    <View style={{ width: 200, justifyContent: 'space-evenly' }}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
)
const FoodImage = ({marginLeft ,...props}) => (
    <Image source={{ uri: props.food.image }} style={{ width: 100, height: 100, borderRadius: 8, marginLeft:marginLeft }} />
)

export default MenuItems
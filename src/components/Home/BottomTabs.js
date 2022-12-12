import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const BottomTabs = () => {
    return (
        <View style={{ flexDirection: 'row', margin: 10, marginHorizontal: 10, justifyContent: 'space-between' }}>
            <Icon icon='home' text='Home' />
            <Icon icon='search' text='Browse' />
            <Icon icon='shopping-bag' text='Grocery' />
            <Icon icon='receipt' text='Orders' />
            <Icon icon='user' text='Account' />
        </View>
    )
}

const Icon = (props) => (
    <TouchableOpacity>
        <View style={{}}>
            <FontAwesome5
                name={props.icon}
                size={25}   
                style={{ marginBottom: 3, alignSelf: 'center', color: '#000' }}
            />
            <Text style={{ color: '#000', fontWeight: '400' }} >{props.text}</Text>
        </View>
    </TouchableOpacity>
)

export default BottomTabs
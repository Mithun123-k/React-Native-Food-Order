import { View, Text, Modal, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import OrderItem from './OrderItem'
import firebase from '../../../firbase';

const ViewCart = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false)
    const [OrderCompletedUnchecked, setOrderCompletedUnchecked] = useState(false)
    const { items, restaurantName } = useSelector((state) => state.cartReducer.selectedItems)
    const total = items.map((item => Number(item.price.replace('$', '')))).reduce((prev, curr) => prev + curr, 0)

    const totalUsd = total.toLocaleString('en', {
        style: 'currency',
        currency: "USD",
    })

    const addOrderToFireBase = () => {
        const db = firebase.firestore()
        db.collection("orders").add({
            items: items,
            restaurantName: restaurantName,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        }) 
        setModalVisible(false)
        setOrderCompletedUnchecked(true)
        navigation.navigate('OrderCompleted')
        // console.log(items)
    }
    console.log(OrderCompletedUnchecked)
    const styles = StyleSheet.create({
        modalContainer: {
            flex: 1,
            justifyContent: 'flex-end',
            backgroundColor: 'rgba(0,0,0,0.7)'
        },
        modalCheckOutContainer: {
            backgroundColor: "#fff",
            padding: 16,
            height: 500,
            borderWidth: 1,
        },
        restaurantName: {
            textAlign: 'center',
            fontWeight: '600',
            fontSize: 18,
            marginBottom: 10
        },
        subtotalContainer: {
            flexDirection: 'row',
            justifyContent: "space-between",
            marginTop: 15
        },
        subTotalText: {
            textAlign: 'left',
            fontWeight: '600',
            fontSize: 15,
            marginBottom: 10
        }
    })

    const checkoutModalContent = () => {
        return (
            <>
                <View style={styles.modalContainer}>
                    <View style={styles.modalCheckOutContainer}>
                        <Text style={styles.restaurantName}>{restaurantName}</Text>
                        <ScrollView>
                            {items.map((item, index) => (
                                <OrderItem key={index} item={item} />
                            ))}
                        </ScrollView>
                        <View style={styles.subtotalContainer}>
                            <Text style={styles.subTotalText}>Subtotal</Text>
                            <Text>{totalUsd}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <TouchableOpacity style={{
                                marginTop: 20,
                                backgroundColor: '#000',
                                alignItems: 'center',
                                padding: 13,
                                borderRadius: 30,
                                width: 300,
                                position: 'relative'
                            }} onPress={() => addOrderToFireBase()}>
                                <Text style={{ color: '#fff', fontSize: 20 }}>Checkout</Text>
                                <Text style={{ position: 'absolute', right: 20, color: '#fff', fontSize: 15, top: 17 }}>{total ? totalUsd : ''}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </>
        )
    }
    // console.log(totalUsd)
    return (
        <>
            <Modal animationType='slide' visible={modalVisible} transparent={true} onRequestClose={() => setModalVisible(false)} >
                {checkoutModalContent()}
            </Modal>
            {total ? <>
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    flexDirection: 'row',
                    position: 'absolute',
                    bottom: 10,
                    zIndex: 999
                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: "center",
                        width: "100%",
                        height: 75,
                        zIndex: 99999
                    }}>
                        <TouchableOpacity style={{
                            marginTop: 20,
                            backgroundColor: '#000',
                            alignItems: 'center',
                            padding: 13,
                            borderRadius: 30,
                            width: 300,
                            position: 'relative'
                        }} onPress={() => setModalVisible(true)} >
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#fff', fontSize: 20 }}>ViewCart</Text>
                                <Text style={{ color: '#fff', fontSize: 20, marginLeft: 23 }}>{totalUsd}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

            </> :
                <></>}
        </>
    )
}

export default ViewCart
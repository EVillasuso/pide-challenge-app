import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Image, Icon } from 'react-native-elements'

export default function ProductCard(props) {
    const { product } = props
    return (
        <View style={styles.productCard} key={product.key}>
            <Image
                source={{ uri: product.imagenProducto }}
                resizeMode="contain"
                style={styles.productImage}

            />
            <View style={{ width: "65%", justifyContent: "space-between" }}>
                <View>
                    <Text style={styles.productTitle}>{product.nombreProducto}</Text>
                    <Text style={styles.productDescription}>{product.descriProducto}</Text>
                </View>
                <Text style={styles.productPrice}>$ {parseFloat(product.precioProducto).toFixed(2)}</Text>
            </View>
            <View style={{ flexDirection: "column", justifyContent: "space-around", paddingLeft: 10 }}>
                <View style={styles.rightRows}>
                    <Icon
                        type="material-community"
                        name="plus"
                    />
                    <Icon
                        type="material-community"
                        name="minus"
                    />
                </View>

                <View style={styles.rightRows}>
                    <Icon
                        type="material-community"
                        name="heart-outline"
                    />
                    <Icon
                        type="material-community"
                        name="share-variant"
                    />
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    productCard: {
        backgroundColor: "#fefefe",
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 10,
        paddingLeft: 10,
        marginTop: 10,
        marginRight: 20,
        marginLeft: 20,
        flexDirection: "row",
        height: 100,
        borderRadius: 10,
    },
    productTitle: {
        fontSize: 18,
    },
    productDescription: {
        fontSize: 14,
        color: "#8a8a8a",
    },
    productImage: {
        maxHeight: 100,
        width: 80,
        marginRight: 10,
    },
    productPrice: {
        backgroundColor: "#A96AB0",
        color: "#ffffff",
        fontSize: 18,
        paddingLeft: 30,
        width: "45%",
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
    },
    rightRows: {
        flexDirection: "row",
        justifyContent: "space-between"
    }
})
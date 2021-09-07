import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Image } from "react-native-elements"
import ProductList from "../../components/products/ProductList"
import * as testData from "../../../assets/Test_Data.json"

export default function StoreProducts() {

    const Tab = createMaterialTopTabNavigator();

    function MyTabs() {
        var productAsList = productListFromJSON();
        return (
            <Tab.Navigator
                screenOptions={{ tabBarScrollEnabled: true, tabBarIndicatorStyle: { backgroundColor: "#00989E" } }}
            >
                {
                    productAsList.categories.map((value) => {
                        {
                            for (var key in testData.Categorias) {
                                {
                                    if (parseInt(testData.Categorias[key].idCategoria) === parseInt(value)) {
                                        return (
                                            <Tab.Screen
                                                name={testData.Categorias[key].nombreCat}
                                                key={key}
                                                children={() => {
                                                    return (
                                                        <ProductList
                                                            products={productList.products.filter((product) => {
                                                                return (product.idCategoria === value)
                                                            })}
                                                            catKet={key}
                                                        />
                                                    )
                                                }}
                                            />
                                        )
                                    }
                                }
                            }
                        }
                    })
                }
            </Tab.Navigator>
        );
    }

    return (
        <View>
            <View style={styles.banner}>
                <Image
                    source={{ uri: testData.Comercio.bannerComercio }}
                    resizeMode="contain"
                    style={styles.bannerImg}
                />
            </View>
            <View style={styles.view}>
                <NavigationContainer>
                    <MyTabs />
                </NavigationContainer>
            </View>
        </View>
    );
}

const productListFromJSON = () => {
    productList = {};

    let categorias = testData.Comercio.idCategoria
    for (var key in testData.Categorias) {
        if (categorias.includes(testData.Categorias[key].catPadre)) {
            categorias.push(testData.Categorias[key].idCategoria)
        }
    }
    categorias.push(102) // categoria "combos"

    productList = { products: [], categories: [] }
    for (var key in testData.Productos) {
        if (categorias.includes(testData.Productos[key].idCategoria)) {
            productList.products.push(testData.Productos[key])
            productList.products[productList.products.length - 1] = { ...productList.products[productList.products.length - 1], key: key }
            if (!productList.categories.includes(testData.Productos[key].idCategoria)) {
                productList.categories.push(testData.Productos[key].idCategoria)
            }
        }
    }
    return productList;
}

const styles = StyleSheet.create({
    view: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100%",
    },
    bannerImg: {
        height: 80,
        marginTop: 10,
        marginBottom: 10,
    },
    banner: {
        backgroundColor: "#000000",
    }
});
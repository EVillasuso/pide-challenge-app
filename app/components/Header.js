import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Icon } from "react-native-elements"

export default function Header() {
    return (
        <View style={styles.menuView}>
            <View style={styles.topMenu}>
                <Icon
                    type="material-community"
                    name="menu"
                    color="#FFDF1F"
                    style={{ left: 0 }}
                />
                <Icon
                    type="material-community"
                    name="motorbike"
                    color="#FFDF1F"
                    style={{ left: 0 }}
                />
                <Icon
                    type="material-community"
                    name="basket-outline"
                    color="#FFFFFF"
                    style={{ left: 0 }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    menuView: {
        marginTop: 30,
    },
    topMenu: {
        backgroundColor: "#00989E",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
});

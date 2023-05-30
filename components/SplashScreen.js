import React, { useEffect, useRef } from "react";
import { View, Image,Text } from "react-native";
import Logo from '../assets/danang.png'

const BGColor = "#fff"
const TitleColor = "#F18934"

export default function Splash() {

    return(
        <View style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: BGColor
        }}>

            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',

            }}>

                <Text style={{
                        fontSize: 28,
                        fontWeight: 'bold',
                        color: TitleColor,
                        marginBottom: 10,
                    }}>WELCOME TO</Text>
                <Text style={{
                        fontSize: 28,
                        fontWeight: 'bold',
                        color: TitleColor,
                        marginBottom: 100,
                    }}>ĐÀ NẴNG</Text>

                <Image source={Logo} style={{
                    width: 150,
                    height: 150
                }}></Image>
            </View>

        </View>
    );
}
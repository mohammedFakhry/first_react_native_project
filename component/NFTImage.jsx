import React from 'react'
import { StyleSheet, Image, View, StatusBar } from 'react-native'
import {  } from 'react-native'
import Button from './Button_2'
import { COLORS } from '../constants'
import { AntDesign, Feather } from '@expo/vector-icons'

const NFTImage = ({ image, imageStyles, love, arrow, pressHandler }) => {
    return (
    <View style={styles.container}>
        <Image source={image} style={imageStyles} />
        { love && <Button
                    styleButton={styles.buttonHeart}
                    Icon={ <AntDesign name="heart" size={20} color={COLORS.second} /> } />
        }
        { arrow && <Button
                    styleButton={styles.buttonArrow}
                    Icon={ <Feather name="arrow-left" size={20} color={COLORS.second} /> }
                    pressHandler={pressHandler && pressHandler}
                    />
        }
    </View>
    )
}

export default NFTImage

const styles = StyleSheet.create({
    container: {
        width: '100%',
        position: 'relative'
    },
    buttonHeart: {
        position: 'absolute',
        top: StatusBar.currentHeight + 10,
        left: 10,
        backgroundColor: COLORS.white,
        padding: 10,
        borderRadius: 40,
    },
    buttonArrow: {
        position: 'absolute',
        top: StatusBar.currentHeight + 10,
        right: 10,
        backgroundColor: COLORS.white,
        padding: 10,
        borderRadius: 40,
    }
})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants'
import { AntDesign, Feather, MaterialCommunityIcons } from '@expo/vector-icons'
import Button from './Button_2';

const NFTInfo = ({ comments, price, views, love }) => {
    return (
    <View style={styles.container}>
        <View style={styles.wrapper}>
            <Feather name='eye' size={20} color={COLORS.white} />
            <Text style={styles.text}>{views}</Text>
        </View>
        <View style={styles.wrapper}>
            <MaterialCommunityIcons name='comment-text-outline' size={17} color={COLORS.white} />
            <Text style={styles.text}>{comments}</Text>
        </View>
        <View style={styles.wrapper}>
            <MaterialCommunityIcons name='ethereum' size={20} color='white' />
            <Text style={styles.text}>{price}</Text>
        </View>
        {
            love && (
                <View>
                    <Button
                        Icon={<AntDesign name="heart" size={18} color={COLORS.second} />}
                        styleButton={styles.buttonHeart}
                    />
                </View>
            )
        }
    </View>
    )
}

export default NFTInfo

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    wrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.second,
        width: 90,
        borderRadius: SIZES.xlarge,
        paddingVertical: 3,
        gap: 4,
    },
    text: {
        fontFamily: FONTS.medium,
        fontSize: SIZES.meduim,
        color: COLORS.white,
    },
    buttonHeart: {
        backgroundColor: COLORS.bg,
        padding: 5,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: COLORS.second,
    },
})
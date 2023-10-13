import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS, FONTS, SIZES } from '../constants'

const NETDate = ({ date }) => {
    return (
    <View>
        <Text style={styles.textDate}>{date}</Text>
    </View>
    )
}

export default NETDate

const styles = StyleSheet.create({
    textDate: {
        fontFamily: FONTS.semibold,
        fontSize: SIZES.meduim,
        color: COLORS.gray
    }
})
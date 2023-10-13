import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS, FONTS, SIZES } from '../constants'
import NETDate from './NETDate'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const NFTTitle = ({ _name, creator, date }) => {
    return (
    <View>
        <View>
            <Text style={styles.textName}>{_name}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: SIZES.small }}>
                <Text style={styles.textCreator}>{creator}</Text>
                <MaterialCommunityIcons name='check-decagram' size={20} color='white' />
            </View>
            <NETDate date={date} />
        </View>
    </View>
    )
}

export default NFTTitle

const styles = StyleSheet.create({
    textName: {
        color: COLORS.white,
        fontFamily: FONTS.semibold,
        fontSize: 20
    },
    textCreator: {
        color: COLORS.white,
        fontFamily: FONTS.regular,
        fontSize: 16,
    },
})
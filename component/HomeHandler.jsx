import React from 'react'
import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import { COLORS, FONTS, SIZES } from '../constants'
import avatar from '../assets/images/avatars/avatar03.jpg'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

const HomeHandler = ({ searchHandler }) => {
    return (
    <View style={styles.container}>
        <View style={styles.header}>
            <View>
                <Image
                    source={avatar}
                    resizeMode='contain'
                    style={{ width: 44, height: 44, borderRadius: 30 }}
                />
            </View>
            <View>
                <View style={{ flexDirection: 'row', alignItems:'center', gap: 3 }}>
                    <Text style={styles.userText}>Mohamed Fakhr</Text>
                    <MaterialCommunityIcons name='check-decagram' size={24} color={COLORS.white} />
                </View>
                <View>
                    <Text style={{ color: COLORS.white }}>creator</Text>
                </View>
            </View>
        </View>

        <View style={{ marginTop: SIZES.small, paddingHorizontal: 10 }}>
            <View style={styles.searchContainer}>
                <MaterialIcons name='search' size={24} color={COLORS.white} />
                <TextInput
                    placeholder='search by NFT name'
                    placeholderTextColor={COLORS.white}
                    style={{ flex: 1, color: COLORS.white }}
                    onChangeText={searchHandler}
                />
            </View>
        </View>
    </View>
    )
}

export default HomeHandler

const styles = StyleSheet.create({
    container: {
        padding: SIZES.small,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
        paddingHorizontal: 10
    },
    userText: {
        color: COLORS.white,
        fontFamily: FONTS.semibold,
        fontSize: SIZES.xlarge
    },
    searchContainer: {
        width: '100%',
        borderRadius: SIZES.small,
        backgroundColor: COLORS.cardBg,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 10,
        marginVertical: 30
    }
})
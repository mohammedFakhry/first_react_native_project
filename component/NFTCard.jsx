import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import { COLORS, SIZES } from '../constants'
import NFTImage from './NFTImage'
import NFTAvatars from './NFTAvatars'
import NFTTitle from './NFTTitle'
import NFTInfo from './NFTInfo'
import { useNavigation } from '@react-navigation/native'

const NFTCard = ({ NFTData }) => {
    const navigation = useNavigation()
    const pressHandeler = () => {
        navigation.navigate('NFTDetails', { NFTData })
    }
    return (
        <TouchableWithoutFeedback>
            <SafeAreaView style={styles.container}>
                <TouchableOpacity onPress={pressHandeler}>
                    <NFTImage image={NFTData.image} imageStyles={styles.imageStyles} />
                </TouchableOpacity>
                <View style={styles.cardTop}>
                    <NFTAvatars avatars={NFTData.avatars} />
                </View>
                <View style={styles.cardButtom}>
                    <NFTTitle _name={NFTData.name} creator={NFTData.creator} date={NFTData.date} />
                    <View style={{ marginTop: SIZES.small+5 }}>
                        <NFTInfo comments={NFTData.comments} views={NFTData.views} price={NFTData.price} love />
                    </View>
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

export default NFTCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.cardBg,
        borderRadius: SIZES.meduim,
        marginBottom: SIZES.xlarge,
        marginVertical: SIZES.small - 5,
        marginHorizontal: 14,
        padding: 12,
    },
    cardTop: {
        width: "100%",
        paddingHorizontal: SIZES.meduim,
        marginTop: -30,
        flexDirection: "row",
        justifyContent: "space-between",
    },
        cardButtom: { width: "100%", padding: SIZES.meduim },
        imageStyles: {
        width: "100%",
        height: 300,
        borderRadius: 30,
    },
});

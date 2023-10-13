import React from 'react'
import { Animated, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { COLORS, FONTS, SIZES } from '../constants'
import NFTImage from '../component/NFTImage'
import NFTAvatars from '../component/NFTAvatars'
import NFTTitle from '../component/NFTTitle'
import NFTInfo from '../component/NFTInfo'
import NFTMoreInfo from '../component/NFTMoreInfo'
import { FontAwesome } from '@expo/vector-icons'
import Button from '../component/Button_2'
import { useRef } from 'react'
import { useEffect } from 'react'

const NFTDetails = ({ route, navigation }) => {
    const { NFTData } = route.params;
    const moveAnimation = useRef(new Animated.Value(0)).current;
    const fadeAnimation = useRef(new Animated.Value(0)).current;

    const pressHandler = () => {
        navigation.goBack();
    }

    const screenAnimationHandler = () => {
        Animated.spring(moveAnimation, {
            toValue: 1,
            friction: 6,
            tension: 80,
            useNativeDriver: true
        }).start()
    }

    const buttonAnimationHandler = () => {
        Animated.timing(fadeAnimation, {
            toValue: 1,
            duration: 1000,
            delay: 300,
            useNativeDriver: true
        }).start()
    }

    useEffect(() => {
        screenAnimationHandler()
        buttonAnimationHandler()
    }, [screenAnimationHandler, buttonAnimationHandler])
    
    return (
        <SafeAreaView style={styles.container}>
            <Animated.View style={{ flex: 1, transform: [{ translateY: moveAnimation.interpolate({ inputRange: [0, 1], outputRange: [200, 0] }) }] }}>
                <NFTImage image={NFTData.image} imageStyles={styles.imageStyles} love arrow pressHandler={pressHandler} />
                <View style={{ paddingHorizontal: SIZES.xlarge }}>
                    <View style={{ marginTop: -SIZES.xlarge }}>
                        <NFTAvatars avatars={NFTData.avatars} />
                    </View>
                    <View style={{ marginVertical: SIZES.meduim }}>
                        <NFTTitle _name={NFTData.name} creator={NFTData.creator} date={NFTData.date} />
                    </View>
                    <View style={{ marginVertical: SIZES.meduim }}>
                        <NFTInfo price={NFTData.price} views={NFTData.views} comments={NFTData.comments} />
                    </View>
                    <View style={{ marginVertical: SIZES.meduim }}>
                    <NFTMoreInfo address={NFTData.address} tokenId={NFTData.tokenId} tokenSt={NFTData.tokenSt} blockchain={NFTData.blockchain} />
                    </View>
                </View>

                <Animated.View style={[styles.buttonContainer, { opacity: fadeAnimation }]}>
                    <View style={styles.wrapper}>
                        <View>
                            <Text style={styles.text}>Tob bid</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2, padding: SIZES.small - 4 }}>
                                <FontAwesome name='dollar' size={20} color='white' />
                                <Text style={styles.text}>{NFTData.topBid}</Text>
                            </View>
                        </View>

                        <Button title='place a bid' styleButton={styles.button} styleText={styles.textButton} />
                    </View>
                </Animated.View>
            </Animated.View>
        </SafeAreaView>
    )
}

export default NFTDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bg
    },
    header: {
        width: '100%',
        marginTop: -20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imageStyles: {
        width: '100%',
        height: 400,
        borderRadius: 20
    },
    buttonContainer: {
        width: '100%',
        position: 'absolute',
        bottom: SIZES.small,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1
    },
    wrapper: {
        backgroundColor: COLORS.cardBg,
        width: 300,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        borderRadius: 20
    },
    text: {
        fontSize: SIZES.meduim,
        fontFamily: FONTS.semibold,
        color: COLORS.white
    },
    button: {
        backgroundColor: COLORS.second,
        padding: 16,
        width: 150,
        borderRadius: 20
    },
    textButton: {
        color: COLORS.white,
        textAlign: "center",
        fontFamily: FONTS.semiBold,
        fontSize: 16,
    },
})
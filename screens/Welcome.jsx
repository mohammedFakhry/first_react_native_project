import React, { useEffect, useRef } from 'react'
import { View, Text, StyleSheet, Image, Animated, SafeAreaView } from 'react-native'
import nft04 from '../assets/images/nft04.jpg'
import nft06 from '../assets/images/nft06.jpg'
import nft08 from '../assets/images/nft08.jpg'
import { COLORS, FONTS, SIZES } from '../constants/theme'
import { useNavigation } from '@react-navigation/native'
import Button from '../component/Button_2'

const Welcome = () => {
    const navigation = useNavigation();
    const duration = 1000;
    const delay = duration + 300;
    const fadeImagesAnimation = useRef( new Animated.Value(0) ).current;
    const moveImagesAnimation = useRef( new Animated.ValueXY({x: 100, y: 100}) ).current;
    const fadeTextAnimation = useRef( new Animated.Value(0) ).current;
    const moveButtonAnimation = useRef( new Animated.Value(1) ).current;

    const pressHandler = () => {
        navigation.navigate('Home')
    }

    const imagesAnimationHandler = () => {
        Animated.sequence([
            Animated.timing( fadeImagesAnimation, {
                toValue: 1,
                duration: duration,
                useNativeDriver: true
            } ),
            Animated.spring( moveImagesAnimation, {
                toValue: { x: 0, y: 0 },
                duration: duration,
                useNativeDriver: true
            } )
        ]).start();
    }

    const textAnimationHandler = () => {
        Animated.timing( fadeTextAnimation, {
            toValue: 1,
            duration: duration,
            delay: delay,
            useNativeDriver: true
        } ).start();
    }

    const buttonAnimationHandler = () => {
        Animated.spring( moveButtonAnimation, {
            toValue: 0,
            friction: 4,
            delay: delay,
            useNativeDriver: true
        } ).start();
    }

    useEffect(() => {
        buttonAnimationHandler();
        textAnimationHandler();
        imagesAnimationHandler();
    }, [imagesAnimationHandler, textAnimationHandler, buttonAnimationHandler])
    

    return (
        <SafeAreaView style={styles.container}>
            <Animated.View style={[styles.imageContainer, { opacity: fadeImagesAnimation, transform: moveImagesAnimation.getTranslateTransform() }]}>
                <View style={styles.imageCard}>
                    <Image source={nft06} style={styles.image} />
                </View>
                <View style={[styles.imageCard, { top: SIZES.meduim+15 } ]}>
                    <Image source={nft08} style={styles.image} />
                </View>
                <View style={styles.imageCard}>
                    <Image source={nft04} style={styles.image} />
                </View>
            </Animated.View>

            <Animated.View style={[styles.textContainer, { opacity: fadeTextAnimation }]}>
                <Text style={styles.mainText}>Find, Collect and sell Amazing NETs</Text>
                <Text style={styles.subText}>explore the top collection of NETs and buy and sell your NETs as well</Text>
            </Animated.View>

            <Animated.View style={[styles.buttonContainer, { transform: [{translateY: moveButtonAnimation.interpolate({inputRange: [0, 1], outputRange: [0, 200]})}] }]}>
                <Button
                    title='get started'
                    pressHandler={pressHandler}
                    styleButton={styles.button}
                    styleText={styles.textButton}
                />
            </Animated.View>
        </SafeAreaView>
    )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: SIZES.small + 10,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: COLORS.bg,
    },
    imageContainer: {
        top: -SIZES.meduim,
        flexDirection: 'row',
        gap: -SIZES.small,
    },
    imageCard: {
        margin: SIZES.small,
        borderRadius: SIZES.meduim,
        padding: SIZES.small,
        backgroundColor: COLORS.cardBg,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: SIZES.meduim,
    },
    textContainer: {
        margin: SIZES.small,
        padding: SIZES.small,
        marginVertical: SIZES.xlarge+6,
    },
    mainText: {
        fontFamily: FONTS.bold,
        fontSize: SIZES.xlarge+5,
        textAlign: 'center',
        color: COLORS.white,
    },
    subText: {
        fontFamily: FONTS.light,
        marginTop: SIZES.large,
        textAlign: 'center',
        color: COLORS.gray,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: SIZES.xlarge+10,
        marginVertical: SIZES.xlarge,
    },
    button: {
        backgroundColor: COLORS.second,
        padding: SIZES.small+4,
        width: 240,
        alignItems: 'center',
        borderRadius: SIZES.meduim,
    },
    textButton: {
        color: COLORS.white,
        fontFamily: FONTS.semibold,
        fontSize: SIZES.large,
    },
})
import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableWithoutFeedback, Keyboard, Animated } from 'react-native'
import { COLORS, DATA,FONTS, SIZES } from '../constants'
import NFTCard from '../component/NFTCard'
import HomeHandler from '../component/HomeHandler'
import { useRef } from 'react'
import { useEffect } from 'react'
import { FlashList } from '@shopify/flash-list'

const Home = () => {
    const [nftsData, setNftsData] = useState(DATA);
    const moveSearchAnimation = useRef( new Animated.Value(0) ).current;

    const searchHandler = (value) => {
        if (value) {
            const filteredData = DATA.filter( (nft) => nft.name.toLowerCase().includes(value.toLowerCase()) );
            setNftsData(filteredData);
        } else {
            setNftsData(DATA);
        }
    }

    const NotFoundNFT = () => {
        return(
            <View style={styles.notFoundContainer}>
                <Text style={styles.notFoundText}>Opps ...!</Text>
                <Text style={styles.notFoundText}>Not found the NFT</Text>
            </View>
        )
    }

    const searchAnimationHandlar = () => {
        Animated.spring(moveSearchAnimation, {
            toValue: 1,
            friction: 4,
            useNativeDriver: true
        }).start();
    }

    useEffect(() => {
        searchAnimationHandlar()
    }, [searchAnimationHandlar])
    

    return (
        <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() }>
                <View style={{ flex: 1 }}>
                    <Animated.View style={{ top: -70 ,transform: [{ translateY: moveSearchAnimation.interpolate({ inputRange: [0, 1], outputRange: [0, 100] }) }] }}>
                        <HomeHandler searchHandler={searchHandler} />
                    </Animated.View>

                    {
                        !nftsData.length ? (
                            <NotFoundNFT />
                        ) : (
                            <FlashList
                                data={nftsData}
                                renderItem={ ({item}) => <NFTCard NFTData={item} />  }
                                keyExtractor={ (item) => item.id }
                                estimatedItemSize={200}
                            />
                        )
                    }
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bg
    },
    notFoundContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: SIZES.xlarge
    },
    notFoundText: {
        color: COLORS.white,
        fontFamily: FONTS.bold,
        fontSize: SIZES.xlarge
    },
})
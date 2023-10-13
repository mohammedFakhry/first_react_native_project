import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const button = ({ pressHandler, Icon, styleText, title, styleButton }) => {
    const RenderContentIconOrText = () => {
        if ( !Icon ) {
            return <Text style={styleText}>{ title && title }</Text>
        } else {
            return Icon
        }
    }
    return (
        <TouchableOpacity style={styleButton} onPress={pressHandler && pressHandler}>
            <RenderContentIconOrText />
        </TouchableOpacity>
    )
}

export default button
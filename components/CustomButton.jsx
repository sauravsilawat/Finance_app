import { Image, TouchableOpacity, View, Text } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handlePress, icon, icon2, containerStyle, textStyle, isLoading }) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.4}
            className={`justify-center items-center flex-row  ${containerStyle} ${isLoading ? 'bg-[#66747F]' : ''}`}
            disabled={isLoading}
        >
            {icon && (
                <Image className="w-4 h-4 mr-2 " resizeMode='contain' source={icon}></Image>
            )}
            <Text className={`${textStyle}`}>{title}</Text>
            {icon2 && (
                <Image className="w-10 h-10 ml-2 " resizeMode='contain' source={icon2}></Image>
            )}
        </TouchableOpacity>
    )
}

export default CustomButton
import { View, Image } from 'react-native'
import React from 'react'
import illus from "../../assets/image/Illustrate3.jpg"

const bookmark = () => {
  return (
    <View className="bg-white">
      <Image source={illus} resizeMode='contain' className="w-[400px] h-full"></Image>
    </View>
  )
}

export default bookmark
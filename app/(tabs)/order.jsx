import { View, Image } from 'react-native'
import React from 'react'
import illus from "../../assets/image/illustration1.png"

const order = () => {
  return (
    <View className="bg-white">
      <Image source={illus} resizeMode='contain' className="w-[400px] h-full"></Image>
    </View>
  )
}

export default order
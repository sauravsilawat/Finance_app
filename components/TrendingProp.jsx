import { View, Image, Text, FlatList, TouchableOpacity } from 'react-native'
import CustomButton from "./CustomButton.jsx"
import { Link, router } from 'expo-router'
import React from 'react'

import tick from "../assets/icon/tick.png"
import exit from "../assets/icon/exit.png"
import cross from "../assets/icon/cross.png"

const TrendingProp = ({ dataset }) => {

    return (
        <FlatList
            data={dataset}
            className="my-4"
            keyExtractor={(item) => item.key.toString()}
            renderItem={({ item }) => (
                <Link href={`/listing/${item.key}`} asChild>
                    <TouchableOpacity>
                        <Image source={item.img} resizeMode='contain' className="w-[340px] h-[210px] mr-4 relative" />
                        <View className="absolute bottom-3 left-3">
                            <Text className="text-white font-playbold text-xl">{item.title}</Text>
                            <Text className="text-white font-playRegular text-xl">{item.loc}</Text>
                            <View className="flex-row items-center py-3 gap-2">
                                <Text className="text-white font-rreg text-[10px]">{item.area}</Text>
                                <Text className="text-white">.</Text>
                                <Text className="text-white  font-rreg text-[10px]">{item.extra}</Text>
                            </View>

                            <View className="flex-row justify-between w-[320px]">
                                {item.frac ? (
                                    <CustomButton
                                        title="Fractional Investment Available "
                                        icon={tick}
                                        containerStyle="bg-[#FFFFFF80] w-[165px] min-h-[35px] text-white"
                                        textStyle="font-rreg text-white text-[8px]"
                                    />
                                ) : (
                                    <CustomButton
                                        title="Fractional Investment Unavailable "
                                        icon={cross}
                                        containerStyle="bg-[#FFFFFF80] w-[170px] min-h-[35px] text-white"
                                        textStyle="font-rreg text-white text-[8px]"
                                    />
                                )}
                                <CustomButton
                                    title={item.reg}
                                    icon={exit}
                                    containerStyle="bg-white w-[135px] min-h-[35px]text-white"
                                    textStyle="font-rreg text-[8px]"
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                </Link>
            )}
            horizontal
        />
    )
}

export default TrendingProp
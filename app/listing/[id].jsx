import { View, Image, Text, FlatList, Animated, Easing, TouchableOpacity, ScrollView } from 'react-native'
import { Stack, router, useLocalSearchParams } from 'expo-router'

import back from "../../assets/icon/back.png"
import save from "../../assets/icon/save.png"
import upload from "../../assets/icon/upload.png"
import clock from "../../assets/icon/clock.png"
import down from "../../assets/icon/down.png"
import detail1 from "../../assets/icon/detail1.png"
import detail2 from "../../assets/icon/detail2.png"
import detail3 from "../../assets/icon/detail3.png"
import arrow from "../../assets/icon/arrow.png"
import profile from "../../assets/icon/profile.png"
import up from "../../assets/icon/up.png"
import option1 from "../../assets/icon/option.png"
import option2 from "../../assets/icon/option2.png"
import slip from "../../assets/icon/slip.png"

import data from '../../assets/constant/featuredetail'
import { useEffect, useRef, useState } from 'react'
import CustomButton from '../../components/CustomButton'

const ListingDetail = () => {
    const { id } = useLocalSearchParams();
    const listingdata = data.listing.find((item) => item.key === id);

    const [option, setOption] = useState(false);
    const [model, setModel] = useState(false);
    const [join, setJoin] = useState(false);

    useEffect(() => {
        if (model === false) {
            setJoin(false);
        }
    }, [model])

    const animatedHeight1 = useRef(new Animated.Value(0)).current;
    const animatedHeight2 = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (option) {
            Animated.timing(animatedHeight1, {
                toValue: 1,
                duration: 300,
                easing: Easing.linear,
                useNativeDriver: false
            }).start();
        } else {
            Animated.timing(animatedHeight1, {
                toValue: 0,
                duration: 300,
                easing: Easing.linear,
                useNativeDriver: false
            }).start();
        }
    }, [option]);
    
    useEffect(() => {
        if (model) {
            Animated.timing(animatedHeight2, {
                toValue: 1,
                duration: 300,
                easing: Easing.linear,
                useNativeDriver: false
            }).start();
        } else {
            Animated.timing(animatedHeight2, {
                toValue: 0,
                duration: 300,
                easing: Easing.linear,
                useNativeDriver: false
            }).start();
        }
    }, [model]);

    const maxHeight = 210; 
    const maxHeight2 = 400; 

    const heightInterpolate1 = animatedHeight1.interpolate({
        inputRange: [0, 1],
        outputRange: [0, maxHeight]
    });
    const heightInterpolate2 = animatedHeight2.interpolate({
        inputRange: [0, 1],
        outputRange: [0, maxHeight2]
    });


    return (
        <ScrollView>
            <Stack.Screen options={{
                headerTransparent: true,
                headerTitle: "",
                headerLeft: () => (
                    <TouchableOpacity onPress={() => router.back()}>
                        <View>
                            <Image source={back} className="w-8 h-8 m-2 ml-4" resizeMode='contain'></Image>
                        </View>
                    </TouchableOpacity>
                ),
                headerRight: () => (
                    <View className="flex-row mr-4">
                        <TouchableOpacity>
                            <Image source={upload} className="w-8 h-8 m-2" resizeMode='contain'></Image>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={save} className="w-8 h-8 m-2" resizeMode='contain'></Image>
                        </TouchableOpacity>
                    </View>
                )
            }} />
            <View className="bg-white">
                <View>
                    <Image className="relative w-full h-[280px]" resizeMode='fit' source={listingdata.img}></Image>
                    <View className="absolute bottom-10 left-10">
                        <Text className="text-white font-playItalic text-3xl">{listingdata.title}</Text>
                        <Text className="text-white font-playRegular ml-6 text-2xl">{listingdata.loc}</Text>
                    </View>
                </View>

                <View className="px-8 mt-8 border-b-gray-200 border-b-[6px]">
                    <Text className=" font-playRegular text-base mb-1 ">First Floor Apartment in <Text>{listingdata.title}</Text></Text>
                    <Text className=" font-playRegular text-[10px] text-gray-500">
                        This exquisite first-floor apartment is perched on a 515 sqm (617 sq. yds.) plot; the largest plot size of its kind in Jor Bagh, outside the ASI’s limitations and in close proximity to Lodhi Gardens. The apartment faces and has access to a park in the front and the rear providing residents with verdant & serene green views.
                    </Text>
                    <Text className=" font-playRegular text-[10px] my-8 text-gray-500">
                        This recently built 275 sqm (~2,960 sq. ft.) apartment has a beautiful living room with... <Text className=" text-black font-rreg underline">Read More</Text>
                    </Text>
                </View>

                <View className="px-8 mt-5 pb-5 flex-row justify-between border-b-gray-200 border-b-[6px]">
                    <View>
                        <Text className="font-rreg text-[12px] mb-1 text-gray-500">Total Value</Text>
                        <Text className="text-[13px] font-rmed">{listingdata.tv}</Text>
                    </View>
                    <View className="w-[1px] bg-gray-400"></View>
                    <View>
                        <Text className="font-rreg text-[12px] mb-1 text-gray-500">Price per Share</Text>
                        <Text className="text-[13px] font-rmed">{listingdata.pps}</Text>
                    </View>
                    <View className="w-[1px] bg-gray-400"></View>
                    <View>
                        <Text className="font-rreg text-[12px] mb-1 text-gray-500">Available spots</Text>
                        <Text className="text-[13px] font-rmed">{listingdata.as}</Text>
                    </View>
                </View>

                <View className="px-8 mt-5 pb-5 border-b-gray-200 border-b-[6px]">
                    {!option ? (
                        <Text className="font-rreg text-[12px] mb-1 text-gray-500">Fund Raising Timeline</Text>) : (
                        <Text className="font-rreg text-[12px] mb-1 text-gray-500">Timeline</Text>
                    )}
                    <View className="flex-row mt-4 items-center gap-x-2">
                        <Image source={clock} className="w-4 h-4" resizeMode='contain'></Image>
                        <Text>Ends in <Text className="font-rbold">12 Days</Text></Text>
                    </View>
                    <View className="relative h-4 mt-2 bg-slate-200">
                        <View className="absolute w-[60%] h-4 bg-[#121212]"></View>
                    </View>
                </View>

                <View className="px-8 mt-5 pb-5 border-b-gray-200 border-b-[6px]">
                    <TouchableOpacity onPress={() => setOption(!option)}>
                        <View className="flex-row items-center justify-between">
                            <View className="flex-row items-center gap-4">
                                <Image source={detail1} className="w-8 h-8" resizeMode='contain' />
                                <View className="">
                                    <Text className="text-[12px] mb-1">Financing Options</Text>
                                    <Text className="text-[8px] text-gray-500">Options for both Owners and Shareholders</Text>
                                </View>
                            </View>
                            <Image source={!option ? down : up} className="w-[12px] h-[12px]" resizeMode='contain' />
                        </View>
                    </TouchableOpacity>
                    <Animated.View style={{ height: heightInterpolate1, overflow: 'hidden' }}>
                        {option && (
                            <View>
                                <View className="flex-row justify-evenly items-center w-[95%] bg-[#F7F7F7] m-auto mt-6 p-4 bottom-[1px] border">
                                    <View>
                                        <Image source={option1} className="w-6 h-6" resizeMode='contain' />
                                        <Text className="text-[12px] mt-2 font-rmed">Become a shareholder</Text>
                                        <Text className="text-[6px] mb-2">Own a share of this stunning growth-driven property.</Text>
                                        <Text className="text-[8px] mb-2 text-gray-400">1 Share (token) = $ 15,293</Text>
                                    </View>
                                    <View className="items-center justify-center">
                                        <Text className="text-[10px] text-gray-300">$ 3,058,654</Text>
                                        <Text className="text-base mb-2 font-rmed">$ 15,293</Text>
                                    </View>
                                </View>
                                <View className="flex-row items-center gap-x-3 p-4">
                                    <Image source={option2} className="w-6 h-6" resizeMode='contain' />
                                    <View>
                                        <Text className="text-[12px] font-rmed">Sotheby’s Financial Services</Text>
                                        <Text className="text-[7px]">Allow our team of experts to tailor the ideal financing option for you</Text>
                                    </View>
                                </View>
                            </View>
                        )}
                    </Animated.View>
                </View>

                <View className="px-8 mt-5 pb-5 flex-row items-center justify-between border-b-gray-200 border-b-[6px]">
                    <View className="flex-row items-center gap-4">
                        <Image source={detail2} className="w-8 h-8" resizeMode='contain'></Image>
                        <View>
                            <Text className="text-[12px] mb-1">Property Details</Text>
                            <Text className="text-[8px] text-gray-500">Flat type, square footage, location benefits, ame...</Text>
                        </View>
                    </View>
                    <Image source={down} className="w-[12px] h-[12px]" resizeMode='contain'></Image>
                </View>

                <View className="px-8 mt-5 pb-5">
                    <TouchableOpacity onPress={() => setModel(!model)}>
                        <View className="flex-row items-center justify-between">
                            <View className="flex-row items-center gap-4">
                                <Image source={detail3} className="w-8 h-8" resizeMode='contain' />
                                <View>
                                    <Text className="text-[12px] mb-1">Financial Model</Text>
                                    <Text className="text-[8px] text-gray-500">Indicators for capital appreciation, monthly yield etc.</Text>
                                </View>
                            </View>
                            <Image source={!model ? down : up} className="w-[12px] h-[12px]" resizeMode='contain' />
                        </View>
                    </TouchableOpacity>
                    <Animated.View style={{ height: heightInterpolate2, overflow: 'hidden' }}>
                        {model && (
                            <TouchableOpacity onPress={() => setJoin(true)}>
                                <View className="justify-center relative items-center">
                                    {!join && (
                                        <CustomButton
                                            title="CONFIRM SPOT"
                                            icon2={arrow}
                                            containerStyle="bg-[#121212] ml-[120px] w-full m-auto mt-6 min-h-[45px]"
                                            textStyle="font-rreg text-white text-xl"
                                        />
                                    )}
                                    <Image source={slip} resizeMode='contain' className="w-[300px] h-[300px] mt-6" />
                                    {join && (
                                        <View className="pointer-events-none absolute bg-[#00172A] p-6">
                                            <Text className="text-white mb-4 font-playRegular text-xl">Join Us</Text>
                                            <Text className="text-white mb-4 text-[10px]">
                                                Learn more about this property and gain access to a wide pool of financing options - ones that could flair up not just your passion, but even your portfolio.
                                            </Text>
                                            <CustomButton
                                                title="Sign Up"
                                                containerStyle="bg-white ml-[120px] w-[165px] min-h-[45px]"
                                                textStyle="font-playRegular text-xl"
                                            />
                                        </View>
                                    )}
                                </View>
                            </TouchableOpacity>
                        )}
                    </Animated.View>
                </View>

                {!join && (<View className="px-4 mt-5 py-5 flex-row items-center justify-between bg-[#00172A]">
                    <View className="flex-row items-center gap-4">
                        <Image source={profile} className="w-12 h-12" resizeMode='contain'></Image>
                        <View>
                            <Text className="text-white text-[13px] mb-1 ">Akash Puri</Text>
                            <Text className="text-white text-[8px] ">Seek guidance and an expert opinion from our specialists.</Text>
                        </View>
                    </View>
                    <Image source={arrow} className="w-10 h-10" resizeMode='contain'></Image>
                </View>
                )}

            </View>
        </ScrollView>
    )
}

export default ListingDetail
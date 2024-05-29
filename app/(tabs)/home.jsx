import React, { useState } from 'react';
import { Image, View, Text, FlatList, TouchableOpacity, LayoutAnimation } from 'react-native';
import { Link, router } from 'expo-router';
import data from '../../assets/constant/featuredetail';
import TrendingProp from '../../components/TrendingProp';
import CustomButton from '../../components/CustomButton';
import loading from "../../assets/image/loading.gif"

const Home = () => {
    const [selected, setSelect] = useState(null);

    const toggleSelection = (key) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setSelect(selected === key ? null : key);
    };

    return (
        <FlatList
            className="bg-white py-12 px-6"
            data={data.feature}
            keyExtractor={(item) => item.key.toString()}
            renderItem={({ item }) => (
                <TouchableOpacity
                    className={`flex-row text-black my-4 ${selected === item.key ? "border-black border-[1px] p-4" : ""}`}
                    onPress={() => toggleSelection(item.key)}>
                    <Image source={item.img} resizeMode='fit' className={`w-[120px] h-[90px] mr-4 ${selected === item.key ? "w-[100] h-[90]" : ""}`} />
                    <View className="flex-1">
                        <View className="flex-row flex-wrap">
                            <Text className="font-playbold text-[9px]">{item.title}</Text>
                            <Text className="font-playRegular text-[9px]">{item.loc}</Text>
                        </View>
                        <View className={`flex-row flex-wrap justify-between mt-5 ${selected === item.key ? "mt-2" : ""}`}>
                            <View className="mb-1 gap-y-1">
                                <Text className="text-[7px] text-gray-400">Total Value</Text>
                                <Text className="text-[7px]">{item.tv}</Text>
                            </View>
                            <View className="mb-1 gap-y-1">
                                <Text className="text-[7px] text-gray-400">Starting at</Text>
                                <Text className="text-[7px]">{item.start}</Text>
                            </View>
                            <View className="mb-1 gap-y-1">
                                <Text className="text-[7px] text-gray-400">People Registered</Text>
                                <Text className="text-[7px]">{item.pr}</Text>
                            </View>
                        </View>
                        {selected === item.key && (
                            <>
                                <View className="flex-row flex-wrap justify-between pt-1">
                                    <Text className='text-[6px] text-gray-600'>4 Bedrooms</Text>
                                    <Text className='text-[6px] text-gray-600'>.</Text>
                                    <Text className='text-[6px] text-gray-600'>4 Bath</Text>
                                    <Text className='text-[6px] text-gray-600'>.</Text>
                                    <Text className='text-[6px] text-gray-600'>2,900 Sqft</Text>
                                    <Text className='text-[6px] text-gray-600'>.</Text>
                                    <Text className='text-[6px] text-gray-600'>0.13 Acre(s)</Text>
                                </View>
                                <CustomButton
                                    title="LEARN MORE"
                                    handlePress={() => router.push(`/listing/${item.key}`)}
                                    // {`/listing/${item.key}`}
                                    containerStyle="bg-[#121212] w-[110px] ml-[90px] mt-2 min-h-[20px]"
                                    textStyle=" text-white text-[10px]"
                                />
                            </>
                        )}
                    </View>
                </TouchableOpacity>
            )}
            ListHeaderComponent={() => (
                <View>
                    <Text className="text-xl font-rmed">Trending Properties</Text>
                    <Text className="text-xs my-2 text-gray-400">Check out prime real estate shares that are being noticed</Text>

                    <TrendingProp
                        dataset={data.trending}
                    />

                    <Text className="text-xl font-rmed mb-6 mt-10">Featured Properties</Text>
                    <View className="flex-row justify-evenly my-2">
                        <Text className="font-rreg text-[10px] px-6">ON-GOING BIDS</Text>
                        <Text className="font-rreg text-[10px] px-6 text-gray-400">COMING SOON</Text>
                        <Text className="font-rreg text-[10px] px-6 text-gray-400 ">CLOSED</Text>
                    </View>
                    <View className="bg-slate-100 relative h-1 mb-10 w-full">
                        <View className="bg-slate-300 absolute h-1 w-[38%]"></View>
                    </View>
                </View>
            )}
            ListFooterComponent={() => (
                <View>
                    <Text className="text-xl my-16 font-rmed">Explore More Opportunities</Text>
                    <View className="h-[200px] justify-center items-center">
                        <Image source={loading} resizeMode='contain' className="w-[40px] mt-[-150px]"></Image>
                    </View>
                </View>
            )}
        >
        </FlatList>
    );
};

export default Home;

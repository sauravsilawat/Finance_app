import React, { useRef } from 'react';
import { Image, ScrollView, Text, View, Animated } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import onboard from '../assets/image/onboardlogo.png';
import CustomButton from '../components/CustomButton';
import apple from '../assets/icon/apple.png';

export default function App() {
    const fadeAnim = useRef(new Animated.Value(1)).current;
    const translateTAnim = useRef(new Animated.Value(0)).current;
    const translateRAnim = useRef(new Animated.Value(0)).current;
    const translateBAnim = useRef(new Animated.Value(0)).current;

    const handlePress = (path) => {
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }),
            Animated.timing(translateTAnim, {
                toValue: -50,
                duration: 500,
                useNativeDriver: true,
            }),
            Animated.timing(translateRAnim, {
                toValue: 50,
                duration: 500,
                useNativeDriver: true,
            }),
            Animated.timing(translateBAnim, {
                toValue: 50,
                duration: 500,
                useNativeDriver: true,
            })
        ]).start(() => {
            router.push(path);
            setTimeout(() => {
                fadeAnim.setValue(1);
                translateTAnim.setValue(0);
                translateRAnim.setValue(0);
                translateBAnim.setValue(0);
            }, 500);
        });
    };
    return (
        <SafeAreaView className="bg-white h-full">
            <ScrollView contentContainerStyle={{ height: '100%' }}>
                {/* <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY: translateYAnim }] }} className="w-full justify-center items-center h-full px-4"> */}
                <Animated.View style={{ opacity: fadeAnim }} className="w-full justify-center items-center h-full px-4">
                    <Animated.Image
                        style={{ transform: [{ translateY: translateTAnim }] }}
                        source={onboard}
                        className="w-[248px] px-4 mt-[25vh]"
                        resizeMode="contain"
                    />

                    <Animated.View style={{ transform: [{ translateX: translateRAnim }] }} className="gap-2">
                        <View>
                            <CustomButton
                                title="Sign in with Phone Number"
                                handlePress={() => handlePress('/home')}
                                containerStyle="bg-[#00172A] w-[250px] min-h-[45px] text-white"
                                textStyle="text-white font-rreg text-sm"
                            />
                        </View>
                        <View>
                            <CustomButton
                                title="Sign in with Apple ID"
                                icon={apple}
                                handlePress={() => handlePress('/home')}
                                containerStyle="bg-white border-[1px] w-[250px] min-h-[45px] text-white"
                                textStyle="font-rreg text-sm"
                            />
                        </View>
                    </Animated.View>

                    <Animated.View style={{ transform: [{ translateY: translateBAnim }]}}>
                        <Text className="text-xs m-auto mt-4 font-rreg text-[#4D4D4D]">Don’t have an account? <Text className="underline font-rbold">Sign in</Text></Text>
                        <Text className="px-6 text-center mt-[30px] text-xs font-rreg text-[#4D4D4D]">By creating an account, or signing in, you are agreeing to our <Text className="underline font-rbold">Terms of Service</Text> and <Text className="underline font-rbold">Privacy Policy.</Text></Text>
                    </Animated.View>
                </Animated.View>
            </ScrollView>
        </SafeAreaView>
    );
}

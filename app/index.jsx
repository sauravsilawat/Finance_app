import React, { useEffect, useRef } from 'react';
import { View, Image, Animated } from 'react-native';
import { useRouter } from 'expo-router';
import logo from '../assets/image/logo.png';

const LogoScreen = () => {
  const fadeAnim = useRef(new Animated.Value(1)).current; 
  const router = useRouter();

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1, 
      duration: 2000, 
      useNativeDriver: true, 
    }).start(() => {
      router.replace('/sign');
    });
  }, [fadeAnim, router]);

  return (
    <Animated.View style={{ opacity: fadeAnim }} className="bg-[#121212] h-full w-full justify-center items-center">
      <Image source={logo} resizeMode="contain" className="w-[150px] h-[150px]" />
    </Animated.View>
  );
};

export default LogoScreen;

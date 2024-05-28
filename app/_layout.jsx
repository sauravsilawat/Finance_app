import { SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import { useEffect } from 'react'

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
    const [fontsLoaded, error] = useFonts({
        "Roboto-Black" : require("../assets/font/Roboto-Black.ttf"),
        "Roboto-Bold" : require("../assets/font/Roboto-Bold.ttf"),
        "Roboto-Light" : require("../assets/font/Roboto-Light.ttf"),
        "Roboto-Medium" : require("../assets/font/Roboto-Medium.ttf"),
        "Roboto-Regular" : require("../assets/font/Roboto-Regular.ttf"),
        "Roboto-Thin" : require("../assets/font/Roboto-Thin.ttf"),
        "Play-ExBold" : require("../assets/font/PlayfairDisplay-ExtraBold.ttf"),
        "Play-ExBoldI" : require("../assets/font/PlayfairDisplay-ExtraBoldItalic.ttf"),
        "Play-Bold" : require("../assets/font/PlayfairDisplay-Bold.ttf"),
        "Play-BoldI" : require("../assets/font/PlayfairDisplay-BoldItalic.ttf"),
        "Play-SemBold" : require("../assets/font/PlayfairDisplay-SemiBold.ttf"),
        "Play-SemBoldI" : require("../assets/font/PlayfairDisplay-SemiBoldItalic.ttf"),
        "Play-Med" : require("../assets/font/PlayfairDisplay-Medium.ttf"),
        "Play-MedI" : require("../assets/font/PlayfairDisplay-MediumItalic.ttf"),
        "Play-Italic" : require("../assets/font/PlayfairDisplay-Italic.ttf"),
        "Play-Regular" : require("../assets/font/PlayfairDisplay-Regular.ttf"),
    })

    useEffect(()=>{
        if(error) throw error;
        if(fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded, error])

    if(!fontsLoaded && !error) return null;

    return (
        <Stack>
            <Stack.Screen name='index' options={{ headerShown: false }} />
            <Stack.Screen name='sign' options={{ headerShown: false }} />
            <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        </Stack>
    )
}

export default RootLayout
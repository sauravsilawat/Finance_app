import { View, Text } from 'react-native'
import { Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router'

import homeicn from '../../assets/icon/search.png'
import ordericn from '../../assets/icon/order.png'
import statsicn from '../../assets/icon/graph.png'
import bookmarkicn from '../../assets/icon/bookmark.png'

const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View>
            <Image
                source={icon}
                resizeMode='contain'
                tintColor={color}
                className="w-5 h-5"
            />
        </View>
    )
}

const TabsLayout = () => {
    return (
        <>
            <Tabs 
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: 'white',
                    tabBarInactiveTintColor: "#929090",
                    tabBarStyle: {
                        backgroundColor: "#121212", 
                        height: 70,
                        paddingHorizontal: 20,
                    },
                    headerStyle: {
                        height: 120,
                        borderBottomColor: "black",
                        borderBottomWidth: 0.2,
                    }
                }}
            >
                <Tabs.Screen
                    name='home'
                    options={{
                        title: " DISCOVER",
                        headerTitleStyle: {
                            fontSize: 30, 
                            fontFamily: 'Play-Italic',
                        },
                        tabBarLabel: '',
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={homeicn}
                                color={color}
                                name="Home"
                                focused={focused}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name='order'
                    options={{
                        title: "",
                        headerShown: false,
                        headerTitleStyle: {
                            fontSize: 30, 
                            fontFamily: 'Play-Italic',
                        },
                        tabBarLabel: '',
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={ordericn}
                                color={color}
                                name="order"
                                focused={focused}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name='stats'
                    options={{
                        title: "",
                        headerShown: false,
                        headerTitleStyle: {
                            fontSize: 30, 
                            fontFamily: 'Play-Italic',
                        },
                        tabBarLabel: '',
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={statsicn}
                                color={color}
                                name="stats"
                                focused={focused}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name='bookmark'
                    options={{
                        title: "",
                        headerShown: false,
                        headerTitleStyle: {
                            fontSize: 30, 
                            fontFamily: 'Play-Italic',
                        },
                        tabBarLabel: '',
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={bookmarkicn}
                                color={color}
                                name="bookmark"
                                focused={focused}
                            />
                        )
                    }}
                />
            </Tabs>
        </>
    )
}

export default TabsLayout
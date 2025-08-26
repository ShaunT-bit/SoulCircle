import { homestyle } from "@/styles/home-style";
import {View, Text, TouchableOpacity, SafeAreaView, Animated} from "react-native";
import ScrollView = Animated.ScrollView;


export default function Home() {

    return (
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <SafeAreaView style = {homestyle.home_container}>
                <Text>Hello</Text>
                <View style={homestyle.home_navbox}>

                </View>

            </SafeAreaView>
        </ScrollView>
    )


};

import { useGlobalContext } from "@/lib/global-provider";
import { Redirect, Slot } from "expo-router";
import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function appLayout(){
    const {loading, isLogged} = useGlobalContext();
    if(loading){
        return(
            <SafeAreaView className="bg-white h-full flex justify-center items-center">
                <ActivityIndicator className="text-primary-300" size="large"/>
            </SafeAreaView>
        )
    }
    if(!isLogged) return <Redirect href ="/signin"/>
    return <Slot/> // current screen
}
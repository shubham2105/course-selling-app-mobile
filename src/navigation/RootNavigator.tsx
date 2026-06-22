import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthNavigator from "./AuthNavigator";
import { useAuthStore } from "../store/authStore";
import MainNavigator from "./MainNavigator";

export default function RootNavigator(){
    const isAuthenticated = useAuthStore(
        state => state.isAuthenticated
    )
 return(
    <NavigationContainer>
        {/* <AuthNavigator/> */}
       {isAuthenticated ? (<MainNavigator/>): (<AuthNavigator/>)}
    </NavigationContainer>
 )
}
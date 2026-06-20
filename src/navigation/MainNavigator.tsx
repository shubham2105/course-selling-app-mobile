import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/auth/HomeScree";
import MyCoursesScreen from "../screens/courses/MyCoursesScreen";

const Stack = createNativeStackNavigator();

export default function MainNavigator(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="MyCourses" component={MyCoursesScreen}/>
        </Stack.Navigator>
    )
}
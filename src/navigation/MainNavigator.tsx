import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/auth/HomeScreen";
import MyCoursesScreen from "../screens/courses/MyCoursesScreen";
import CourseDetailsScreen from "../screens/courses/CourseDetailsScreen";

const Stack = createNativeStackNavigator();

export default function MainNavigator(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
            <Stack.Screen name="MyCourses" component={MyCoursesScreen}options={{headerShown:false}}/>
            <Stack.Screen name="CourseDetails" component={CourseDetailsScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}
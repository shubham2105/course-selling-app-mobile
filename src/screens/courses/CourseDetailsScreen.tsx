import { ActivityIndicator, Alert, Button, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MainStackParamList } from "../../types/navigation";
import { RouteProp } from '@react-navigation/native';
import { useEffect, useState } from "react";
import { Course } from "../../types";
import { api } from "../../services/api";
import { SingleCourseResponse } from "../../types/api";

type CourseDetailsRouteProp = RouteProp<MainStackParamList, "CourseDetails">;
type Props = {route: CourseDetailsRouteProp}
export default function CourseDetailsScreen({route,}: Props){
    const [course, setCourse] = useState<Course | null>(null);
    const [loading, setLoading] = useState(false);
    const [isPurchased, setIsPurchased] = useState(false)
    const fetchCourse = async () =>{
        try {
            setLoading(true);
            const response = await api.get<SingleCourseResponse>(`/courses/${courseId}`);
            console.log(response.data)

            setCourse(response.data.course)
            setIsPurchased(response.data.isPurchased)
        } catch (error) {
            console.log(error);
        }
        finally{
            setLoading(false)
        }
    }
    useEffect(()=>{fetchCourse()}, [])
    if(loading){
        return <ActivityIndicator size="large"/>
    }
    const {courseId} = route.params

    // purchase course 
    const handlePurchase = async ()=>{
        try {
            const response = await api.post(`user/purchase/${courseId}`);
            Alert.alert('Success', response.data.message)
        } catch (error:any) {
            Alert.alert('Error', error.response?.data?.message ?? 'Something Went Wrong')
        }
    }
    const fetchCourseDetails = async () =>{
        
    }
    return(
        <SafeAreaView style={styles.container}>
           <View>
            <Text style={styles.title}>{course?.title}</Text>
            <Text style={styles.price}>${course?.price}</Text>
            <Text style={styles.description}>{course?.description}</Text>
            {isPurchased ? (<Text style={styles.purchased}>
                Course Purchased
            </Text>):(<Button title="Purchase Course" onPress={handlePurchase}/>)}
           </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  price: {
    fontSize: 18,
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    marginBottom: 24,
  },
  purchased:{
    fontSize:16,
    fontWeight:"600",
    marginTop:20,
    color:"green"
  }
});
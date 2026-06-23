import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Course } from "../types";

interface CourseCardProps {
    course: Course;
    onPurchase? : (courseId: string) => void;
    onPress?: () => void;
};

export default function CourseCard ({course, onPurchase, onPress}:CourseCardProps){
    return(
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Text style={styles.title}>
                {course.title}
            </Text>

            <Text style ={styles.price}>
                {course.price}
            </Text>
            
            <Text style={styles.description}>
                {course.description}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card:{
        borderWidth:1,
        padding:16,
        marginVertical:8,
        borderRadius:8, 
    },
    title:{
        fontSize:18,
        fontWeight:"600",
    },
    price:{
        marginVertical:8,
    },
    description:{
        marginBottom:12,
    }
})
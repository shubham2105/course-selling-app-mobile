import { StyleSheet, Text, View } from "react-native";
import { Course } from "../types";

interface CourseCardProps {
    course: Course;
    onPurchase? : (courseId: string) => void;
};

export default function CourseCard ({course, onPurchase}:CourseCardProps){
    return(
        <View style={styles.card}>
            <Text style={styles.title}>
                {course.title}
            </Text>

            <Text style ={styles.price}>
                {course.price}
            </Text>
            
            <Text style={styles.description}>
                {course.description}
            </Text>
        </View>
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
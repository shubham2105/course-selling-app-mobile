import { useEffect, useState } from 'react';
import {View, Text, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import { Course } from '../../types';
import { api } from '../../services/api';
import { CourseResponse } from '../../types/api';

export default function MyCoursesScreen(){
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState(false)

    const fetchMyCourses = async () =>{
        try {
            setLoading(true)
            const response = await api.get<CourseResponse>('/user/my-courses',)
            setCourses(response.data.courses);
        } catch (error: any) {
            console.log(error)
        }
        finally {
            setLoading(false)
        }
    }
    useEffect(()=>{
        fetchMyCourses()
    }, [])
    if (loading) {
    return <ActivityIndicator size="large" />;
  }
    return(
        <View style ={styles.container}>
            <FlatList
                data={courses}
                keyExtractor={item => item._id}
                ListEmptyComponent={
                    <Text>No purchased courses yet</Text>
                }
                renderItem={({item})=>(
                    <View style={styles.card}>
                        <Text style={styles.title}>
                            {item.title}
                        </Text>
                         <Text style={styles.price}>
                            ${item.price}
                        </Text>
                         <Text>
                            {item.description}
                        </Text>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        marginTop:20
    },
    card:{
        borderWidth:1,
        marginVertical:8,
        borderRadius:8,
        padding:16,
    },
    title:{
        fontSize:18,
        fontWeight:'600',
    },
    price:{
        marginVertical:8,
    }
})
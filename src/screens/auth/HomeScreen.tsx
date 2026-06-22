import {
  View,
  Text,
  Button,
  ActivityIndicator,
  StyleSheet,
  FlatList,
} from 'react-native';
import { useAuthStore } from '../../store/authStore';
import { useEffect, useState } from 'react';
import { Course } from '../../types';
import { api } from '../../services/api';
import { CourseResponse } from '../../types/api';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParamList } from '../../types/navigation';

type HomeScreenNavigationProp = NativeStackNavigationProp<MainStackParamList, "Home">;
type Props = {navigation: HomeScreenNavigationProp}
export default function HomeScreen({navigation}: Props) {
  const logout = useAuthStore(state => state.logout);

  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      const response = await api.get<CourseResponse>('/courses');
      console.log(courses)
      setCourses(response.data.courses);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, []);

  const handlePurchase = async (courseId: string) =>{
    try {
        const response = await api.post(`/user/purchase/${courseId}`);
        console.log(response.data)
    } catch (error: any) {
        console.log(error.response?.data)
    }
  }

  if (loading) {
    return <ActivityIndicator size="large" />;
  }
  return (
    <View style={styles.container}>
     
      <FlatList
        data={courses}
        keyExtractor={item => item._id}
        renderItem={({ item }) => 
        <View style={styles.flatList}>
            <Text>{item.title}</Text>
            <Text>${item.price}</Text>
            <Text>{item.description}</Text>
            <Button
                title='Purchase'
                onPress={()=>handlePurchase(item._id)}
            />
        </View>}
      />
       <Button title="Logout" onPress={logout} />
       <Button title='My Courses' onPress={()=>navigation.navigate("MyCourses")}/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop:40
  },
  flatList: {
    padding: 16,
    borderWidth: 1,
    marginVertical: 8,
    borderRadius: 8,
  },
});

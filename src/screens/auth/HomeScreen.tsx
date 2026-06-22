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
import CourseCard from '../../components/CourseCard';
import { SafeAreaView } from 'react-native-safe-area-context';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  'Home'
>;
type Props = { navigation: HomeScreenNavigationProp };
export default function HomeScreen({ navigation }: Props) {
  const logout = useAuthStore(state => state.logout);

  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      const response = await api.get<CourseResponse>('/courses');
      console.log(courses);
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

  const handlePurchase = async (courseId: string) => {
    try {
      const response = await api.post(`/user/purchase/${courseId}`);
      console.log(response.data);
    } catch (error: any) {
      console.log(error.response?.data);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" style={{justifyContent:"center", alignItems:"center"}} />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={courses}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <CourseCard course={item} onPurchase={handlePurchase} />
        )}
      />
      <Button title="Logout" onPress={logout} />
      <Button
        title="My Courses"
        onPress={() => navigation.navigate('MyCourses')}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  flatList: {
    padding: 16,
    borderWidth: 1,
    marginVertical: 8,
    borderRadius: 8,
  },
});

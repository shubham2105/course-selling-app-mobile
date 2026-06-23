import { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { Course } from '../../types';
import { api } from '../../services/api';
import { CourseResponse } from '../../types/api';
import CourseCard from '../../components/CourseCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackParamList } from '../../types/navigation';

type Props = NativeStackScreenProps<MainStackParamList, "MyCourses">;

export default function MyCoursesScreen({navigation}: Props) {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchMyCourses = async () => {
    try {
      setLoading(true);
      const response = await api.get<CourseResponse>('/user/my-courses');
      setCourses(response.data.courses);
    } catch (error: any) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchMyCourses();
  }, []);
  if (loading) {
    return <ActivityIndicator size="large" />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={courses}
        keyExtractor={item => item._id}
        ListEmptyComponent={<Text>No purchased courses yet</Text>}
        renderItem={({ item }) => (
          <CourseCard course={item} onPurchase={fetchMyCourses} onPress={()=> navigation.navigate("CourseDetails", {courseId: item._id})}/>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    borderWidth: 1,
    marginVertical: 8,
    borderRadius: 8,
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  price: {
    marginVertical: 8,
  },
});

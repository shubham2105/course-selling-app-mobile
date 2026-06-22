import {View, Text, Button} from 'react-native';
import { useAuthStore } from '../../store/authStore';
export default function HomeScreen(){
    const logout = useAuthStore(state => state.logout)
    return(
        <View>
            <Text>Home Screen</Text>
            <Button title='logout' onPress={logout}/>
        </View>
    )
}
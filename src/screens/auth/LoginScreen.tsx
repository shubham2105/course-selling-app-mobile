import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {View, Text, Button, StyleSheet} from 'react-native';
import { AuthStackParamList } from '../../types/navigation';

type LoginScreenNavigationProp = 
    NativeStackNavigationProp<AuthStackParamList, "Login">
type Props = {navigation: LoginScreenNavigationProp}

export default function LoginScreen({navigation}:Props){
    return(
        <View style={styles.container}>
            <Text>Login Screen</Text>
            <Button
                title='Signup'
                onPress={()=> navigation.navigate('Signup')}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})
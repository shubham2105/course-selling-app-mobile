import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {View, Text, Button, StyleSheet} from 'react-native';
import { AuthStackParamList } from '../../types/navigation';

type SingupScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, "Signup">
type Props = {navigation: SingupScreenNavigationProp}
export default function SignupScreen({navigation}: Props){
    return(
        <View style= {styles.container}>
            <Text>Signup Screen</Text>
            <Button
                title="Login"
                onPress={()=> navigation.navigate("Login")}
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
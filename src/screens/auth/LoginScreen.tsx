import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context'
import { AuthStackParamList } from '../../types/navigation';
import { useState } from 'react';
import { api } from '../../services/api';
import { storage } from '../../storage/mmkv';
import { useAuthStore } from '../../store/authStore';

type LoginScreenNavigationProp = 
    NativeStackNavigationProp<AuthStackParamList, "Login">
type Props = {navigation: LoginScreenNavigationProp}

export default function LoginScreen({navigation}:Props){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const login = useAuthStore(state=> state.login)

    const handleLogin = async () =>{
        try {
            const response = await api.post("/user/login", 
                {email, password}
            );
            const token = response.data.token;
            if(token){
                login(token);
                console.log("Login Sucessfull");
                console.log(useAuthStore.getState());
                // storage.set("token", token);
                // console.log("Stored token:", storage.getString("token"))
            }
        } catch (error:any) {
            console.log(error.response?.data)
        }
    }
    return(
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                  <View style={styles.formContainer}>
            <Text style={styles.heading}>Login</Text>
            <TextInput
                placeholder="email"
                keyboardType="email-address"
                autoCapitalize="none"
                returnKeyType="next"
                autoCorrect={false}
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                />
                 <TextInput
                placeholder='Password'
                secureTextEntry
                returnKeyType="done"
                value={password}
                onChangeText={setPassword}
                style={styles.input}
                />
                <TouchableOpacity 
                    style={styles.button}
                    onPress={handleLogin}>
                        <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.signupContainer}
                    onPress={()=>navigation.navigate("Signup")}
                    >
                    <Text>Dont have an account? Sign up</Text> 
                </TouchableOpacity>
            </View>
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    formContainer:{
        flex:1,
        justifyContent:"flex-start",
        padding:20,
        marginTop:20,
    },
    heading:{
        fontSize:20,
        fontWeight:"bold",
        marginBottom:20,
    },
    input:{
        borderWidth:1,
        padding:12,
        marginBottom:15,
        borderRadius:8,
    },
    button:{
        padding:15,
        alignItems:"center",
        borderRadius:8,
        marginBottom:15,
        backgroundColor:"#000",
    },
    buttonText:{
        color:'#fff',
        fontWeight:'600',
        
    },
    safeArea:{
        flex:1,
    },
    container:{
        flex:1,
        paddingHorizontal:20,
    },
    signupContainer:{
        alignItems:"center",
         marginTop:20
    },
})
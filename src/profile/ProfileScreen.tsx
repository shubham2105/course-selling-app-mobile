import { useEffect, useState } from "react";
import { ActivityIndicator, Button, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuthStore } from "../store/authStore";
import { User } from "../types";
import { api } from "../services/api";
import { ProfileResponse } from "../types/api";

export function ProfileScreen(){
    const logout = useAuthStore(state=> state.logout);
    const [user, setUser] = useState<User | null> (null)
    const [loading, setLoading] = useState(false)

    const fetchProfile = async () =>{
        try {
            setLoading(true)
            const response = await api.get<ProfileResponse>("/user/profile");
            setUser(response.data.user);
        } catch (error) {
            console.log(error)
        }
        finally{
            setLoading(false)
        }
    }
    useEffect(()=>{fetchProfile()},[])
    if(loading){
        return <ActivityIndicator size={"large"}/>
    }
     return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.name}>
        {user?.firstName} {user?.lastName}
      </Text>

      <Text style={styles.email}>
        {user?.email}
      </Text>

      <Button
        title="Logout"
        onPress={logout}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
  },
  email: {
    fontSize: 16,
    marginBottom: 24,
  },
});
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { AuthStackParamList } from '../../types/navigation';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

type SingupScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'Signup'
>;
type Props = { navigation: SingupScreenNavigationProp };
export default function SignupScreen({ navigation }: Props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    console.log('Signup Button Pressed');
    console.log({ firstName, lastName, email, password });
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.heading}>Sign up</Text>
          <TextInput
            placeholder="FirstName"
            value={firstName}
            onChangeText={setFirstName}
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
          />
          <TextInput
            placeholder="Lastname"
            value={lastName}
            onChangeText={setLastName}
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
          />
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            returnKeyType="next"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            autoCapitalize="none"
            value={password}
            onChangeText={setPassword}
            returnKeyType="done"
            style={styles.input}
          />
          <TouchableOpacity style={styles.button} onPress={handleSignup}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.loginContainer}
            onPress={() => navigation.navigate('Login')}
          >
            <Text>Already have an account? Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 20,
    marginTop: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
  },
  button: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#000',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  loginContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
});

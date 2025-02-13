// import { useState } from "react";
// import { View, StyleSheet } from "react-native";
// import { TextInput, Button } from "react-native-paper";
// import { Link } from "expo-router";
// import { useAuth } from "../../../contexts/AuthContext";

// export default function LoginScreen() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { login } = useAuth();
//   console.log("login", email, password);

//   const handleLogin = async () => {
//     try {
//       await login(email, password);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         label="Email"
//         value={email}
//         onChangeText={setEmail}
//         style={styles.input}
//         mode="outlined"
//       />
//       <TextInput
//         label="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//         style={styles.input}
//         mode="outlined"
//       />
//       <Button mode="contained" onPress={handleLogin} style={styles.button}>
//         Login
//       </Button>
//       <Link href="/register" asChild>
//         <Button mode="text" style={styles.link}>
//           Don't have an account? Register
//         </Button>
//       </Link>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     padding: 20,
//   },
//   input: {
//     marginBottom: 12,
//   },
//   button: {
//     marginTop: 16,
//   },
//   link: {
//     marginTop: 20,
//   },
// });

import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { TextInput, Button, Divider } from "react-native-paper";
import { Link } from "expo-router";
import { useAuth } from "../../../contexts/AuthContext";
import GoogleLoginButton from "../../components/GoogleAuthButton";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      await login(email, password);
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        mode="outlined"
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
        mode="outlined"
      />
      <Button
        mode="contained"
        onPress={handleLogin}
        style={styles.button}
        loading={loading}
      >
        <Text>Login</Text>
      </Button>
      <Divider style={styles.divider} />
      <GoogleLoginButton />
      <Link href="/register" asChild>
        <Button mode="text" style={styles.link}>
          <Text>Don't have an account? Register</Text>
        </Button>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 16,
  },
  divider: {
    marginVertical: 20,
  },
  link: {
    marginTop: 20,
  },
});

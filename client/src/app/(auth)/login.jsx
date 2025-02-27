import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { Link } from "expo-router";
import { useAuth } from "../../contexts/AuthContext";
import GoogleLoginButton from "../../components/GoogleAuthButton";
import DividerWithText from "../../components/DeviderWithText";
import { useThemeContext } from "../../contexts/ThemeContext";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [localError, setLocalError] = useState(null);
  const { login, isLoading } = useAuth();
  const { paperTheme } = useThemeContext();

  const handleLogin = async () => {
    setLocalError(null);
    try {
      await login(email, password);
    } catch (err) {
      setLocalError(err.message || "Login failed. Please try again.");
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: paperTheme.colors.background }]}>
      {localError && <Text style={styles.error}>{localError}</Text>}
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        mode="outlined"
        autoCapitalize="none"
        keyboardType="email-address"
        disabled={isLoading}
        theme={{ colors: { primary: paperTheme.colors.inversePrimary } }}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
        mode="outlined"
        disabled={isLoading}
        theme={{ colors: { primary: paperTheme.colors.inversePrimary } }}
      />
      <Button
        mode="contained"
        onPress={handleLogin}
        style={[styles.button, { backgroundColor: paperTheme.colors.success }]}
        loading={isLoading}
        disabled={isLoading}
      >
        <Text>Login</Text>
      </Button>
      <DividerWithText text="or" />
      <GoogleLoginButton />
      <Link href="/register" asChild>
        <Button
          mode="text"
          style={styles.link}
          textColor={paperTheme.colors.inversePrimary}
        >
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
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 16,
  },
  link: {
    marginTop: 20,
  },
  error: {
    color: "red",
    marginBottom: 12,
    textAlign: "center",
  },
});
// import { useState } from "react";
// import { View, StyleSheet, Text } from "react-native";
// import { TextInput, Button, Divider } from "react-native-paper";
// import { Link } from "expo-router";
// import { useAuth } from "../../contexts/AuthContext";
// import GoogleLoginButton from "../../components/GoogleAuthButton";
// import DividerWithText from "../../components/DeviderWithText";
// import { useThemeContext } from "../../contexts/ThemeContext";

// export default function LoginScreen() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const { login } = useAuth();
//   const { paperTheme } = useThemeContext();

//   const handleLogin = async () => {
//     setLoading(true);
//     try {
//       await login(email, password);
//     } catch (error) {
//       console.error("Login failed:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <View style={[styles.container, { backgroundColor: paperTheme.colors.background }]}>
//       <TextInput
//         label="Email"
//         value={email}
//         onChangeText={setEmail}
//         style={styles.input}
//         mode="outlined"
//         autoCapitalize="none"
//         keyboardType="email-address"
//       />
//       <TextInput
//         label="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//         style={styles.input}
//         mode="outlined"
//       />
//       <Button
//         mode="contained"
//         onPress={handleLogin}
//         style={styles.button}
//         loading={loading}
//       >
//         <Text>Login</Text>
//       </Button>
//       <DividerWithText text="or" />
//       <GoogleLoginButton />
//       <Link href="/register" asChild>
//         <Button mode="text" style={styles.link}>
//           <Text>Don't have an account? Register</Text>
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
//     backgroundColor: "#fff",
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

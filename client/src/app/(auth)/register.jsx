import { useState, useEffect } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { TextInput, Button, Divider, ActivityIndicator } from "react-native-paper";
import { Link, router } from "expo-router";
import { useAuth } from "../../../contexts/AuthContext";
import GoogleLoginButton from "../../components/GoogleAuthButton";

export default function RegisterScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const { register, isLoading, error } = useAuth();

  console.log("RegisterScreen Error:", error);
  console.log("RegisterScreen password:", password);
  console.log("RegisterScreen email:", email);

  useEffect(() => {
    if (error) {
      Alert.alert("Registration Error", error);
    }
  }, [error]);

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) newErrors.email = "Email is required";
    else if (!emailRegex.test(email)) newErrors.email = "Invalid email format";

    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (password !== confirmPassword) newErrors.confirmPassword = "Passwords must match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async () => {
    if (!validateForm()) return;

    try {
      await register(email, password);
      router.replace("/home");
    } catch (error) {}
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        error={!!errors.email}
        style={styles.input}
        mode="outlined"
        autoCapitalize="none"
        keyboardType="email-address"
      />
      {errors.email && <Text style={styles.error}>{errors.email}</Text>}

      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!showPassword}
        error={!!errors.password}
        style={styles.input}
        mode="outlined"
        right={
          <TextInput.Icon
            icon={showPassword ? "eye-off" : "eye"}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
      />
      {errors.password && <Text style={styles.error}>{errors.password}</Text>}

      <TextInput
        label="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry={!showPassword}
        error={!!errors.confirmPassword}
        style={styles.input}
        mode="outlined"
      />
      {errors.confirmPassword && (
        <Text style={styles.error}>{errors.confirmPassword}</Text>
      )}

      {isLoading ? (
        <ActivityIndicator animating={true} style={styles.loading} />
      ) : (
        <Button
          mode="contained"
          onPress={handleRegister}
          style={styles.button}
          disabled={isLoading}
        >
          Register
        </Button>
      )}

      <Divider style={styles.divider} />

      <GoogleLoginButton />

      <Link href="/login" asChild>
        <Button mode="text" style={styles.link}>
          Already have an account? Login
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
    marginBottom: 4,
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
  error: {
    color: "red",
    marginBottom: 8,
  },
  loading: {
    marginVertical: 16,
  },
});
// import { useState } from "react";
// import { View, StyleSheet } from "react-native";
// import { TextInput, Button, Divider } from "react-native-paper";
// import { Link } from "expo-router";
// import { useAuth } from "../../../contexts/AuthContext";
// import GoogleLoginButton from "../../components/GoogleAuthButton";

// export default function RegisterScreen() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { register } = useAuth();

//   const handleRegister = async () => {
//     try {
//       await register(email, password);
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
//       <Button mode="contained" onPress={handleRegister} style={styles.button}>
//         Register
//       </Button>
//       <Divider style={styles.divider} />
//       <GoogleLoginButton />
//       <Link href="/login" asChild>
//         <Button mode="text" style={styles.link}>
//           Already have an account? Login
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
//   divider: {
//     marginVertical: 20,
//   },
//   link: {
//     marginTop: 20,
//   },
// });

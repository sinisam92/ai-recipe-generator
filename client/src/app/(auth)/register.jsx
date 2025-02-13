// "use client";

// import { useState } from "react";
// import { View, StyleSheet, Text } from "react-native";
// import { TextInput, Button } from "react-native-paper";
// import { Link } from "expo-router";
// import { useAuth } from "../../../contexts/AuthContext";

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
//         <Text>Register</Text>
//       </Button>
//       <Link href="/login" asChild>
//         <Button mode="text" style={styles.link}>
//           <Text>Already have an account? Login</Text>
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
"use client";

import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button, Divider } from "react-native-paper";
import { Link } from "expo-router";
import { useAuth } from "../../../contexts/AuthContext";
import GoogleLoginButton from "../../components/GoogleAuthButton";

export default function RegisterScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useAuth();

  const handleRegister = async () => {
    try {
      await register(email, password);
    } catch (error) {
      console.error(error);
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
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
        mode="outlined"
      />
      <Button mode="contained" onPress={handleRegister} style={styles.button}>
        Register
      </Button>
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

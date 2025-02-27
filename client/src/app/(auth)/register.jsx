import { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { Link, router } from "expo-router";
import { useAuth } from "../../contexts/AuthContext";
import GoogleLoginButton from "../../components/GoogleAuthButton";
import { useThemeContext } from "../../contexts/ThemeContext";
import DividerWithText from "../../components/DeviderWithText";

export default function RegisterScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const { register, isLoading, error } = useAuth();
  const { paperTheme } = useThemeContext();

  useEffect(() => {
    if (error) {
      setErrors((prev) => ({ ...prev, server: error }));
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
      router.replace("/(tabs)");
    } catch (err) {}
  };

  return (
    <View style={[styles.container, { backgroundColor: paperTheme.colors.background }]}>
      {errors.server && <Text style={styles.error}>{errors.server}</Text>}
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        error={!!errors.email}
        style={styles.input}
        mode="outlined"
        autoCapitalize="none"
        keyboardType="email-address"
        disabled={isLoading}
        theme={{ colors: { primary: paperTheme.colors.inversePrimary } }}
        underlineColor={paperTheme.colors.inversePrimary}
        activeUnderlineColor={paperTheme.colors.inversePrimary}
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
        disabled={isLoading}
        right={
          <TextInput.Icon
            icon={showPassword ? "eye-off" : "eye"}
            onPress={() => setShowPassword(!showPassword)}
            disabled={isLoading}
          />
        }
        theme={{ colors: { primary: paperTheme.colors.inversePrimary } }}
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
        disabled={isLoading}
        theme={{ colors: { primary: paperTheme.colors.inversePrimary } }}
      />
      {errors.confirmPassword && (
        <Text style={styles.error}>{errors.confirmPassword}</Text>
      )}

      <Button
        mode="contained"
        onPress={handleRegister}
        style={[
          styles.button,
          {
            backgroundColor: paperTheme.colors.success,
          },
        ]}
        loading={isLoading}
        disabled={isLoading}
        textColor="#fff"
      >
        Register
      </Button>

      <DividerWithText text="or" />
      <GoogleLoginButton />

      <Link href="/login" asChild>
        <Button
          mode="text"
          style={styles.link}
          disabled={isLoading}
          textColor={paperTheme.colors.inversePrimary}
        >
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
    borderWidth: 1,
  },
  link: {
    marginTop: 20,
  },
  error: {
    color: "red",
    marginBottom: 8,
  },
});

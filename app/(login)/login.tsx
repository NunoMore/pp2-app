import BackButton from "@/components/BackButton";
import Background from "@/components/Background";
import CustomButton from "@/components/CustomButton";
import CustomTextInput from "@/components/CustomTextInput";
import HeaderText from "@/components/HeaderText";
import Logo from "@/components/Logo";
import { ThemedText } from "@/components/ThemedText";
import { RepoKeys } from "@/constants/RepoKeys";
import { Screens } from "@/constants/Screens";
import Repo from "@/utils/repository";
import { emailValidator, passwordValidator } from "@/utils/utils";
import { router } from "expo-router";
import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export default function LoginScreen() {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    Promise.resolve(Repo.read(RepoKeys.registeredUsers)).then((result) => {
      const registeredUsers = result;
      const existingUser = registeredUsers?.find(
        (user: { email: string }) => user.email === email.value
      );
      console.log(existingUser);

      if (existingUser) {
        if (existingUser.password === password.value)
          router.navigate(Screens.Home);
        else setPassword({ ...password, error: "Password is incorrect" });
      } else
        setEmail({
          ...email,
          error:
            "User not found. Please try another user or register a new one.",
        });
    });
  };

  return (
    <Background>
      <Logo />
      <HeaderText>Welcome back.</HeaderText>
      <CustomTextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text: string) => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        inputMode="email"
      />
      <CustomTextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text: string) => setPassword({ value: text, error: "" })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => router.navigate(Screens.ResetPassword)}
        >
          <ThemedText style={styles.forgot}>Forgot your password?</ThemedText>
        </TouchableOpacity>
      </View>
      <CustomButton label="Login" mode="contained" onPress={onLoginPressed} />
      <View style={styles.row}>
        <ThemedText>Don’t have an account? </ThemedText>
        <TouchableOpacity onPress={() => router.navigate(Screens.Register)}>
          <ThemedText style={styles.link}>Register</ThemedText>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 24,
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
  },
  link: {
    fontWeight: "bold",
  },
});

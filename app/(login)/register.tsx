import Background from "@/components/Background";
import CustomButton from "@/components/CustomButton";
import CustomTextInput from "@/components/CustomTextInput";
import HeaderText from "@/components/HeaderText";
import Logo from "@/components/Logo";
import { ThemedText } from "@/components/ThemedText";
import { User } from "@/constants/Models";
import { RepoKeys } from "@/constants/RepoKeys";
import { Screens } from "@/constants/Screens";
import Repo from "@/utils/repository";
import {
  emailValidator,
  nameValidator,
  passwordValidator,
  phoneNumberValidator,
} from "@/utils/utils";
import { router } from "expo-router";
import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

export default function RegisterScreen() {
  const [name, setName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [phoneNumber, setPhoneNumber] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  const onSignUpPressed = () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    const phoneNumberError = phoneNumberValidator(phoneNumber.value);
    if (emailError || passwordError || nameError || phoneNumberError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      setPhoneNumber({ ...phoneNumber, error: phoneNumberError });
      return;
    }

    Promise.resolve(Repo.read(RepoKeys.registeredUsers)).then((result) => {
      let registeredUsers = result;

      if (registeredUsers && registeredUsers.length > 0) {
        const registeredEmails = registeredUsers.map(
          ({ email }: { email: string }) => email
        );
        if (registeredEmails.includes(email.value)) {
          setEmail({ ...email, error: "Email already registered." });
          return;
        }
      } else registeredUsers = [];

      const newUser = new User(
        name.value,
        email.value,
        password.value,
        phoneNumber.value
      );
      Repo.create(RepoKeys.registeredUsers, [...registeredUsers, newUser]);
      Repo.update(RepoKeys.userLoggedIn, newUser);

      router.navigate(Screens.Home);
    });
  };

  return (
    <Background>
      <Logo />
      <HeaderText>Create Account</HeaderText>
      {/* <ScrollView style={styles.inputs} showsVerticalScrollIndicator={false}> */}
      <CustomTextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text: string) => setName({ value: text, error: "" })}
        error={!!name.error}
        errorText={name.error}
      />
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
        label="WhatsApp (+123 999 999 999)"
        returnKeyType="next"
        value={phoneNumber.value}
        onChangeText={(text: string) =>
          setPhoneNumber({ value: text, error: "" })
        }
        error={!!phoneNumber.error}
        errorText={phoneNumber.error}
        autoCapitalize="none"
        autoComplete="tel"
        textContentType="telephoneNumber"
        inputMode="tel"
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
      {/* </ScrollView> */}
      {/* {!!password.error ? (
        <ThemedText style={styles.errorText}>{password.error}</ThemedText>
      ) : null}
      {!!email.error ? (
        <ThemedText style={styles.errorText}>{email.error}</ThemedText>
      ) : null}
      {!!phoneNumber.error ? (
        <ThemedText style={styles.errorText}>{phoneNumber.error}</ThemedText>
      ) : null}
      {!!name.error ? (
        <ThemedText style={styles.errorText}>{name.error}</ThemedText>
      ) : null} */}
      <CustomButton
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
        label="Sign Up"
      />
      <View style={styles.row}>
        <ThemedText>Already have an account? </ThemedText>
        <TouchableOpacity onPress={() => router.navigate(Screens.Login)}>
          <ThemedText style={styles.link}>Login</ThemedText>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  errorText: {
    fontSize: 13,
    // color: theme.colors.error,
    paddingTop: 8,
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  link: {
    fontWeight: "bold",
    // color: theme.colors.primary,
  },
  inputs: {
    flex: 1,
  },
});

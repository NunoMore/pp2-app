import BackButton from "@/components/BackButton";
import Background from "@/components/Background";
import CustomButton from "@/components/CustomButton";
import CustomTextInput from "@/components/CustomTextInput";
import HeaderText from "@/components/HeaderText";
import Logo from "@/components/Logo";
import { Screens } from "@/constants/Screens";
import { emailValidator, sendAlert } from "@/utils/utils";
import { router } from "expo-router";
import React, { useState } from "react";
import { Alert, Platform } from "react-native";

export default function ResetPasswordScreen() {
  const [email, setEmail] = useState({ value: "", error: "" });

  const sendResetPasswordEmail = () => {
    const emailError = emailValidator(email.value);
    if (emailError) {
      setEmail({ ...email, error: emailError });
      return;
    }
    sendAlert("Rest Password", "Email was sent!");
  };

  return (
    <Background>
      <Logo />
      <HeaderText>Restore Password</HeaderText>
      <CustomTextInput
        label="E-mail address"
        returnKeyType="done"
        value={email.value}
        onChangeText={(text: string) => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        inputMode="email"
        description="You will receive email with password reset link."
      />
      <CustomButton
        label="Send Instructions"
        mode="contained"
        onPress={sendResetPasswordEmail}
        style={{ marginTop: 16 }}
      />
      <CustomButton
        label="Back to Login"
        mode="outlined"
        onPress={() => router.navigate(Screens.Login)}
        style={{ marginTop: 16 }}
      />
    </Background>
  );
}

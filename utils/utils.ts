import { RepoKeys } from "@/constants/RepoKeys";
import Repo from "./repository";
import { User } from "@/constants/Models";
import { Alert, Platform } from "react-native";

export function isValidUrl(urlString: string): boolean {
  try {
    new URL(urlString);
    return true;
  } catch (error) {
    return false;
  }
}

export function emailValidator(email: string) {
  const re = /\S+@\S+\.\S+/;
  if (!email) return "Email can't be empty.";
  if (!re.test(email)) return "Ooops! We need a valid email address.";
  return "";
}

export function nameValidator(name: string) {
  if (!name) return "Name can't be empty.";
  return "";
}

export function passwordValidator(password: string) {
  if (!password) return "Password can't be empty.";
  if (password.length < 5)
    return "Password must be at least 5 characters long.";
  return "";
}

export function phoneNumberValidator(number: string) {
  if (!number) return "Country code and number are required";
  if (!number.includes("+")) {
    return "Invalid country code";
  }
  if (!/^\d{9,}$/.test(number.replace("+", "").replace(" ", "")))
    return "Invalid phone number format";

  return "";
}

export function sendAlert(title: string, message: string) {
  if (Platform.OS === "web") alert(message);
  else Alert.alert(title, message);
}

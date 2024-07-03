import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";
import { sendAlert } from "./utils";

const Repo = {
  create: async (key: string, data: object | string | any[]) => {
    // const dataString: string =
    //   typeof data === "string" ? data : JSON.stringify(data);

    // if (Platform.OS === "web") {
    //   window.localStorage.setItem(key, dataString);
    // }

    try {
      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e: any) {
      // saving error
      sendAlert("Repository error - create", e.toString());
    }

    return Repo.read(key);
  },
  read: async (key: string) => {
    // if (Platform.OS === "web") {
    //   const value = window.localStorage.getItem(key);
    //   return !value ? undefined : JSON.parse(value);
    // }

    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return !jsonValue ? undefined : JSON.parse(jsonValue);
    } catch (e: any) {
      sendAlert("Repository error - read", e.toString());
    }
  },
  update: (key: string, data: Object | string | any[]) => {
    Repo.delete(key);
    return Repo.create(key, data);
  },
  delete: async (key: string) => {
    // if (Platform.OS === "web") {
    //   window.localStorage.removeItem(key);
    // }

    try {
      await AsyncStorage.removeItem(key);
    } catch (e: any) {
      sendAlert("Repository error - delete", e.toString());
    }
  },
};

export default Repo;

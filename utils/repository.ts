import AsyncStorage from "@react-native-async-storage/async-storage";
import { sendAlert } from "./utils";

const Repo = {
  create: async (key: string, data: object | string | any[]) => {
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
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return !jsonValue ? undefined : JSON.parse(jsonValue);
    } catch (e: any) {
      sendAlert("Repository error - read", e.toString());
    }
  },
  update: (key: string, data: Object | string | any[]) => {
    return Promise.resolve(Repo.delete(key)).then(() => Repo.create(key, data));
  },
  delete: async (key: string) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e: any) {
      sendAlert("Repository error - delete", e.toString());
    }
  },
};

export default Repo;

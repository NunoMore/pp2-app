import DetailsList from "@/components/DetailsList";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { RepoKeys } from "@/constants/RepoKeys";
import Repo from "@/utils/repository";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

export interface ProfileDetails {
  name: string;
  email: string;
  phoneNumber: string;
  profileImage: string | undefined;
  companyImage?: string | undefined;
}

function ProfileDetails() {
  const getUser = async () => await Repo.read(RepoKeys.userLoggedIn);
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    Promise.resolve(getUser()).then((user) => setCurrentUser(user));
  }, []);

  return (
    <ThemedView>
      {currentUser && (
        <>
          <ThemedText>Details</ThemedText>
          <DetailsList data={currentUser} />
        </>
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({});

export default ProfileDetails;

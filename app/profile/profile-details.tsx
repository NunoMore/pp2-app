import CustomButton from "@/components/CustomButton";
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
  const [currentUser, setCurrentUser] = useState();
  const [newUser, setNewUser] = useState<any>(currentUser);
  const [isEditing, setIsEditing] = useState(false);

  const handleLogOutButton = () => {
    Repo.update(RepoKeys.userLoggedIn, {});
    setCurrentUser(undefined);
  };

  const handleEditSaveButton = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      newUser &&
        Repo.update(RepoKeys.userLoggedIn, newUser).then(() => {
          Repo.read(RepoKeys.registeredUsers).then((users) => {
            users = users.filter((obj: any) => obj.email !== newUser.email);
            Repo.update(RepoKeys.registeredUsers, [...users, newUser]);
          });
        });
    }
  };

  useEffect(() => {
    Repo.read(RepoKeys.userLoggedIn)
      .then((user) => setCurrentUser(user))
      .catch(() => null);
  }, []);

  return (
    currentUser && (
      <ThemedView>
        <ThemedText>My details</ThemedText>
        <DetailsList
          onChange={setNewUser}
          isEditing={isEditing}
          data={currentUser}
        />
        <CustomButton
          mode="contained"
          label={isEditing ? "Save changes" : "Edit"}
          onPress={handleEditSaveButton}
        />
        <CustomButton
          mode="elevated"
          label="Log Out"
          onPress={handleLogOutButton}
        />
      </ThemedView>
    )
  );
}

const styles = StyleSheet.create({});

export default ProfileDetails;

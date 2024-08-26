import { RepoKeys } from "@/constants/RepoKeys";
import { Screens } from "@/constants/Screens";
import Repo from "@/utils/repository";
import { router } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";

const ProfileButton = () => {
  // todo: get profileImage
  const profileImage =
    undefined || require("@/assets/images/default_profile_image.png");

  const handlePress = () => {
    Promise.resolve(Repo.read(RepoKeys.userLoggedIn)).then((user) => {
      if (!user || Object.keys(user).length === 0)
        router.navigate(Screens.Login);
      else router.navigate(Screens.Profile);
    });
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Avatar.Image source={profileImage} size={24} />
    </TouchableOpacity>
  );
};

export default ProfileButton;

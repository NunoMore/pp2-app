import DetailsList from "@/components/DetailsList";
import { StyleSheet, Text, View } from "react-native";

export interface ProfileDetails {
  name: string;
  email: string;
  phoneNumber: string;
  profileImage: string | undefined;
  companyImage?: string | undefined;
}

function ProfileDetails() {
  const defaultDetails: ProfileDetails = {
    name: "My company name",
    email: "some@email.com",
    phoneNumber: "+1999999999",
    profileImage: undefined,
  };

  return (
    <View style={styles.container}>
      <Text>Details</Text>
      <DetailsList data={defaultDetails} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default ProfileDetails;

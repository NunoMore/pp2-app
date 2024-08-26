import SquareButton from "@/components/SquareButton";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Screens } from "@/constants/Screens";
import { sendAlert } from "@/utils/utils";
import { router } from "expo-router";
import { Platform, StyleSheet, View } from "react-native";

const ProfileVouchers = () => {
  const handleEditVoucher = () => router.navigate(Screens.VouchersEdit);
  const handleVerifyVoucher = () => {
    if (Platform.OS !== "ios" && Platform.OS !== "android")
      sendAlert("Verify Voucher", "Not available in web");
    else router.navigate(Screens.VouchersRead);
  };

  return (
    <ThemedView style={styles.container}>
      <View style={styles.buttonsContainer}>
        <SquareButton text="Edit Vouchers" onPress={handleEditVoucher} />
        <SquareButton text="Verify Voucher" onPress={handleVerifyVoucher} />
      </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    // flex: 1,
    // flexDirection: "row",
  },
  buttonsContainer: {
    flexDirection: "row",
    margin: 10,
  },
});

export default ProfileVouchers;

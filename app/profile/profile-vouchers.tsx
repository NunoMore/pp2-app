import SquareButton from "@/components/SquareButton";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { sendAlert } from "@/utils/utils";
import { StyleSheet, View } from "react-native";

const ProfileVouchers = () => {
  return (
    <ThemedView style={styles.container}>
      <View style={styles.buttonsContainer}>
        <SquareButton
          text="Edit Vouchers"
          onPress={() => sendAlert("Verified", "Verified")}
        />
        <SquareButton
          text="Verify Voucher"
          onPress={() => sendAlert("Verified", "Verified")}
        />
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

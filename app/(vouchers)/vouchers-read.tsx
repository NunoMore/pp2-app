import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { isMobile } from "@/utils/utils";
import Repo from "@/utils/repository";
import { RepoKeys } from "@/constants/RepoKeys";
import { Voucher } from "@/constants/Models";
import CustomTextInput from "@/components/CustomTextInput";
import CustomButton from "@/components/CustomButton";
import SquareButton from "@/components/SquareButton";
import { Scanner } from "@yudiel/react-qr-scanner";
import VoucherItem from "@/components/Voucher/VoucherItem";

const VouchersRead = () => {
  const [currentVoucher, setCurrentVoucher] = useState<Voucher>();
  const [codeToBeVerified, setCodeToBeVerified] = useState("");
  const [error, setError] = useState("");
  const [readingMode, setReadingMode] = useState(false);

  const getVoucher = async () => {
    const vouchers: Voucher[] = await Repo.read(RepoKeys.vouchers);
    const existingVoucher = vouchers.find(
      (v: Voucher) => v.code === codeToBeVerified
    );
    if (!existingVoucher) {
      setError("Voucher doesn't exist");
      setCurrentVoucher(undefined);
    } else if (existingVoucher.code !== currentVoucher?.code)
      setCurrentVoucher(existingVoucher);
  };

  const handleUseVoucher = async () => {
    const existingVouchers: Voucher[] = await Repo.read(RepoKeys.vouchers);

    // Find the voucher by code
    const foundVoucherIndex = existingVouchers.findIndex(
      (v) => v.code === currentVoucher?.code
    );

    if (foundVoucherIndex !== -1) {
      existingVouchers[foundVoucherIndex].used = true;
      await Repo.update(RepoKeys.vouchers, existingVouchers);
      currentVoucher && setCurrentVoucher({ ...currentVoucher, used: true });
    } else {
      setError("Voucher doesn't exist");
    }
  };

  useEffect(() => {}, [currentVoucher]);

  return (
    <ThemedView>
      <CustomTextInput
        label="Insert code"
        returnKeyType="next"
        value={codeToBeVerified}
        onChangeText={(text: string) => setCodeToBeVerified(text)}
        error={!!error}
        errorText={error}
      />
      {codeToBeVerified && (
        <CustomButton
          mode="contained"
          onPress={getVoucher}
          label="Verify code"
        />
      )}
      {!!currentVoucher && (
        <VoucherItem voucher={currentVoucher} onUse={handleUseVoucher} />
      )}
      {isMobile() && (
        <View>
          <ThemedText>Is mobile</ThemedText>
          {readingMode && <Scanner onScan={(result) => console.log(result)} />}
          <SquareButton
            text={readingMode ? "Cancel" : "Read QR code"}
            onPress={() => setReadingMode(true)}
          />
        </View>
      )}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: "#777",
  },
  textBold: {
    fontWeight: "500",
    color: "#000",
  },
  buttonText: {
    fontSize: 21,
    color: "rgb(0,122,255)",
  },
  buttonTouchable: {
    padding: 16,
  },
});

export default VouchersRead;

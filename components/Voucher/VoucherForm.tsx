import { Voucher } from "@/constants/Models";
import React, { useState } from "react";
import { Button, Card } from "react-native-paper";
// import Permissions from "react-native-permissions";
import CustomTextInput from "../CustomTextInput";
import { StyleSheet } from "react-native";
import { generateRandomCode } from "@/utils/utils";
import Repo from "@/utils/repository";
import { RepoKeys } from "@/constants/RepoKeys";

interface VoucherFormProps {
  voucher?: Voucher;
  onSave: (voucher: Voucher) => void;
  onCancel: () => void;
}

const VoucherForm = ({ voucher, onSave, onCancel }: VoucherFormProps) => {
  const [title, setTitle] = useState(voucher?.title || "");
  const [discountValue, setDiscountValue] = useState(
    voucher?.discountValue || 0
  );
  const [backgroundImage, setBackgroundImage] = useState(
    // todo: get a default background image
    voucher?.backgroundImage || ""
  );

  const generateCode = async () => {
    // todo: get user and use company as a prefix???
    const prefix = "PP2";
    const vouchers = await Repo.read(RepoKeys.vouchers);

    let newCode = generateRandomCode(prefix);
    while (vouchers.map((v: Voucher) => v.code).includes(newCode)) {
      newCode = generateRandomCode(prefix);
    }

    return newCode;
  };

  const handleSubmit = () => {
    generateCode().then((newCode) => {
      const newVoucher: Voucher = {
        used: false,
        code: voucher?.code || newCode, // Replace with your code generation logic
        title,
        discountValue,
        backgroundImage,
      };
      onSave(newVoucher);
    });
  };

  return (
    <Card style={styles.container}>
      <Card.Content>
        <CustomTextInput label="Title" value={title} onChangeText={setTitle} />
        <CustomTextInput
          label="Discount Value"
          keyboardType="numeric"
          value={discountValue.toString()}
          onChangeText={(text: string) => setDiscountValue(Number(text))}
        />
        {/* Image upload component */}
      </Card.Content>
      <Card.Actions>
        <Button onPress={handleSubmit}>Save</Button>
        <Button onPress={onCancel}>Cancel</Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    position: "absolute",
    top: "25%",
  },
});

export default VoucherForm;

import { Voucher } from "@/constants/Models";
import React, { useState } from "react";
import { Button, TextInput, Card } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
// import Permissions from "react-native-permissions";
import * as crypto from "crypto";
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

  // Image upload logic (not included here)
  const handleImageUpload = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  };

  const handleSubmit = () => {
    generateCode().then((newCode) => {
      const newVoucher = {
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

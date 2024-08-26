import { Voucher } from "@/constants/Models";
import React from "react";
import { StyleSheet } from "react-native";
import { List, IconButton, Button } from "react-native-paper";

interface VoucherItemProps {
  voucher: Voucher;
  onEdit: (voucher: Voucher) => void;
  onDelete: (code: string) => void;
}

const VoucherItem = ({ voucher, onEdit, onDelete }: VoucherItemProps) => {
  return (
    <List.Item
      // onPress={() => onEdit(voucher)}
      title={voucher.title}
      description={
        <>
          {`Code: ${voucher.code}`}
          <br />
          {`${voucher.discountValue}% off`}
        </>
      }
      right={() => (
        <>
          <IconButton icon="pencil-outline" onPress={() => onEdit(voucher)} />
          <IconButton
            icon="trash-can-outline"
            onPress={() => onDelete(voucher.code)}
          />
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    maxHeight: 50,
    margin: 2,
  },
});

export default VoucherItem;

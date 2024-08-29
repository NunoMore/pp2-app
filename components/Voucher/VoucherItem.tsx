import { Voucher } from "@/constants/Models";
import { sendAlert } from "@/utils/utils";
import React from "react";
import { StyleSheet } from "react-native";
import { List, IconButton, Button } from "react-native-paper";

interface VoucherItemProps {
  voucher: Voucher;
  onUse?: () => void;
  onEdit?: (voucher: Voucher) => void;
  onDelete?: (code: string) => void;
}

const VoucherItem = ({
  voucher,
  onUse,
  onEdit,
  onDelete,
}: VoucherItemProps) => {
  // todo: pass here the code to delete, edit, use
  return (
    <List.Item
      // onPress={() => onEdit(voucher)}
      title={voucher.title}
      description={
        <>
          {`Code: ${voucher.code}`}
          <br />
          {`${voucher.discountValue}% off`}
          <br />
          {!!voucher.used && "Voucher used!"}
        </>
      }
      right={() => (
        <>
          {!!onUse && (
            <IconButton
              icon={voucher.used ? "playlist-check" : "playlist-remove"}
              onPress={() =>
                voucher.used
                  ? sendAlert("Voucher", "Voucher already used")
                  : onUse()
              }
            />
          )}
          {!!onEdit && (
            <IconButton icon="pencil-outline" onPress={() => onEdit(voucher)} />
          )}
          {!!onDelete && (
            <IconButton
              icon="trash-can-outline"
              onPress={() => onDelete(voucher.code)}
            />
          )}
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

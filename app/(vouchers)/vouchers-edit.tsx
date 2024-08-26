import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import VoucherForm from "@/components/Voucher/VoucherForm";
import VoucherItem from "@/components/Voucher/VoucherItem";
import { Voucher } from "@/constants/Models";
import { RepoKeys } from "@/constants/RepoKeys";
import Repo from "@/utils/repository";
import React, { useState, useEffect } from "react";
import { ScrollView, View } from "react-native";
import { Button } from "react-native-paper";

const VouchersEdit = () => {
  const [vouchers, setVouchers] = useState<Voucher[]>([]);
  const [selectedVoucher, setSelectedVoucher] = useState<Voucher | undefined>();
  const [isEditing, setIsEditing] = useState(false);

  const fetchVouchers = async () => {
    let newVouchers = await Repo.read(RepoKeys.vouchers);

    if (!newVouchers) {
      Repo.create(RepoKeys.vouchers, []);
      newVouchers = [];
    }

    if (newVouchers.length !== vouchers.length) setVouchers(newVouchers);
  };

  const createEditVoucher = async (voucher: Voucher) => {
    const existingVouchers = await Repo.read(RepoKeys.vouchers);
    const newVouchers = existingVouchers.filter(
      (v: Voucher) => v.code !== voucher.code
    );
    newVouchers.push(voucher);
    setVouchers(newVouchers);
    Repo.update(RepoKeys.vouchers, newVouchers);
  };

  const deleteVoucher = (code: string) => {
    const newVouchers = vouchers.filter((v) => v.code !== code);
    setVouchers(newVouchers);
    Repo.update(RepoKeys.vouchers, newVouchers);
  };

  const handleVoucherClick = (voucher: Voucher) => {
    setIsEditing(true);
    setSelectedVoucher(voucher);
  };

  const handleDeleteVoucher = (code: string) => {
    deleteVoucher(code);
  };

  const handleNewVoucherBtn = () => {
    setIsEditing(true);
  };

  const handleSaveVoucher = (voucher: Voucher) => {
    createEditVoucher(voucher);
    setIsEditing(false);
    setSelectedVoucher(undefined);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setSelectedVoucher(undefined);
  };

  useEffect(() => {
    fetchVouchers();
  }, []);

  return (
    <ThemedView>
      {vouchers.length > 0 ? (
        <ScrollView>
          {vouchers.map((voucher) => (
            <VoucherItem
              key={voucher.code}
              voucher={voucher}
              onEdit={handleVoucherClick}
              onDelete={handleDeleteVoucher}
            />
          ))}
        </ScrollView>
      ) : (
        <ThemedText>No vouchers found</ThemedText>
      )}
      {isEditing ? (
        <VoucherForm
          voucher={selectedVoucher}
          onSave={handleSaveVoucher}
          onCancel={handleCancelEdit}
        />
      ) : (
        <Button
          style={{ marginVertical: 10 }}
          mode="contained"
          onPress={handleNewVoucherBtn}
        >
          New Voucher
        </Button>
      )}
    </ThemedView>
  );
};

export default VouchersEdit;

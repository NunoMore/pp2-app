import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import QuickNavItem, { QuickNavItemProps } from "./QuickNavItem";

const QuickNav = ({ data }: { data: QuickNavItemProps[] }) => {
  return (
    <View>
      <FlatList
        data={data}
        horizontal
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={(item) => (
          <QuickNavItem
            key={item.index}
            title={item.item.title}
            onPress={item.item.onPress}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default QuickNav;

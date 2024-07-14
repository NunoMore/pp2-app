import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import QuickNavItem, { QuickNavItemProps } from "./QuickNavItem";

const QuickNav = ({ data }: { data: QuickNavItemProps[] }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal
        ItemSeparatorComponent={() => <View style={styles.separator} />}
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

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  separator: {
    width: 10,
  },
});

export default QuickNav;

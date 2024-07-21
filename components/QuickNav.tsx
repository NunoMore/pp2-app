import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";

interface QuickNavProps {
  data: {
    selected?: boolean;
    title: string;
    onPress: () => void;
  }[];
}

const QuickNav = ({ data }: QuickNavProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <Button
            key={index}
            mode={item.selected ? "contained" : "outlined"}
            onPress={item.onPress}
          >
            {item.title}
          </Button>
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

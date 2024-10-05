import DisplayCard, { DisplayCardProps } from "@/components/DisplayCard";
import QuickNav from "@/components/QuickNav";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { isMobile } from "@/utils/utils";
import { useState } from "react";
import {
  FlatList,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
} from "react-native";

export default function Home() {
  const [filters, setFilters] = useState<string[]>([]);

  const data: DisplayCardProps[] = [
    {
      title: "my title",
      subtitle: "subtitle",
      imageUrl: "https://picsum.photos/700",
    },
    {
      title: "my title",
      subtitle: "subtitle",
      imageUrl: "https://picsum.photos/700",
    },
    {
      title: "my title",
      subtitle: "subtitle",
      imageUrl: "https://picsum.photos/700",
    },
    {
      title: "my title",
      subtitle: "subtitle",
      imageUrl: "https://picsum.photos/700",
    },
    {
      title: "my title",
      subtitle: "subtitle 2",
      imageUrl: "https://picsum.photos/700",
    },
  ];

  const changeFilters = (newFilter: string) => {
    let newFilters = [...filters];
    if (filters.includes(newFilter)) {
      const index = filters.indexOf(newFilter);
      if (index > -1) {
        newFilters.splice(index, 1);
        setFilters(newFilters);
      }
    } else {
      newFilters = [...filters, newFilter];
      setFilters([...filters, newFilter]);
    }
  };

  const categories = ["Restaurantes", "Bares", "Hoteles", "Eventos", "Juega"];
  const quickNavItems = [
    {
      selected: filters.includes("Bares"),
      title: "Bares and stuff",
      onPress: () => changeFilters("Bares"),
    },
    {
      selected: filters.includes("Hoteles"),
      title: "Hoteles",
      onPress: () => changeFilters("Hoteles"),
    },
    {
      selected: filters.includes("Restaurantes"),
      title: "Restaurantes",
      onPress: () => changeFilters("Restaurantes"),
    },
    {
      selected: filters.includes("Eventos"),
      title: "Eventos",
      onPress: () => changeFilters("Eventos"),
    },
    {
      selected: filters.includes("Juega"),
      title: "Juega",
      onPress: () => changeFilters("Juega"),
    },
  ];

  const sectionTitle = (text: string) => (
    <ThemedText
      style={{
        display:
          filters.length > 0 && !filters.includes(text) ? "none" : undefined,
      }}
    >
      {text}
    </ThemedText>
  );

  const sectionFlatList = (text: string) => (
    <FlatList
      data={data}
      style={{
        display:
          filters.length > 0 && !filters.includes(text) ? "none" : undefined,
      }}
      renderItem={({ item: { title, subtitle, imageUrl } }) => (
        <DisplayCard title={title} imageUrl={imageUrl} subtitle={subtitle} />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );

  return (
    <ImageBackground
      source={require("@/assets/images/bkg.jpg")}
      style={styles.background}
    >
      <ThemedView
        style={{
          paddingTop: isMobile() ? "10%" : 0,
        }}
      >
        <QuickNav data={quickNavItems} />
        <ScrollView showsVerticalScrollIndicator={false}>
          {sectionTitle(categories[0])}
          {sectionFlatList(categories[0])}
          {sectionTitle(categories[1])}
          {sectionFlatList(categories[1])}
          {sectionTitle(categories[2])}
          {sectionFlatList(categories[2])}
          {sectionTitle(categories[3])}
          {sectionFlatList(categories[3])}
          {sectionTitle(categories[4])}
          {sectionFlatList(categories[4])}
        </ScrollView>
      </ThemedView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    height: "100%",
  },
});

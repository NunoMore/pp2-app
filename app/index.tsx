import DisplayCard, { DisplayCardProps } from "@/components/DisplayCard";
import QuickNav from "@/components/QuickNav";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useState } from "react";
import {
  FlatList,
  ImageBackground,
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
        console.log("removed", newFilters);
      }
    } else {
      newFilters = [...filters, newFilter];
      console.log("added", newFilters);
      setFilters([...filters, newFilter]);
    }
  };

  const categories = ["Restaurantes", "Bares", "Hoteles", "Eventos", "Juega"];
  const quickNavItems = [
    {
      selected: filters.includes("Bares"),
      title: "Bares",
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
      source={require("@/assets/images/bkg.avif")}
      style={styles.background}
    >
      <ThemedView>
        <QuickNav data={quickNavItems} />
        <ScrollView showsVerticalScrollIndicator={false}>
          {sectionTitle(categories[0])}
          {sectionFlatList(categories[0])}
          {sectionTitle(categories[1])}
          {sectionFlatList(categories[1])}
          {sectionTitle(categories[2])}
          {sectionFlatList(categories[2])}
        </ScrollView>
      </ThemedView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});

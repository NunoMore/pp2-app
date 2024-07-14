import DisplayCard, { DisplayCardProps } from "@/components/DisplayCard";
import QuickNav from "@/components/QuickNav/QuickNav";
import { QuickNavItemProps } from "@/components/QuickNav/QuickNavItem";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { sendAlert } from "@/utils/utils";
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

  const changeFilters = (filter: string) => {
    if (filters.includes(filter)) {
      const index = filters.indexOf(filter);
      if (index > -1) {
        setFilters([...filters].splice(index, 1));
      }
    } else {
    }
  };

  const quickNavItems: QuickNavItemProps[] = [
    {
      title: "Bares",
      onPress: () => changeFilters("Bares"),
    },
    {
      title: "Hoteles",
      onPress: () => sendAlert("Hoteles", "Hoteles"),
    },
    {
      title: "Restaurantes",
      onPress: () => sendAlert("Restaurantes", "Restaurantes"),
    },
    {
      title: "Eventos",
      onPress: () => sendAlert("Eventos", "Eventos"),
    },
    {
      title: "Juega",
      onPress: () => sendAlert("Juega", "Juega"),
    },
  ];
  return (
    <ImageBackground
      source={require("@/assets/images/bkg.avif")}
      style={styles.background}
    >
      <ThemedView>
        <QuickNav data={quickNavItems} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <FlatList
            data={data}
            renderItem={({ item: { title, subtitle, imageUrl } }) => (
              <DisplayCard
                title={title}
                imageUrl={imageUrl}
                subtitle={subtitle}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
          <ThemedText>another one</ThemedText>
          <FlatList
            data={data}
            renderItem={({ item: { title, subtitle, imageUrl } }) => (
              <DisplayCard
                title={title}
                imageUrl={imageUrl}
                subtitle={subtitle}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
          <FlatList
            data={data}
            renderItem={({ item: { title, subtitle, imageUrl } }) => (
              <DisplayCard
                title={title}
                imageUrl={imageUrl}
                subtitle={subtitle}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
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

import DisplayCard, { DisplayCardProps } from "@/components/DisplayCard";
import { ThemedText } from "@/components/ThemedText";
import { FlatList, ScrollView, StyleSheet } from "react-native";

export default function Home() {
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

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item: { title, subtitle, imageUrl } }) => (
          <DisplayCard title={title} imageUrl={imageUrl} subtitle={subtitle} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <ThemedText>another one</ThemedText>
      <FlatList
        data={data}
        renderItem={({ item: { title, subtitle, imageUrl } }) => (
          <DisplayCard title={title} imageUrl={imageUrl} subtitle={subtitle} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <FlatList
        data={data}
        renderItem={({ item: { title, subtitle, imageUrl } }) => (
          <DisplayCard title={title} imageUrl={imageUrl} subtitle={subtitle} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 20,
  },
});

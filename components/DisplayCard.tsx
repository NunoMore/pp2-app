import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { Button, Card } from "react-native-paper";

export interface DisplayCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}

const DisplayCard = ({ title, subtitle, imageUrl }: DisplayCardProps) => {
  return (
    <Card mode="elevated" style={styles.card}>
      <Card.Cover style={styles.image} source={{ uri: imageUrl }} />
      <Card.Title
        style={styles.title}
        titleVariant="titleLarge"
        subtitleVariant="bodyMedium"
        title={title}
        subtitle={subtitle}
      />
      {/* <Card.Actions>
        <Button>View</Button>
      </Card.Actions> */}
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginRight: 10,
    marginVertical: 10,
  },
  title: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: "grey",
    width: "100%",
    position: "absolute",
  },
  image: {
    minWidth: 150,
  },
});

export default DisplayCard;

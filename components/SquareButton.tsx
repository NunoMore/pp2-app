import { StyleSheet } from "react-native";
import { Button, Card } from "react-native-paper";

interface SquareButtonProps {
  text: string;
  onPress: () => void;
}

const SquareButton = ({ text: title, onPress }: SquareButtonProps) => {
  return (
    <Button
      style={styles.buttonContainer}
      contentStyle={styles.buttonContent}
      mode="outlined"
      onPress={onPress}
    >
      {title}
    </Button>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 10,
  },
  buttonContent: {
    padding: "auto",
    height: 150,
    width: 150,
  },
});

export default SquareButton;

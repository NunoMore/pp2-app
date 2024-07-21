import { StyleSheet } from "react-native";
import { Button, Card } from "react-native-paper";

interface SquareButtonProps {
  text: string;
  onPress: () => void;
}

const SquareButton = ({ text: title, onPress }: SquareButtonProps) => {
  return (
    // <Card>
    //   <Card.Title title={title} />
    //   <Card.Actions>
    <Button style={styles.button} mode="outlined" onPress={onPress}>
      {title}
    </Button>
    //   </Card.Actions>
    // </Card>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 10,
    padding:"auto",
    height: 150,
    width: 150,
  },
});

export default SquareButton;

import { StyleSheet, View } from "react-native";
import {
  BarChart,
  barDataItem,
  PieChart,
  pieDataItem,
} from "react-native-gifted-charts";
import { ThemedText } from "./ThemedText";
import { Colors } from "@/constants/Colors";

interface BasicChartProps {
  title: string;
}

interface PieChartProps extends BasicChartProps {
  type: "pie";
  pieData: pieDataItem[];
  barData?: barDataItem[];
}
interface BarChartProps extends BasicChartProps {
  type: "bar";
  pieData?: pieDataItem[];
  barData: barDataItem[];
}

const CustomChart = ({
  barData,
  pieData,
  type,
  title,
}: PieChartProps | BarChartProps) => {
  const chart = () => {
    switch (type) {
      case "bar":
        return (
          <BarChart
            showFractionalValues
            showYAxisIndices
            showXAxisIndices
            hideRules
            showVerticalLines
            verticalLinesColor={"white"}
            overflowTop={10}
            noOfSections={5}
            data={barData}
            showGradient
            frontColor={"#1B6BB0"}
            gradientColor={"#FFEEFE"}
          />
        );

      default:
        return <PieChart data={pieData} showGradient />;
    }
  };
  return (
    <View>
      <ThemedText style={styles.title}>{title}</ThemedText>
      <View style={styles.container}>{chart()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    margin: 5,
  },
  title: {
    // color: Colors.lightTheme.colors.text,
  },
});

export default CustomChart;

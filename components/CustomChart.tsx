import { StyleSheet, View } from "react-native";
import {
  BarChart,
  barDataItem,
  LineChart,
  PieChart,
  pieDataItem,
  PopulationPyramid,
} from "react-native-gifted-charts";
import { Text } from "react-native-paper";

interface BasicChartProps {}

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
  return <View style={styles.container}>{chart()}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignSelf: "center",
    borderRadius: 10,
    padding: 10,
    margin: 5,
  },
});

export default CustomChart;

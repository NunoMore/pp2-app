import CustomChart from "@/components/CustomChart";
import { ThemedView } from "@/components/ThemedView";
import { ScrollView, StyleSheet } from "react-native";
import { barDataItem } from "react-native-gifted-charts";

function ProfileStatistics() {
  const chartData: barDataItem[] = [
    { value: 700, label: "JAN" },
    { value: 800, label: "FEB" },
    { value: 600, label: "MAR" },
    { value: 452, label: "APR" },
    { value: 923, label: "MAY" },
    { value: 234, label: "JUN" },
    { value: 923, label: "JUL" },
    { value: 239, label: "AGO" },
    { value: 123, label: "SEP" },
    { value: 823, label: "OCT" },
    { value: 324, label: "NOV" },
    { value: 123, label: "DEC" },
  ];

  return (
    <ThemedView>
      <ScrollView
        contentContainerStyle={styles.graphs}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <CustomChart title="Clicks" type="pie" pieData={chartData} />
        <CustomChart title="Views" type="bar" barData={chartData} />
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  graphs: {
    // alignContent: "center",
    alignItems: "center",
  },
});

export default ProfileStatistics;

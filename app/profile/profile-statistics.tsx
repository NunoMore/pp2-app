import CustomChart from "@/components/CustomChart";
import { ThemedView } from "@/components/ThemedView";
import { ScrollView } from "react-native";
import { barDataItem } from "react-native-gifted-charts";

function ProfileStatistics() {
  const chartData: barDataItem[] = [
    { value: 0.7, label: "1" },
    { value: 0.8, label: "2" },
    { value: 0.6, label: "3" },
    { value: 0.4, label: "4" },
    { value: 0.9, label: "5" },
    { value: 0.7, label: "6" },
  ];

  return (
    <ThemedView>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <CustomChart type="pie" pieData={chartData} />
        <CustomChart type="bar" barData={chartData} />
      </ScrollView>
    </ThemedView>
  );
}

export default ProfileStatistics;

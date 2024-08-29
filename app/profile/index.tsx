import { TabScreen, Tabs, TabsProvider } from "react-native-paper-tabs";
import ProfileDetails from "./profile-details";
import { Text } from "react-native-paper";
import ProfileStatistics from "./profile-statistics";
import ProfileVouchers from "./profile-vouchers";
import { LinearGradient } from "expo-linear-gradient";


function Profile() {
  return (
    <TabsProvider defaultIndex={0}>
      <Tabs>
        <TabScreen label="Details">
          <ProfileDetails />
        </TabScreen>
        <TabScreen label="Statistics">
          <></>
          {/* <ProfileStatistics /> */}
        </TabScreen>
        <TabScreen label="Marketing">
          <Text>Marketing</Text>
        </TabScreen>
        <TabScreen label="My Vouchers">
          <ProfileVouchers />
        </TabScreen>
      </Tabs>
    </TabsProvider>
  );
}

export default Profile;

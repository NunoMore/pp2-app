import { TabScreen, Tabs, TabsProvider } from "react-native-paper-tabs";
import ProfileDetails from "./profile-details";
import { Text } from "react-native-paper";

function Profile() {
  return (
    <TabsProvider defaultIndex={0}>
      <Tabs>
        <TabScreen label="Details">
          <ProfileDetails />
        </TabScreen>
        <TabScreen label="Statistics">
            <Text>Statistics</Text>
        </TabScreen>
        <TabScreen label="Marketing">
            <Text>Marketing</Text>
        </TabScreen>
        <TabScreen label="My Vouchers">
            <Text>My vouchers</Text>
        </TabScreen>
      </Tabs>
    </TabsProvider>
  );
}

export default Profile;

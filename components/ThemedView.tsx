import { ScrollView, View, type ViewProps } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[
        { backgroundColor, paddingHorizontal: 40, paddingVertical: 40 },
        style,
      ]}
      {...otherProps}
    />
  );
}

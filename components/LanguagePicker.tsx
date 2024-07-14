import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Menu } from "react-native-paper";
import { ThemedText } from "./ThemedText";

interface Language {
  code: string;
  label: string;
}

const languages: Language[] = [
  { code: "en", label: "English" },
  { code: "es", label: "Spanish" },
  { code: "fr", label: "French" },
  { code: "de", label: "German" },
  // ... Add more languages as needed
];

const LanguagePicker = () => {
  const [visible, setVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en"); // Default to English

  const handlePress = () => setVisible(!visible);

  const handleSelectLanguage = (languageCode: string) => {
    if (languageCode !== selectedLanguage) {
      setSelectedLanguage(languageCode);
    }
  };

  const getSelectedLanguageText = () => {
    return (
      languages.find((lang) => lang.code === selectedLanguage)?.code ||
      selectedLanguage
    );
  };
  return (
    <View>
      <Menu
        anchorPosition="bottom"
        visible={visible}
        onDismiss={handlePress}
        style={styles.menu}
        anchor={
          <TouchableOpacity onPress={handlePress} style={styles.button}>
            <ThemedText>{getSelectedLanguageText()}</ThemedText>
          </TouchableOpacity>
        }
      >
        {languages.map((language) => (
          <Menu.Item
            key={language.code}
            title={language.code}
            trailingIcon={
              selectedLanguage.includes(language.code) ? "check" : ""
            }
            onPress={() => handleSelectLanguage(language.code)}
          />
        ))}
      </Menu>
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    marginVertical: 10,
  },
  button: {
    flex: 1,
    paddingLeft: 5,
    borderRadius: 10,
    minWidth: 30,
  },
  text: {
    fontSize: 16,
  },
});

export default LanguagePicker;

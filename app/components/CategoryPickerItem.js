import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "./AppText";
import Icon from "./Icon";

function CategoryPickerItem({ item, onPress }) {
  const { icon, label, backgroundColor } = item;

  return (
    <View style={styles.container}>
      <Icon backgroundColor={backgroundColor} name={icon} />
      <AppText style={styles.label}>{label}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});

export default CategoryPickerItem;

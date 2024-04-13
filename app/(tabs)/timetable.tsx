import { StyleSheet } from "react-native";

import { useState } from "react";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";

import Schedule from "@/components/Schedule";

export default function TimetableScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Votre Emploi du Temps</Text>
      <Schedule />
      <EditScreenInfo path="app/(tabs)/timetable.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

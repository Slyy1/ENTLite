import { StyleSheet, Button, Linking, ImageBackground, TouchableOpacity } from "react-native";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import React from "react";

export default function TabOneScreen() {
  const handleButtonPress = (url:string) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Les Rus</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleButtonPress("https://www.crous-rennes.fr/restaurant/resto-u-letoile-3/")}
      >
        <ImageBackground
          source={{ uri: "https://ephoto.lescrous.fr/link/kmr19jgwam61k00.jpeg"}}
          style={styles.buttonImage}
        />
        <Text style={styles.buttonText}>RU de l'Etoilee</Text>
      </TouchableOpacity>
      <EditScreenInfo path="app/(tabs)/ru.tsx" />
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
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 10,
    overflow: 'hidden',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  buttonImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
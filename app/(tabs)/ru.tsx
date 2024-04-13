import { StyleSheet, Button, Linking, ImageBackground, TouchableOpacity } from "react-native";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { useNavigation } from '@react-navigation/native';
import React from 'react';

export default function RuScreen() {
  const navigation = useNavigation();

  const handleNavigateToEtoile = () => {
    navigation.navigate('etoile');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Restaurants Universitaires</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <TouchableOpacity onPress={handleNavigateToEtoile} style={styles.button}>
        <ImageBackground
          source={{ uri: "https://ephoto.lescrous.fr/link/kmr19jgwam61k00.jpeg"}}
          style={styles.buttonImage}
        />
        <Text style={styles.buttonText}>RU de l'Etoilee</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={handleNavigateToEtoile} style={styles.button}>
            <Text style={styles.buttonText}>Autre Page</Text>
          </TouchableOpacity>
      
      <EditScreenInfo path="app/(tabs)/ru.tsx" />
      <View style={styles.menuColumn}>
      <Text style={styles.menuTitle}>Menu du jour</Text>
      <Text>{'Entrée :'}</Text>
      <Text>{'- Salade de tomates et mozzarella'}</Text>
      <Text>{''}</Text>
      <Text>{'Plat principal :'}</Text>
      <Text>{'- Poulet rôti aux herbes'}</Text>
      <Text>{'Pommes de terre rissolées'}</Text>
      <Text>{'- Légumes sautés'}</Text>    
      <Text>{''}</Text>
      <Text>{'Dessert :'}</Text>
      <Text>{'- Tarte aux pommes'}</Text>


</View>
    <View style={styles.menuColumn}>
      <Text style={styles.menuTitle}>Menu du lendemain</Text>
      <Text>{'Entrée :'}</Text>
      <Text>{'- Velouté de potiron'}</Text>
      <Text>{''}</Text>
      <Text>{'Plat principal :'}</Text>
      <Text>{'- Filet de saumon grillé'}</Text>
      <Text>{'- Riz pilaf'}</Text>
      <Text>{'- Poêlée de légumes frais'}</Text>    
      <Text>{''}</Text>
      <Text>{'Dessert :'}</Text>
      <Text>{'- Crème brûlée'}</Text>    
      </View>
     </View>
  );
}

const styles = StyleSheet.create({

  menuColumn: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
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
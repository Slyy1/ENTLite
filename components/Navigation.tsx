// Navigation.js

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importez les écrans que vous souhaitez naviguer
import RuScreen from '../app/(tabs)/ru';
import AutrePageScreen from '../app/etoile';

// Créez une pile de navigation
const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TabOne" component={RuScreen} />
        <Stack.Screen name="AutrePage" component={AutrePageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

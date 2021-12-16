import React from 'react';
import BonPratique from '../screens/bonpratique';
import Eau from '../bonpratiques_screens/Eau';
import ProdV from '../bonpratiques_screens/ProdV';
import ProtC from '../bonpratiques_screens/ProtC';
import ProdA from '../bonpratiques_screens/ProdA';
import SanA from '../bonpratiques_screens/SanA';
import BienA from '../bonpratiques_screens/BienA';
import Recolte from '../bonpratiques_screens/Recolte';
import GestE from '../bonpratiques_screens/GestE';
import BienH from '../bonpratiques_screens/BienH';
import FaunS from '../bonpratiques_screens/FaunS';
import Sol from '../bonpratiques_screens/Sol';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function BonPratiquestack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Bonnes pratiques" headerMode="none">
        <Stack.Screen name="Bonnes pratiques" component={BonPratique} />
        <Stack.Screen name="Sol" component={Sol} />
        <Stack.Screen name="Eau" component={Eau} />
        <Stack.Screen
          name="Production Végétale et Fourragère"
          component={ProdV}
        />
        <Stack.Screen name="Protection des Cultures" component={ProtC} />
        <Stack.Screen name="Production Animale" component={ProdA} />
        <Stack.Screen name="Santé Animale" component={SanA} />
        <Stack.Screen name="Bien-être des Animaux" component={BienA} />
        <Stack.Screen name="Récolte et Entreposage" component={Recolte} />
        <Stack.Screen
          name="Gestion de l’énergie et des déchets"
          component={GestE}
        />
        <Stack.Screen name="Bien-être des Humains" component={BienH} />
        <Stack.Screen name="Faune Sauvage et Paysage" component={FaunS} />
   
      </Stack.Navigator>
    </NavigationContainer>
  );
}

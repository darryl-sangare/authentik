import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View><Text>Accueil</Text></View>
  );
}

function CartScreen() {
  return (
    <View><Text>Panier</Text></View>
  );
}

function ProfileScreen() {
  return (
    <View><Text>Profil</Text></View>
  );
}

export default function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Accueil" component={HomeScreen} />
      <Tab.Screen name="Panier" component={CartScreen} />
      <Tab.Screen name="Profil" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

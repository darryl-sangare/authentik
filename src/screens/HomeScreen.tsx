import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

const brands = [
  { name: "Amazon", url: "https://www.amazon.fr/" },
  { name: "Zalando", url: "https://www.zalando.fr/" },
  { name: "Shein", url: "https://fr.shein.com/" },
  { name: "Asos", url: "https://www.asos.com/" },
  { name: "H&M", url: "https://www2.hm.com/fr_fr/index.html" },
  { name: "Pull and Bear", url: "https://www.pullandbear.com/fr/" },
];

// On utilise la route WebViewScreen du stack
type WebViewNavProp = NativeStackNavigationProp<RootStackParamList, 'WebViewScreen'>;

export default function HomeScreen() {
  const navigation = useNavigation<WebViewNavProp>();

  return (
    <ScrollView className="flex-1 bg-white px-4 py-6">
      <Text className="text-2xl font-bold text-center mb-6">Authentik Express</Text>
      <View className="flex-row flex-wrap justify-between">
        {brands.map((brand, index) => (
          <TouchableOpacity
            key={index}
            className="bg-gray-100 rounded-xl w-[48%] h-32 mb-4 justify-center items-center"
            onPress={() => navigation.navigate('WebViewScreen', {
              url: brand.url,
              title: brand.name
            })}
          >
            <Text className="text-lg font-bold">{brand.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

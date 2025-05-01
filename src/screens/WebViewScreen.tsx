import { View, ActivityIndicator, TouchableOpacity, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import { useRoute } from '@react-navigation/native';
import { useCart } from '../context/CartContext';

export default function WebViewScreen() {
  const route = useRoute();
  const { url, title } = route.params as { url: string; title: string };

  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart({
      id: Date.now().toString(),
      title,
      url,
      price: 50, // Exemple temporaire
    });
  };

  return (
    <>
      <WebView
        source={{ uri: url }}
        startInLoadingState
        renderLoading={() => (
          <View className="flex-1 justify-center items-center bg-white">
            <ActivityIndicator size="large" />
          </View>
        )}
      />
      <TouchableOpacity
        className="absolute bottom-6 left-6 right-6 bg-black py-4 rounded-xl items-center"
        onPress={handleAdd}
      >
        <Text className="text-white font-bold text-lg">Ajouter au panier</Text>
      </TouchableOpacity>
    </>
  );
}

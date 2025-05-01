import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useCart } from '../context/CartContext';

export default function CartScreen() {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <View className="flex-1 p-4 bg-white">
      <Text className="text-2xl font-bold mb-4">Panier</Text>
      <FlatList
        data={cart}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View className="mb-4 border-b pb-2">
            <Text className="text-lg font-semibold">{item.title}</Text>
            <Text className="text-gray-600">{item.price} €</Text>
            <TouchableOpacity
              className="mt-2"
              onPress={() => removeFromCart(item.id)}
            >
              <Text className="text-red-500">Supprimer</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={
          <Text className="text-center text-gray-500">Votre panier est vide.</Text>
        }
      />
      {cart.length > 0 && (
        <TouchableOpacity
          className="mt-6 bg-black py-3 rounded-xl items-center"
          onPress={clearCart}
        >
          <Text className="text-white font-bold">Vider le panier</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

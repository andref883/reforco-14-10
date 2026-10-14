import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const produtos = [
  { nome: 'Iphone 13pro', preco: 'R$ 2.899,00' },
  { nome: 'Notebook bom', preco: 'R$ 3.299,00' },
  { nome: 'Fones Bluetooth', preco: 'R$ 499,00' },
];

export default function ProductScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Produtos</Text>

      {produtos.map((produto) => (
        <View key={produto.nome} style={styles.card}>
          <Text style={styles.productName}>{produto.nome}</Text>
          <Text style={styles.productPrice}>{produto.preco}</Text>
        </View>
      ))}

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Voltar para Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eef2ff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1f2937',
  },
  card: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 12,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  productName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 6,
    color: '#111827',
  },
  productPrice: {
    fontSize: 16,
    color: '#4f46e5',
    fontWeight: '700',
  },
  button: {
    marginTop: 18,
    backgroundColor: '#4f46e5',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

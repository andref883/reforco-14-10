import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

export default function ContactScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contato</Text>

      <Text style={styles.label}>E-mail:</Text>
      <Text style={styles.text}>contato@lojaexemplo.com</Text>

      <Text style={styles.label}>Telefone:</Text>
      <Text style={styles.text}>(11) 99999-1234</Text>

      <Text style={styles.label}>Endereço:</Text>
      <Text style={styles.text}>Rua das Flores, 123 - São Paulo/SP</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => Linking.openURL('mailto:contato@lojaexemplo.com')}
      >
        <Text style={styles.buttonText}>Enviar e-mail</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f0fdf4',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  text: {
    fontSize: 17,
    marginTop: 4,
  },
  button: {
    backgroundColor: '#10b981',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

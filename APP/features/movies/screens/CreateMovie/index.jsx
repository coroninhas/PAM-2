import React from "react";
import { ScrollView, View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function CreateMovie() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Cadastrar Filme</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Título do filme</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o título"
          placeholderTextColor="#9ca3af"
        />

        <Text style={styles.label}>Ano de lançamento</Text>
        <TextInput
          style={styles.input}
          placeholder="2024"
          keyboardType="numeric"
          placeholderTextColor="#9ca3af"
        />

        <Text style={styles.label}>Sinopse</Text>
        <TextInput
          style={[styles.input, { minHeight: 100, textAlignVertical: "top" }]}
          multiline
          placeholder="Escreva a sinopse"
          placeholderTextColor="#9ca3af"
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Salvar filme</Text>
        </TouchableOpacity>

        <Text style={styles.hint}>
          Esta tela está estilizada para web e mobile. Conecte os campos ao backend quando quiser salvar o filme.
        </Text>
      </View>
    </ScrollView>
  );
}

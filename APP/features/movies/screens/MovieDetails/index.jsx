import React from "react";
import { ScrollView, View, Text } from "react-native";
import styles from "./styles";

export default function MovieDetails() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Detalhes do Filme</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Título</Text>
        <Text style={styles.value}>Título do Filme</Text>

        <Text style={styles.label}>Ano</Text>
        <Text style={styles.value}>2024</Text>

        <Text style={styles.label}>Sinopse</Text>
        <Text style={styles.description}>
          Um resumo curto do filme aparece aqui. Utilize a descrição real do
          filme para exibir mais informações ao usuário.
        </Text>
      </View>
    </ScrollView>
  );
}
import React from "react";
import { ScrollView, View, Text, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import styles from "./styles";

export default function MovieDetails() {
  const route = useRoute();
  const movie = route.params?.movie || {};
  const poster = movie.img_capa;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Detalhes do Filme</Text>

      <View style={styles.card}>
        {poster ? (
          <Image source={{ uri: poster }} style={styles.poster} />
        ) : null}

        <Text style={styles.label}>Título</Text>
        <Text style={styles.value}>{movie.nome || "Título do Filme"}</Text>

        <Text style={styles.label}>Ano</Text>
        <Text style={styles.value}>{movie.ano || "Ano desconhecido"}</Text>

        <Text style={styles.label}>Sinopse</Text>
        <Text style={styles.description}>
          {movie.sinopse || movie.descricao || "Descrição não disponível."}
        </Text>
      </View>
    </ScrollView>
  );
}
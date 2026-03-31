import React from "react";
import { ScrollView, View, Text, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import styles from "./styles";

const PLACEHOLDER_IMAGE = "https://via.placeholder.com/640x360?text=Sem+Imagem";

export default function MovieDetails() {
  const route = useRoute();
  const movie = route.params?.movie || {};
  const poster = movie.img_capa || PLACEHOLDER_IMAGE;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Detalhes do Filme</Text>

      <View style={styles.card}>
        <Image source={{ uri: poster }} style={styles.poster} />

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
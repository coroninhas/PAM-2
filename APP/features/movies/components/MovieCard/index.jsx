import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

const PLACEHOLDER_IMAGE = "https://via.placeholder.com/400x280?text=Sem+Imagem";

export default function MovieCard({ movie, onPress, width }) {
  const poster = movie?.img_capa;

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={[styles.container, width ? { width } : { width: "100%" }]}>        
        <Image
          source={poster ? { uri: poster } : { uri: PLACEHOLDER_IMAGE }}
          style={styles.image}
        />
        <Text style={styles.title}>
          {movie?.nome || "Título do Filme"}
        </Text>
        <Text style={styles.year}>
          {movie?.ano || "Ano desconhecido"}
        </Text>

      </View>
    </TouchableOpacity>
  );
}

/*
O componente MovieCard é responsável por exibir as informações de um filme específico, como a imagem de capa, o nome e o ano de lançamento. 
Ele recebe as informações do filme através da prop movie e uma função onPress para lidar com o toque na tela. 
Quando o usuário toca no card, a função onPress é chamada, permitindo que a tela MovieList possa navegar para a tela de detalhes do filme ou realizar qualquer outra ação necessária.
*/
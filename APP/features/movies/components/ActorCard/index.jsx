import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

const PLACEHOLDER_IMAGE = "https://via.placeholder.com/400x280?text=Sem+Imagem";

export default function ActorCard({ actor = {}, onPress, width }) {
  const actorName = actor.name || actor.nome || "Ator";
  const actorRole = actor.role || actor.cargo || actor.personagem || "Personagem";
  const actorImage = actor.photo || actor.foto || actor.avatar || actor.img || actor.img_capa;

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={[styles.container, width ? { width } : { width: "100%" }]}>        
        <Image
          source={actorImage ? { uri: actorImage } : { uri: PLACEHOLDER_IMAGE }}
          style={styles.image}
        />
        <Text style={styles.name}>{actorName}</Text>
        <Text style={styles.role}>{actorRole}</Text>
      </View>
    </TouchableOpacity>
  );
}
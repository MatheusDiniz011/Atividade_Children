import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "../../styles/estilo";

function EntrarComponent() {
  return (
    <View style={styles.Buttons}>
      <TouchableOpacity onPress={() => console.log("Sing In Alert")}>
        <Text>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

export default EntrarComponent;

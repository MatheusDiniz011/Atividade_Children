import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "../../styles/estilo";

function LogInComponent() {
  return (
    <View style={styles.Buttons}>
      <TouchableOpacity onPress={() => console.log("Log In Alert")}>
        <Text>Faça Login</Text>
      </TouchableOpacity>
    </View>
  );
}

export default LogInComponent;

import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import styles from "../../styles/estilo";

function LuaComponent() {
  return (
    <View style={styles.Buttons}>
      <TouchableOpacity onPress={() => console.log("Buy Alert")}>
        <Image style={styles.image} source={require("../../Images/lua.png")} />
      </TouchableOpacity>
    </View>
  );
}

export default LuaComponent;

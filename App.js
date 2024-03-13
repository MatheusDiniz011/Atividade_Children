import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TxtComponent from "./src/components/TxtComponent";

export default function App() {
  return (
    <View style={styles.container}>
      <TxtComponent>
        <br />
        <Text>Número 1</Text>
        <br />
        <Text>Número 2</Text>
        <br />
        <Text>Número 3</Text>
      </TxtComponent>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

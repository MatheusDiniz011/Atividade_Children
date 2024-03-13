import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TxtComponent from "./src/components/TextoComponent";
import HeaderComponent from "./src/components/HeaderComponent";
import BuyComponent from "./src/components/header/MacacoComponent";
import LogInComponent from "./src/components/header/LogInComponent";
import SingInComponent from "./src/components/header/EntrarComponent";

export default function App() {
  return (
    <View style={styles.container}>
      <HeaderComponent>
        {/* Childrens  */}
        <LogInComponent />
        <SingInComponent />
        <BuyComponent />
      </HeaderComponent>

      <TxtComponent>
        {/* Childrens */}
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

import { Text, StyleSheet } from "react-native";

const TxtComponent = ({ children }) => {
  return (
    <Text>
      {" "}
      It's a parade inside my city, yeah
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  bckimg: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TxtComponent;

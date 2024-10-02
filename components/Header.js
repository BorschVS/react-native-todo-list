import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>TO DO LIST</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#2299ff",
  },
  text: {
    textAlign: 'center',
    fontSize: 32,
    color: "white",
  },
});

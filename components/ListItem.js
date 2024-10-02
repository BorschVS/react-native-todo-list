import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function ListItem({ item, deleteHandler }) {
  return (
    <TouchableOpacity onPress={() => deleteHandler(item.key)}>
      <Text style={styles.text}>○ {item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    padding: 10,
    paddingBottom: 2,
    borderBottomWidth: 1,
    borderBottomColor: "#2299ff",
    backgroundColor: "",
  },
});

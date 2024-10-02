import { useState } from "react";
import { StyleSheet, Text, TextInput, Button, View } from "react-native";

export default function Form({ addHandler }) {
  const [inputValue, setInputValue] = useState("");

  const onChange = (text) => {
    setInputValue(text);
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          value={inputValue}
          onChangeText={onChange}
          placeholder="write what you are going to do"
        />
        <Button
          title="Add ToDo"
          style={styles.button}
          onPress={() => addHandler(inputValue)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#2299ff",
    borderRadius: 4,
    marginVertical: 10,
    paddingVertical: 4,
    paddingHorizontal: 10,
    fontSize: 18,
  },
});

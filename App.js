import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ListItem from "./components/ListItem";
import Form from "./components/Form";

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    { text: "Buy milk", key: 1 },
    { text: "Train English", key: 2 },
    { text: "Wash my Car", key: 3 },
  ]);

  const addHandler = (text) => {
    if (text.trim().length) {
      setListOfItems((list) => {
        return [
          ...list,
          { text: text, key: Math.random().toString(36).substring(7) },
        ];
      });
    }
  };

  const deleteHandler = (key) => {
    setListOfItems((item) => {
      return listOfItems.filter((item) => item.key !== key);
    });
  };

  return (
    <View>
      <View style={styles.wrapper}></View>
      <SafeAreaView style={styles.main}>
        <Header />
        <Form addHandler={addHandler} />
        <View>
          <FlatList
            data={listOfItems}
            renderItem={({ item }) => (
              <ListItem item={item} deleteHandler={deleteHandler} />
            )}
          />
        </View>
      </SafeAreaView>
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#2299ff",
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
  },
});

import React, { useState } from "react";
import { StyleSheet, TextInput, Button, FlatList, View,Text } from "react-native";
import Item from "./components/Item";
import ConfirmationModal from "./components/ConfirmationModal";
import { AntDesign } from '@expo/vector-icons';
export default function App() {
  const [items, setItems] = useState([
    { id: 1, name: "HP Pavilion" },
    { id: 2, name: "Dell Inspirion" },
  ]);
  const [newItem, setNewItem] = useState("");
  const [modal, setModal] = useState(false);

  const closeModal = () => {
    setModal(false);
  };

  const deleteAllItems = () => {
    setItems([]);
    closeModal();
  };

  const updateItem = (id, newName) => {
    var updatedItemsList = [];
    items.forEach((item) => {
      if (item.id === id) {
        item.name = newName;
      }
      updatedItemsList.push(item);
    });
    setItems(updatedItemsList);
  };

  const deleteItem = (id) => {
    var updatedItemsList = [];
    items.forEach((item) => {
      if (item.id === id) {
        return
      }
      updatedItemsList.push(item);
    });
    setItems(updatedItemsList);
  };

  return (
    <View style={styles.container}>

      <View style={styles.addingItemContainer}>
        <TextInput
          placeholder="Enter Product Name"
          style={styles.textInput}
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <Button
          title="Add Item"
          onPress={() => {
            setItems([...items, { id: items.length + 1, name: newItem }]);
            setNewItem("");
          }}
          disabled={newItem.length === 0}
        />
      </View>

      <View style={styles.shoppingCartTitle}>
      <AntDesign name="shoppingcart" size={24} color="black" />
        <Text style={{marginLeft: 20 }}>Shopping Cart</Text>
      </View>
      <View>
        <FlatList
          data={items}
          renderItem={(item) => <Item item={item} updateItem={updateItem} deleteItem={deleteItem} />}
        />
      </View>
      
      <View style={styles.deleAllButton}>
        <Button
          title="Delete All"
          onPress={() => setModal(true)}
          color="black"
        />
        {modal ? (
          <ConfirmationModal
            closeModal={closeModal}
            deleteAll={deleteAllItems}
          />
        ) : (
          ""
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  addingItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  textInput: {
    border: "black solid 2px",
    borderRadius: 10,
    paddingVertical: 5,
    paddingLeft: 20,
    width: "70%",
  },
  deleAllButton: {
    marginTop: 10,
  },
  shoppingCartTitle: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  }
});
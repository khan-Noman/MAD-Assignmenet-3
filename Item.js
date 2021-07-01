import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  TouchableHighlight,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { AntDesign } from "@expo/vector-icons";

export default function Item(props) {
  const [item, setItem] = useState(props.item.item.name);
  const [editing, setEditing] = useState(false);
  const DeleteItemButton = () => {
    return (
      <View>
        <TouchableHighlight
          onPress={() => {
            props.deleteItem(props.item.item.id);
          }}
        >
          <View style={styles.deleteIcon}>
            <AntDesign name="delete" color={"black"} size={16}/>
          </View>
        </TouchableHighlight>
      </View>
    );
  };
  return (
    <View style={styles.itemName}>
      {editing ? (
        <View style={styles.updatingItemContainer}>
          <TextInput
            style={styles.textInput}
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />

          <TouchableHighlight
            onPress={() => {
              props.updateItem(props.item.item.id, item);
              setEditing(false);
            }}
          >
            <View style={styles.checkIcon}>
              <Entypo name="check" size={24} color="#1e90ff" />
            </View>
          </TouchableHighlight>
        </View>
      ) : (
        <Swipeable
          renderLeftActions={DeleteItemButton}
          renderRightActions={DeleteItemButton}
        >
          <TouchableHighlight style={styles.touchEdit} onPress={() => setEditing(true)}>
            <View>{item}</View>
          </TouchableHighlight>
        </Swipeable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  itemName: {
    backgroundColor: "#a9a9a9",
    borderRadius: 20,
    marginVertical: 5,
    paddingVertical: 10,
    paddingLeft: 30,
  },
  textInput: {
    border: "lightgrey solid 1px",
    borderRadius: 10,
    paddingVertical: 5,
    paddingLeft: 20,
    width: "70%",
  },
  updatingItemContainer: {
    marginRight: 90,
    flexDirection: "row",
    alignContent: "center",
  },
  checkIcon: {
    marginTop: 3,
    marginLeft: 50,
  },
  deleteIcon: {
    paddingHorizontal: 30,
  },
  touchEdit: {
    width:100
  }
});
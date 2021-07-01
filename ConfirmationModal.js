import React, { Component } from "react";
import { Modal, StyleSheet, Text, Pressable, View } from "react-native";

class ConfirmationModal extends Component {
  render() {
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={true}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Are You Sure To Delete All Items ?</Text>
              <View style={styles.actionButton}>  
         
              <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => this.props.deleteAll()}
              >
                <Text style={styles.textStyle}>Sure !</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.props.closeModal()}
              >
                <Text style={styles.textStyle}>No !</Text>
              </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "#d3d3d3",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "green",
    marginHorizontal: 10
  },
  buttonClose: {
    backgroundColor: "#2196F3",
    marginHorizontal: 10
  
},
  textStyle: {
    color: "  ",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  actionButton: {
    flexDirection: "row",
  }
});

export default ConfirmationModal;
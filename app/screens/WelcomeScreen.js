import React, { useState } from "react";
import {
  Alert,
  ImageBackground,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

function WelcomeScreen(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [sModalVisible, setSModalVisible] = useState(false);
  return (
    <ImageBackground
      style={styles.background}
      source={{
        uri: "https://image.cnbcfm.com/api/v1/image/106435772-1583893683724gettyimages-1162855475.jpeg?v=1604611798",
      }}
    >
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>Sign in to your account.</Text>
            <TextInput style={styles.input} placeholder="Username" />

            <TextInput style={styles.input} placeholder="Password" />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Login</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={sModalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setSModalVisible(!sModalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>Create an account.</Text>
            <TextInput style={styles.input} placeholder="Email" />

            <TextInput style={styles.input} placeholder="Password" />

            <TextInput style={styles.input} placeholder="Confirm Password" />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setSModalVisible(!sModalVisible)}
            >
              <Text style={styles.textStyle}>Sign up</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Text style={styles.headline}>Flint Finance</Text>
      <View style={styles.container}>
        <Pressable
          style={styles.loginButton}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <View>
            <Text style={styles.text}>Login</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.signupButton}
          onPress={() => setSModalVisible(!sModalVisible)}
        >
          <View style={styles.signupButton}>
            <Text style={styles.text}>Sign up</Text>
          </View>
        </Pressable>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
  },
  headline: {
    color: "#6DCC94",
    fontSize: 30,
    fontWeight: "700",
    position: "absolute",
    top: "12%",
  },
  input: {
    height: 40,
    width: 150,
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  loginButton: {
    width: "50%",
    height: 70,
    backgroundColor: "#6DCC94",
    justifyContent: "center",
    alignItems: "center",
  },
  signupButton: {
    width: "50%",
    height: 70,
    backgroundColor: "#fc5c65",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    color: "#fff",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    width: 100,
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default WelcomeScreen;

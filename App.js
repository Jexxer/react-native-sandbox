import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  Pressable,
  Button,
  Image,
  SafeAreaView,
} from "react-native";
import axios from "axios";

export default function App() {
  const [imageList, setImageList] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [currentImageURL, setCurrentImageURL] = useState(
    "https://picsum.photos/200/300"
  );

  async function getImages() {
    let imagesURLs = [];
    let images = await axios.get("https://picsum.photos/v2/list?limit=100");
    images.data.forEach((image) => imagesURLs.push(image.download_url));
    setImageList(imagesURLs);
  }

  function handleClick() {
    let currentNum = currentImage;
    setCurrentImageURL(imageList[currentNum + 1]);
    setCurrentImage(currentNum + 1);
  }

  useEffect(() => {
    getImages();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        key={currentImageURL}
        source={{
          width: 300,
          height: 600,
          uri: currentImageURL,
        }}
      />
      <Pressable style={styles.button} onPress={handleClick}>
        <Text style={styles.text}>Click for new Image</Text>
      </Pressable>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "lightblue",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

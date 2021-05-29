import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Draw, DrawRef } from "@benjeau/react-native-draw";

export default function App() {
  return (
    <Draw
      //ref={drawRef}
      height={650}
      width={300}
      initialValues={{
        color: "#000000",
        thickness: 10,
        paths: []
      }}
      brushPreview="none"
      canvasStyle={{ elevation: 0, backgroundColor: "#ffffff" }}
    />
  );
}
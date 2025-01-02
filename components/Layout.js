// src/components/Layout.js
import React from 'react'
import { StyleSheet, View, ImageBackground } from 'react-native'

export default function Layout({ children }) {
  return (
    <ImageBackground
      source={require('../assets/vcpt62abjs3ourkci51u.jpg')} // Asegúrate de usar la imagen que quieres
      style={styles.container}
    >
      <View style={styles.innerContainer}>{children}</View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

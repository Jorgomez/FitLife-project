import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import Layout from '../components/Layout' // Importa el componente Layout

export default function HomeScreen({ navigation }) {
  return (
    <Layout>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to FitLife</Text>
        <Text style={styles.subtitle}>
          Your Platform for a Healthy Lifestyle
        </Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.buttonContainer}>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && styles.buttonPressed
            ]}
            onPress={() => navigation.navigate('Exercise Reminder')}
          >
            <Text style={styles.buttonText}> Create Exercise Alarm</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && styles.buttonPressed
            ]}
            onPress={() => navigation.navigate('Medicine Reminder')}
          >
            <Text style={styles.buttonText}> Create Medicine Alarm</Text>
          </Pressable>
        </View>
      </View>
    </Layout>
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center'
  },
  footer: {
    paddingBottom: 50
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },
  button: {
    width: '150',
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 15,
    alignItems: 'center',
    textAlign: 'justify',
    marginHorizontal: 10
  },
  buttonPressed: {
    backgroundColor: '#388E3C'
  },
  buttonText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

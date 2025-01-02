import React from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import Layout from '../components/Layout'
import ReminderSetter from '../components/ReminderSetter'

export default function ExerciseReminderScreen() {
  const handleSetExerciseReminder = (time) => {
    Alert.alert(
      'Exercise Reminder Set',
      `Your reminder is set for ${time.toLocaleTimeString()}`
    )

    // implementar componente para la logica adicional --> guardar el recordatorio en AsyncStorage  y tambien la logica para libreria expo-notifications
  }

  return (
    <Layout>
      <View style={styles.container}>
        <ReminderSetter
          title='Set Exercise Reminder'
          onSetReminder={handleSetExerciseReminder}
        />
      </View>
    </Layout>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold'
  }
})

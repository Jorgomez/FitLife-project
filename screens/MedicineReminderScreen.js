import React from 'react'
import { StyleSheet, View, Alert } from 'react-native'
import ReminderSetter from '../components/ReminderSetter'
import Layout from '../components/Layout'

export default function MedicineReminderScreen() {
  const handleSetMedicineReminder = (time) => {
    Alert.alert(
      'Medicine Reminder Set',
      `Your reminder is set for ${time.toLocaleTimeString()}`
    )
    //  Implementar logica adicional para poder setear una fecha determinada
  }

  return (
    <Layout>
      <View style={styles.container}>
        <ReminderSetter
          title='Set Medicine Reminder'
          onSetReminder={handleSetMedicineReminder}
        />
      </View>
    </Layout>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20
  }
})

import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'

export default function ReminderSetter({ title, initialTime, onSetReminder }) {
  const [date, setDate] = useState(initialTime || new Date())
  const [showPicker, setShowPicker] = useState(false)

  const handleDateChange = (event, selectedDate) => {
    setShowPicker(false)
    if (selectedDate) {
      setDate(selectedDate)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Button
        title={`Select Time: ${date.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit'
        })}`}
        onPress={() => setShowPicker(true)}
      />
      {showPicker && (
        <DateTimePicker
          value={date}
          mode='time'
          is24Hour={true}
          display='default'
          onChange={handleDateChange}
        />
      )}
      <Button
        title={initialTime ? 'Update Reminder' : 'Save Reminder'}
        editando
        onPress={() => onSetReminder(date)}
        color='#4CAF50'
      />

      {/* remplazar buttons por Pressable */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  }
})

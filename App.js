import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { ImageBackground, StyleSheet } from 'react-native'
import HomeScreen from './screens/HomeScreen'
import ExerciseReminderScreen from './screens/SportReminderScreen'
import MedicineReminderScreen from './screens/MedicineReminderScreen'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen
          name='Exercise Reminder'
          component={ExerciseReminderScreen}
        />
        <Stack.Screen
          name='Medicine Reminder'
          component={MedicineReminderScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%'
  }
})

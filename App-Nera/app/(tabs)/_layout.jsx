import { Tabs } from 'expo-router';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/index';

export default function TabLayout() {

  return (
    <Provider store={store}>
      <Tabs
        screenOptions={() => ({
          tabBarStyle: { display: 'none' },
          tabBarShowLabel: false,
          headerShown: false,
        })}
      >
        <Tabs.Screen name="index" />
        <Tabs.Screen name="LoginScreen" />
        <Tabs.Screen name="HomeTeacher" />
        <Tabs.Screen name="CreateClass" />
        <Tabs.Screen name="TeacherClassroom" />
        <Tabs.Screen name="StudentTrails" />
      </Tabs>
    </Provider>
  );
}
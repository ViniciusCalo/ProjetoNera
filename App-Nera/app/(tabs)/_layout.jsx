import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
//Redux
import { Provider } from 'react-redux';
import store from '../store/index';



export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Provider store={store}>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            display: "none"
          },
          tabBarShowLabel: false,
          headerShown: false,
        }}>
        <Tabs.Screen
          name="index"
        />
        <Tabs.Screen
          name="LoginScreen"
        />
        <Tabs.Screen
          name="HomeTeacher"
        />
      </Tabs>
    </Provider>
  );
}

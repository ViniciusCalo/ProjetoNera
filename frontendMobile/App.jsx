import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/screens/SplashScreen';
import HomeTeacher from './src/screens/teacher/HomeTeacher';
import TeacherClassroom from './src/screens/teacher/TeacherClassroom';
import TeacherProfile from './src/screens/TeacherProfile';
import LoginScreen from './src/screens/LoginScreen';
import StudentProfile from './src/screens/student/StudentProfile';
import CreateClass from './src/components/teacher/CreateClass';
import RegisterTeacher from './src/screens/RegisterTeacher';
import StudentTrails from './src/screens/student/StudentTrails';
import FractionTrails from './src/screens/student/FractionTrails';
import FractionScreen from './src/screens/student/FractionScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="HomeTeacher" component={HomeTeacher} />
                <Stack.Screen name="TeacherClassroom" component={TeacherClassroom} />
                <Stack.Screen name="TeacherProfile" component={TeacherProfile} />
                <Stack.Screen name="CreateClass" component={CreateClass} />
                <Stack.Screen name="StudentProfile" component={StudentProfile} />
                <Stack.Screen name="RegisterTeacher" component={RegisterTeacher} />
                <Stack.Screen name="StudentTrails" component={StudentTrails} />
                <Stack.Screen name="FractionTrails" component={FractionTrails} />
                <Stack.Screen name="FractionScreen" component={FractionScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

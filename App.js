import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Entypo, EvilIcons, MaterialIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

import Header from './screens/Header';
import Feeds from './screens/Feeds';
import Settings from './screens/Settings';

import JobDetail from './screens/JobDetail';

import Jobs from './screens/Jobs';

function Home() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Jobs') {
          iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline';
        } else if (route.name === 'Settings') {
          iconName = focused ? 'ios-list-box' : 'ios-list';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Jobs" component={Jobs} />
      <Tab.Screen name="Feed" component={Feeds} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}


function Root() {
  return (
    <Stack.Navigator >
      <Stack.Screen
        name="JobDetail"
        component={JobDetail}
        options={{
          headerLeft: (props) => (
            <TouchableOpacity onPress={() => alert(JSON.stringify(props))}>
              <MaterialIcons name="arrow-back" size={30} color="black" />
            </TouchableOpacity>
          ),
        }} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator headerMode="">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Root" component={Root} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

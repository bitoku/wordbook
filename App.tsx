import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import ProblemScreen from "./ProblemScreen";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={"Problem"} component={ProblemScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#fff',
  },
  common: {
    margin: 5,
    fontFamily: 'Hiragino Mincho ProN',
  },
  word: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 32,
  },
  phonetic: {
    marginTop: 0,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  header: {
    height: 30,
  }
});

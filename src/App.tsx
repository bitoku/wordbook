import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import QuestionScreen from "./screens/QuestionScreen";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={"Question"} component={QuestionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

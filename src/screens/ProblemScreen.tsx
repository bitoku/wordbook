import React, {useRef, useState} from 'react';
import {Animated, Dimensions, StyleSheet, View} from 'react-native';
import {Container, Text, Button, Body, Card, CardItem, Header, Title, Content} from 'native-base';
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../Props";
import {styles} from "../style/style";
import {Question} from "../components/Question";

type ProblemScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Problem'
  >;

type Props = {
  navigation: ProblemScreenNavigationProp;
};

export default function ProblemScreen(props: Props) {
  const {
    navigation,
  } = props;
  const slideAnim = useRef(new Animated.Value(0)).current;

  const slide = () => {
    Animated.timing(slideAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }

  return (
    <Container>
      <View style={styles.content}>
        <Animated.View style={{
          width: Dimensions.get('window').width,
          transform: [
            {
              translateX: slideAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [Dimensions.get('window').width / 2, -Dimensions.get('window').width / 2],
              })
            }]
        }}
        >
          <Question />
        </Animated.View>
        <Animated.View style={{
          width: Dimensions.get('window').width,
          transform: [
            {
              translateX: slideAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [Dimensions.get('window').width / 2, -Dimensions.get('window').width / 2],
              })
            }]
        }}
        >
          <Question />
        </Animated.View>
      </View>
    </Container>
  );
}

import React, {useRef, useState} from 'react';
import {Animated, Dimensions, StyleSheet, View} from 'react-native';
import {Container, Text, Button, Body, Card, CardItem, Header, Title, Content} from 'native-base';
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../Props";
import {styles} from "../style/style";
import {Question} from "../components/Question";
import {Vocabulary} from "../Vocabulary";

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

  const vocab: Vocabulary = {
    word: 'apple',
    pronunciation: 'ǽpl',
    syllable: 'ap･ple',
    pos: 'noun',
    inflection: '複～s | -z |',
    meanings: ['りんご'],
    text: `1 Cリンゴ; リンゴの木(apple tree) (!果肉ではU)
  ▸ bake [bite into] an apple
  リンゴを焼く[かじる]
  ▸ An apple a day keeps the doctor away.
  〘ことわざ〙 1日にリンゴ1つで医者いらず (!リンゴは健康に良いとされる) .
  2 Cリンゴに似た果実; リンゴに形が似たもの
  ▸ a crab apple
  野生リンゴ.
  3 〖A-〗アップル〘米国のIT企業〙; ＝ Macintosh.`
  }

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
          <Question vocab={vocab}/>
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
          <Question vocab={vocab}/>
        </Animated.View>
      </View>
      <View style={{flex: 1}}>
        <Button>
          <Text onPress={() => {slide()}}>
            next
          </Text>
        </Button>
      </View>
    </Container>
  );
}

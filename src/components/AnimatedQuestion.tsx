import {Animated, Dimensions, View} from "react-native";
import {Question} from "./Question";
import React, {useEffect, useRef} from "react";
import {Vocabulary} from "../Vocabulary";
import {styles} from "../style/style";
import {useUpdateEffect} from "../hooks/useUpdateEffect";

export type AnimatedQuestionProps = {
  vocabs: Vocabulary[],
  questionIdx: number,
}

export const AnimatedQuestion = (props: AnimatedQuestionProps) => {
  const {
    vocabs,
    questionIdx,
  } = props;
  const slideAnim = useRef(new Animated.Value(0)).current;

  useUpdateEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [questionIdx]);

  const defaultVocab: Vocabulary = {
    word: 'end',
    pronunciation: 'end',
    syllable: 'end',
    pos: 'end',
    inflection: 'end',
    meanings: ['end'],
    text: `end`
  };

  return (
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
        <Question vocab={vocabs[questionIdx] || defaultVocab}/>
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
        <Question vocab={vocabs[questionIdx] || defaultVocab}/>
      </Animated.View>
    </View>
  );
}